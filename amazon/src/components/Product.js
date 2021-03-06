import React from 'react';
import '../css/Product.css';
import  { useStateValue } from '../context/StateProvider';

function Product({ id, title, image, price, rating }) {
    const [dispatch] = useStateValue(); // data layer 
    const addToCart = () => { // dispatch function that takes action type and item
        dispatch({
            type: 'ADD_TO_CART',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            }
        })
    }

    return (
        <div className="product">
            <div className="product_info">
                <p> {title } </p> 
                <p className="product_price"> 
                    <small> $ </small>
                    <strong> {price} </strong>
                </p>
                <div className="product_rating">
                    {Array(rating).fill().map((_) => (<p>⭐️</p>))}
                </div>
            </div>
            <img src={image} alt="product" />
            <button onClick={addToCart}> Add to basket </button> {/* triggers action onClick */}
        </div>
    )
}

export default Product
