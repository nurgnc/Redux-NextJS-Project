import axios from "axios";

export const getProducts = () => (dispatch) => {
    axios.get('https://60539ba845e4b300172920cd.mockapi.io/api/products')
        .then(response => dispatch({ type: "GET_PRODUCTS_SUCCESS", payload: response.data}))
        .catch(error => dispatch({ type: "GET_PRODUCTS_ERROR", payload: error}));
};