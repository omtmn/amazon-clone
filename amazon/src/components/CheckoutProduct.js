import React from 'react';
import '../css/CheckoutProduct.css';
import { useStateValue } from "../context/StateProvider";

function CheckoutProduct({ id, title, price, rating, image}) {
    const [dispatch] = useStateValue();

    const removeFromCart = () => {
        dispatch({
            type: "REMOVE_FROM_CART",
            id: id,
        });
    }
    return (
        <div className="checkout_product">
            <img className="checkout_productImage" src={image} alt="product" /> 
            <div className="checkout_productInfo"> 
                <p className="checkout_productTitle"> </p>
                <p className="checkout_productPrice"> 
                    <small>$</small>
                    <strong> {price} </strong>
                </p>
                <button onClick={removeFromCart}> Remove from basket </button>
            </div>
            <div className="checkout_productRating">
                {Array(rating)
                .fill()
                .map((_, i) => (
                    <p> ⭐️ </p>
                ))}
            </div>
           
        </div>
    )
}

export default CheckoutProduct
