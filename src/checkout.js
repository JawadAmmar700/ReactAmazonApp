import React, { useState as State, useEffect as Effect } from "react"
import "./checkout.css"
import { StateValue } from "./StateProvider"
import Cartproduct from "./cartproduct"
import {
  CardElement,
  useStripe as Stripe,
  useElements as Elements,
} from "@stripe/react-stripe-js"
import axios from "axios"
import { useHistory as History } from "react-router-dom"
import { db } from "./firebase"

function checkout() {
  const [{ basket, user }, dispatch] = StateValue()
  const stripe = Stripe()
  const elements = Elements()
  const [error, setError] = State(null)
  const [disabled, setDisabled] = State(true)
  const [succeeded, setSucceeded] = State(false)
  const [processing, setProcessing] = State("")
  const [clientSecret, setClientSecret] = State("")
  const history = History()
  let totalPrice = 0
  for (var i = 0; i < basket.length; i++) {
    totalPrice = parseInt(totalPrice) + parseInt(basket[i].price)
  }

  Effect(() => {
    const getClientSecret = async () => {
      const response = await axios({
        method: "post",

        url: `${process.env.REACT_APP_HOST}/checkout/create?total=${
          totalPrice * 100
        }`,
      })
      setClientSecret(response.data.clientSecret)
    }

    getClientSecret()
  }, [basket])

  const handleSubmit = async e => {
    e.preventDefault()
    setProcessing(true)

    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        setSucceeded(true)
        setError(null)
        setProcessing(false)

        db.collection("users")
          .doc(user?.uid)
          .collection("orders")
          .doc(paymentIntent.id)
          .set({
            basket: basket,
            amount: paymentIntent.amount,
            created: paymentIntent.created,
          })

        alert("thank you your order has been successfully placed")

        dispatch({
          type: "EMPTY_BASKET",
          basket: [],
        })
      })
  }

  const handleChange = e => {
    setDisabled(false)
    setError(e.error ? e.error.message : "")
  }
  return (
    <>
      <h1>CheckOut({basket.length} items)</h1>
      <div className="checkOutContainer">
        <div className="head">
          <h2>Delivery Address</h2>
          <div className="addressInfo">
            <p>{user?.email}</p>
            <p>Mount-Lebanon</p>
            <p>Ain-Anoub,123</p>
          </div>
        </div>
        <div className="middleproduct">
          <h2 className="h2">
            Reviews items and <br /> delivery
          </h2>
          <div className="products">
            {basket.map(item => {
              const { id, text, price, rating, img } = item
              return (
                <Cartproduct
                  id={id}
                  text={text}
                  price={price}
                  rating={rating}
                  img={img}
                />
              )
            })}
          </div>
        </div>
        <div className="payment">
          <h2>Payment Methode</h2>
          <div className="carddetail">
            <h4>Card Details</h4>
            <div className="card">
              <form onSubmit={handleSubmit}>
                <CardElement onChange={handleChange} />
                <div className="bottom">
                  <h4 id="h4">Order Total ${totalPrice}</h4>
                  <button
                    type="submit"
                    className="buy"
                    disabled={processing || disabled || succeeded}
                  >
                    <span>{processing ? <p>processing</p> : "Buy Now"}</span>
                  </button>
                  {error && <div>{error}</div>}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default checkout
