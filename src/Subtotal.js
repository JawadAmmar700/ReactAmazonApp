import React from 'react'
import './Subtotal.css'
import { StateValue } from './StateProvider'
import { useHistory as History } from 'react-router-dom'
function Subtotal() {
    const [{ basket }, dispatch] = StateValue();
    const history = History()
    let totalPrice = 0;
    for (var i = 0; i < basket.length; i++) {
        totalPrice = parseInt(totalPrice) + parseInt(basket[i].price);
    }

    const checkOut = (e) => {
        e.preventDefault();
        history.push("/checkout")
    }
    return (
        <>
            <p >SubTotal({basket.length} items)<strong>${totalPrice}</strong></p>
            <div className="check">

                <input type="checkbox" />
                <span>jcsjvdjvxdv</span>
            </div>
            <button onClick={checkOut}>Proceed to CheckOut</button>

        </>
    )
}

export default Subtotal
