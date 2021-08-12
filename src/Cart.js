import React from 'react'
import "./Cart.css";
import { StateValue } from './StateProvider'
import Subtotal from './Subtotal'
import Cartproduct from './cartproduct'




function Cart() {
    const [{ basket, user }, dispatch] = StateValue();

    return (
        <div className="CartOverlay">
            <div className="upper">

                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSEt3RknXi3T1B5gHbsJWXLodtTh7LioBFkg&usqp=CAU" alt="" />
                <h3>Hello,{user ? user.email : "Guest"}</h3>
                <h2 id="h1">Your Shopping Basket</h2>
            </div>

            {
                basket.map((item) => {

                    const { id, text, price, rating, img } = item;
                    return (

                        <Cartproduct

                            id={id}
                            text={text}
                            price={price}
                            rating={rating}
                            img={img}
                            disabled={false}
                        />


                    )
                })
            }

            <div className="currency">

                <Subtotal />
            </div>

        </div>
    )
}

export default Cart
