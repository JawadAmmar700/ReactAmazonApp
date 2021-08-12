import React from 'react'
import "./home.css"
import Product from "./product"

function home() {
    return (
        <div className="OverAll">
            <img id="homeImg" src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Computers_1x._CB432469755_.jpg" alt="" />

            <div className="product1">
                <Product

                    id={1}
                    text="Amazon Basics Humidifier, 4 L, Black"
                    price="100"
                    rating={5}
                    img="https://m.media-amazon.com/images/I/71n3DlokliL._AC_UL320_.jpg"



                />
                <Product
                    id={2}
                    text="AmazonBasics 1500W Oscillating Ceramic Heater with Adjustable Thermostat, Black"
                    price="85"
                    rating={4}
                    img="https://m.media-amazon.com/images/I/91jm6TmgkxL._AC_UL320_.jpg"


                />


            </div>
            <div className="product2">
                <Product
                    id={3}
                    text="AmazonBasics 60-Inch Lightweight Tripod with Bag"
                    price="40"
                    rating={3}
                    img="https://m.media-amazon.com/images/I/61vjUCzQCaL._AC_UL320_.jpg"

                />
                <Product
                    id={4}
                    text="Amazon Basics Nylon Braided Lightning to USB A Cable, MFi Certified Apple iPhone Charger, Silver, 6-Foot"
                    price="67"
                    rating={5}
                    img="https://m.media-amazon.com/images/I/71uMsNcCVuL._AC_UL320_.jpg"

                />
                <Product
                    id={5}
                    text="Amazon Basics Ceramic Non-Stick 12-Piece Cookware Set, Turquoise - Pots, Pans and Utensils"
                    price="20"
                    rating={3}
                    img="https://m.media-amazon.com/images/I/81FqVM6bAcL._AC_UL320_.jpg"

                />
                <Product
                    id={6}
                    text="Amazon Basics Foldable, 18 Metal Platform Bed Frame with Tool-Free Assembly, No Box Spring Needed - Queen"
                    price="50"
                    rating={4}
                    img="https://m.media-amazon.com/images/I/811LwQokuQL._AC_UL320_.jpg"

                />


            </div>
            <div className="product3">
                <Product
                    id={7}
                    text="Amazon Basics Stainless Steel Portable Fast, Electric Hot Water Kettle for Tea and Coffee, 1 Liter, Silver"
                    price="89"
                    rating={5}
                    img="https://m.media-amazon.com/images/I/91oiSVwU7OL._AC_UL320_.jpg"
                />
                <Product
                    id={8}
                    text="Amazon Basics Portable Foldable Photo Studio Box with LED Light - 25 x 30 x 25 Inches"
                    price="34"
                    rating={2}
                    img="https://m.media-amazon.com/images/I/711x+T7smzL._AC_UL320_.jpg"
                />
                <Product
                    id={9}
                    text="Amazon Basics 30W One-Port USB-C 3.0 Wall Charger for Laptops, Tablets and Phones - Black"
                    price="57"
                    rating={5}
                    img="https://m.media-amazon.com/images/I/71IBbQdkvsL._AC_UL320_.jpg"

                />


            </div>
        </div>
    )
}

export default home
