import React, {useState} from 'react'
//Routing
import Link from 'next/link'
//Icons
import Menu from '../public/bars.svg'
import Close from '../public/times.svg'
import CartIcon from '../public/shopping-cart.svg'
// Styles
import styles from '../styles/Header.module.css'
//Redux
import { connect } from 'react-redux';

const Header = (props) => {
    const [toggle, setToggle] = useState(false);

    const menuToggle = () => setToggle(!toggle);

    return (
        <header className={styles.header}>
            <div className={styles.menu} onClick={menuToggle}>
                <img src={Menu} alt="menu" width="20" />
            </div>
            <div className={styles.logo}>
                <h1><Link href="/" style={{textDecoration: "none"}}>Shop</Link></h1>
            </div>
            <nav>
                <ul className={toggle ? "toggle" : ""}>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/products">Products</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                    <li><Link href="/loginRegister">Login / Register</Link></li>
                    <li className="close" onClick={menuToggle}>
                        <img src={Close} alt="menu" width="20" />
                    </li>
                </ul>
                <div className={styles.nav-cart}>
                    <span>{props.cart.length}</span>
                    <Link href="/cart">
                        <img src={CartIcon} alt="menu" width="30" />
                    </Link>
                </div>
            </nav>
        </header>
    )
}

const mapStateToProps = (state) => {
    return {
        products: state.products,
        cart: state.cart
    };
};

export default connect(mapStateToProps)(Header);
