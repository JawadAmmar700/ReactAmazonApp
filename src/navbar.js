import React, { useEffect } from 'react'
import './navbar.css';
import SearchIcon from '@material-ui/icons/Search';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { Link } from "react-router-dom";
import { StateValue } from './StateProvider'
import { auth } from './firebase'
import { useHistory as History } from "react-router-dom";

function navbar() {
    const [{ basket, user }, dispatch] = StateValue();
    const history = History();

    const handleSign = () => {

        if (user) {


            auth.signOut();
            dispatch({
                type: "EMPTY_BASKET",
                basket: []
            })

        }


    }

    return (
        <div className="navbar">
            <Link to="/">
                <img src="https://s3.india.com/wp-content/uploads/2016/03/amazon1.jpg" alt="" />
            </Link>


            <div className="input">
                <input type="text"></input>
                <div className="search">
                    <SearchIcon /></div>
            </div>

            <div className="list">
                <ul>

                    <Link to={!user && "/login"} >
                        <li onClick={handleSign}>
                            <span>Hello,{user ? user.email : "Guest"}</span>
                            <p>{user ? "Sign Out" : "Sign In"}</p>
                        </li>
                    </Link>
                    <li>
                        <span>Returns <p>& Orders</p></span>

                    </li>
                    <Link to="/Cart">
                        <li className="cart">
                            <AddShoppingCartIcon />
                            <span >cart</span>
                            <p>{basket.length}</p>
                        </li>
                    </Link>
                </ul>
            </div>
        </div>
    )
}

export default navbar;
