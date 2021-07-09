import React from 'react';
import { useStateValue } from '../context/StateProvider';
import '../css/Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from "./Subtotal";


function Checkout() {
    const [{ cart }] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout_left">
                <img className="checkout_ad" src="https://www.coolmilk.com/wp-content/uploads/250-newsletter-banner-advert.png" alt="amazon Ad" />
                {cart?.length === 0 ? ( //if cart is empty, use iternery ?? to register one of the two divs 
                    <div>
                        <h2 className="cart_empty"> Cart is empty </h2>
                    </div> 
                ) : (
                    <div>
                        <h2 className="cart_full"> Your Shopping Basket </h2>
                        {cart.map(item => {
                            return (
                                <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                            )
                        })}
                    </div>
                )}
            </div>
            {cart.length > 0 && (
                <div className="checkout_right">
                    <Subtotal />
                </div>
            )}
        </div>
    )
}

export default Checkout
