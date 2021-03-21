const INITIAL_STATE = {
    products: [],
    cart: [],
    message: ""
};

export const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "GET_PRODUCTS_SUCCESS":
            return { ...state, products: action.payload };
        case "GET_PRODUCTS_ERROR":
            return { ...state, message: action.payload };
        case "ADD_CART":
            return { ...state, cart: [...state.cart, action.payload] };
        default:
            return state;
    }
};