import Header from 'components/Elements/Header/Header'
import { ProductContext } from 'context/ProductContext'
import React, { useContext, useEffect, useState } from 'react'
import './Cart.scss'

const Cart = () => {
    const { products, setProducts } = useContext(ProductContext)
    const [totalPrice, setTotalPrice] = useState(0)

    const handleDeleteItem = (productId) => {
        const newCart = [...products]
        let newProduct = products.filter((item) => item.id === productId)[0]
        let itemIndex = products.findIndex((item) => item.id === productId)
        if (itemIndex !== -1) {
            if (newProduct?.count > 1) {
                newCart.splice(itemIndex, 1, {
                    ...newProduct,
                    count: newProduct?.count - 1,
                })
            } else {
                newCart.splice(itemIndex, 1)
            }
        }

        setProducts([...newCart])
    }

    const handleAddItem = (productId) => {
        const newCart = [...products]
        let newProduct = products.filter((item) => item.id === productId)[0]
        let itemIndex = products.findIndex((item) => item.id === productId)
        if (itemIndex !== -1) {
            newCart.splice(itemIndex, 1, {
                ...newProduct,
                count: newProduct?.count + 1,
            })
        }

        setProducts([...newCart])
    }

    useEffect(() => {
        let valorTotal = 0
        products.forEach((product) => (valorTotal += product.count * product.price))

        setTotalPrice(valorTotal)
    }, [products])

    return (
        <div className="cart-wrapper">
            <Header noCart />
            <div className="cart-content">
                <div>
                    <h1> Produtos: </h1>
                    {products.map((product) => {
                        return (
                            <div key={product.id}>
                                <CartCard {...{ product, handleDeleteItem, handleAddItem }} />
                            </div>
                        )
                    })}
                </div>
                <div className="total-value">Total a pagar: {totalPrice}</div>
            </div>
        </div>
    )
}

export default Cart

const CartCard = (props) => {
    const { product, handleDeleteItem, handleAddItem } = props

    return (
        <div className="cart-card-wrapper" key={product.id}>
            <div className="image-wrapper">
                <img src={product.img} alt="" />
            </div>
            <div className="item-infos">
                <h2>{product.name}</h2>
                <p>{product.description}</p>
            </div>
            <div className="quantity-wrapper">
                <div className="round" onClick={() => handleDeleteItem(product.id)}>
                    -
                </div>
                <div className="quantity">{product.count}</div>
                <div className="round" onClick={() => handleAddItem(product.id)}>
                    +
                </div>
            </div>
            <p className="product-price">
                <span>R$ unidade</span>
                R$: {product.price},00
            </p>
            <p className="product-price total">
                <span> R$ total</span>
                R$: {product.price * product.count},00
            </p>
        </div>
    )
}
