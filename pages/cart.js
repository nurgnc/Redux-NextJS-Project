import React from 'react'
import Head from 'next/head'
import { connect } from 'react-redux'
import Link from 'next/link'
import styles from '../styles/Cart.module.css';

const Cart = (props) => {
    return (
        <div>
            {
                props.cart.map(item => (
                    <div className={styles.details} key={item.id}>
                        <img src={item.image} alt={item.name} />
                        <div className={styles.box}>
                            <div className={styles.row}>
                                <h2>{item.name}</h2>
                                <span>${item.price}</span>
                            </div>

                            <p>{item.description}</p>
                            <Link href="/cart" >
                                <a className={styles.cart}>Add To Cart</a>
                            </Link>
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

export default connect(mapStateToProps)(Cart);