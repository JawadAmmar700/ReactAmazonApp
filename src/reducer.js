import React from 'react'
import "./reducer.css"

export const initialState = {
    basket: [],
    user: null
}

const reducer = (State, action) => {
    switch (action.type) {
        case "ADD_BASKET":
            return {
                ...State,
                basket: [...State.basket, action.item]
            }

        case "REMOVE_ITEM":
            const index = State.basket.findIndex((basketItem) =>
                basketItem.id === action.id
            )
            let newBasket = [...State.basket]
            if (index >= 0) {
                newBasket.splice(index, 1);
            }
            else {
                alert('cannot remove ')
            }
            return { ...State, basket: newBasket }
        case "ADD_USER":
            return { ...State, user: action.user }
        case "EMPTY_BASKET":

            return {
                ...State, basket: action.basket
            }






        default:
            return State
    }
}

export default reducer
