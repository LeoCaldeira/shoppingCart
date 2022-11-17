import Header from 'components/Elements/Header/Header'
import { ProductContext } from 'context/ProductContext'
import React, { useContext } from 'react'
import './Cart.scss'

const Cart = () => {
    const { products, setProducts } = useContext(ProductContext)
    console.log('products', products) //TODO remove log
    return (
        <div className="cart-wrapper">
            <Header noCart />
            <div className="cart-content">
                <h1> Produtos: </h1>
                {products.map((product) => {
                    return <CartCard product={product} />
                })}
            </div>
        </div>
    )
}

export default Cart

const CartCard = (product) => {
    console.log('product', product) //TODO remove log
    return (
        <div>
            <div className="image-wrapper">
                <img src={product.img} alt="" />
            </div>
            <div className="item-infos">
                <h2>{product.name}</h2>
                <p>{product.description}</p>
            </div>
            <p className="product-price">R$: {product.price},00</p>
            <div className="quantity-wrapper">
                <div className="round">-</div>
                <div className="quantity">{'$quantidade'}</div>
                <div className="round">+</div>
            </div>
        </div>
    )
}
