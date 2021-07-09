export const initialState = {
    cart: [],
    user: null,
};

export const getCartTotal = (cart) => 
cart?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
    console.log(action)
    switch(action.type) {
        case 'ADD_TO_CART':
            return { 
                ...state,
                cart: [...state.cart, action.item],
            };
        case 'REMOVE_FROM_CART':
            let newCart = [...state.cart]
            const index = state.cart.findIndex((cartItem) => cartItem.id === action.id);
            if (index >= 0) {
                newCart.splice(index, 1);
            } else {
                console.warn( `Cant remove product (id: ${action.id} as its not in store)`)
            }
            return { ...state, cart: newCart };
        default:    //default case needed
            return state; 
    }
}

export default reducer;