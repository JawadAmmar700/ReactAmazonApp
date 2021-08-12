import React from 'react'
import "./product.css";
import StarIcon from '@material-ui/icons/Star';
import { StateValue } from './StateProvider'

function product({ id, text, price, rating, img }) {
    const [{ basket, user }, dispatch] = StateValue();

    const AddToCart = (e) => {
        e.preventDefault();
        dispatch(
            {
                type: "ADD_BASKET",
                item: {
                    id: id,
                    text: text,
                    price: price,
                    rating: rating,
                    img: img
                }
            }
        )

    }

    return (
        <div key={id} className="product">
            <img src={img} alt="" />
            <div className="info">

                <p>{text}</p>
                <strong>${price}</strong><br />

                {Array(rating).fill().map(() =>
                    <StarIcon />
                )}
            </div>



            <button onClick={AddToCart}>Add to Cart</button>
        </div>
    )
}

export default product
