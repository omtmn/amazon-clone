export const initialState = {
    cart: [], //this is the 'store' but the only initial state (data) we need is the cart. 
};

export const getCartTotal = (cart) => 
cart?.reduce((amount, item) => item.price + amount, 0); 
//takes cart and uses reduce method that takes two params, and then accumulate the price to original amount which starts at 0.

const reducer = (state, action) => { // when i get the state, or that cart. we can manipulate that state by dispatching said actions
    switch(action.type) { //check against a bunch of cases is what switch does 
        case 'ADD_TO_CART': //our action
            return { 
                ...state, // brings state over with spread. we dont overwrite the current state
                cart: [...state.cart, action.item], // grab new item dispatched by action type and add that to current state of cart
            };
        case 'REMOVE_FROM_CART':
            let newCart = [...state.cart] // copy cart into new variable without overwriting it 
            // go find the index of specific item by checking each cart item and check if id is === to action id 
            const index = state.cart.findIndex((cartItem) => cartItem.id === action.id);
            if (index >= 0) { // if item exists 
                newCart.splice(index, 1); //get that new cart and remove it at the index it you found. 1 is the latest item added in that array 
            } else {
                console.warn( `Cant remove product (id: ${action.id} as its not in store)`)
                // console.warn is just basically a red console log 
            }
            return { ...state, cart: newCart }; //chopped off a value with splice and set that state (newCart) to that original state (cart)
        default:    //default case needed
            return state; 
    }
}

export default reducer;