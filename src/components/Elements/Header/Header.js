import { ProductContext } from 'context/ProductContext'
import { Link, useNavigate } from 'react-router-dom'
import React, { useContext } from 'react'
import { MdShoppingCart } from 'react-icons/md'
import './Header.scss'

const Header = (props) => {
    const { noCart = false } = props
    const { products } = useContext(ProductContext)
    const navigate = useNavigate()

    return (
        <div className="header-wrapper">
            <h1 onClick={() => navigate('/')}>Nome Loja</h1>
            {!noCart && (
                <div className="header-cart-wrapper">
                    <Link to="/cart">
                        <MdShoppingCart />
                        <span className="cart-title">Carrinho</span>

                        {products.length ? <span className="cart-items">{products.length}</span> : <></>}
                    </Link>
                </div>
            )}
        </div>
    )
}

export default Header
