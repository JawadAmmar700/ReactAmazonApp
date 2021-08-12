import React, { useEffect as Effect, useState as State } from 'react'
import './order.css'
import { db } from './firebase'
import { StateValue } from './StateProvider'
import Cartproduct from './cartproduct'

function orders() {
    const [{ basket, user }, dispatch] = StateValue();
    const [orders, setOrders] = State([]);

    Effect(() => {

        if (user) {
            db
                .collection('users')
                .doc(user?.uid)
                .collection('orders')
                .orderBy('created', 'desc')
                .onSnapshot(snapshot => (
                    setOrders(snapshot?.docs.map(doc => ({
                        id: doc.id,
                        data: doc.data()
                    })))
                ))
            console.log(orders.data)

        } else {
            setOrders([])
        }

    }, [user])
    return (
        <>
            <h1>Yours Orders</h1>
            <div className="orders">
                <h3>Orders</h3>
                <h5>date</h5>
                <p>{orders.id}</p>
                {

                    orders.data?.basket.map((item) => {
                        <Cartproduct
                            id={item.id}
                            text={item.text}
                            price={item.price}
                            rating={item.rating}
                            img={item.img}
                            disabled={true}
                        />
                    })

                }
                <h2>Order Total:${orders.data?.amount}</h2>
            </div>
        </>
    )
}

export default orders
