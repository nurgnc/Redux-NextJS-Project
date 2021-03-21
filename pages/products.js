import React, { useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Products.module.css'
//Redux
import { connect } from 'react-redux';
import { getProducts } from '../store/actions/Api';
import { addToCart } from '../store/actions/AddToCart';

const Products = (props) => {

    useEffect(() => {
        props.getProducts();
    }, []);


    return (
        <div id={styles.product}>
            {
                props.products.map(product => (
                    <div className={styles.card} key={product.id}>
                        <Link href={`/products/${product.id}`}>
                            <a><img src={product.image} alt={product.name} /></a>
                        </Link>
                        <div className={styles.content}>
                            <h3>
                                <Link href={`/products/${product.id}`} style={{ textDecoration: "none" }}>
                                <a>{product.name}</a></Link>
                            </h3>
                            <span>${product.price}</span>
                            <p>{product.description}</p>
                            <button onClick={() => props.addToCart(product)}>Add to cart</button>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        products: state.products,
        cart: state.cart
    };
};

export default connect(mapStateToProps, { getProducts, addToCart })(Products);
