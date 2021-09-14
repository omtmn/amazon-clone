import React from 'react';
import '../css/Subtotal.css';
import CurrencyFormat from "react-currency-format"; // this is from a external library with these props.
import { useStateValue } from '../context/StateProvider';
import { getCartTotal } from '../context/reducer';

function Subtotal() {
    const [{ cart }] = useStateValue();
    return (
        <div className="subtotal">
        <CurrencyFormat 
        renderText={(value) => (
            <>
            <p>
                Subtotal ({cart.length} items): <strong> {value} </strong>
            </p>
            <small className="subtotal_gift">
                <input type="checkbox" /> This order contains a gift
            </small>
            </>
        )}
            decimalScale={2}
            value={getCartTotal(cart)}
            displayType={'text'}
            thousandSeparator={true}
            prefix={"$"}
        />
            <button> Proceed to Checkout </button>
        </div>
    )
}

export default Subtotal
