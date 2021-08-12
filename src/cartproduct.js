import React from 'react'
import './cartproduct.css'
import StarIcon from '@material-ui/icons/Star';
import { StateValue } from './StateProvider'
function cartproduct({ id, text, price, rating, img, disabled }) {
    const [{ basket }, dispatch] = StateValue();

    const RemovefromCart = (id, e) => {
        e.preventDefault();
        dispatch({
            type: "REMOVE_ITEM",
            id: id
        })
    }
    return (

        <div key={id} className="newproduct">
            <img src={img} alt="" />
            <div className="newinfo">

                <p>{text}</p>
                <strong>${price}</strong><br />

                {Array(rating).fill().map(() =>
                    <StarIcon />
                )}
            </div>


            {disabled ?
                ''
                :
                <button onClick={e => RemovefromCart(id, e)}>remove from Cart</button>
            }
        </div>
    )
}

export default cartproduct
