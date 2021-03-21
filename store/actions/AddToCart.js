export const addToCart = (product) => {
    return {
        type: "ADD_CART",
        payload: product
    };
};