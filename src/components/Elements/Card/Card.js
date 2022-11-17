import { ProductContext } from 'context/ProductContext'
import React, { useContext } from 'react'
import './Card.scss'

const Card = (props) => {
    const { product } = props
    const { products, setProducts } = useContext(ProductContext)

    const handlePrice = (value, off) => {
        return value + (value * off) / 100
    }

    const addToCart = () => {
        const newCart = [...products]
        let itemIndex = products.findIndex((item) => item.id === product.id)
        if (itemIndex !== -1) {
            newCart.splice(itemIndex, 1, {
                ...product,
                count: products[itemIndex]?.count + 1,
            })
        } else {
            newCart.push({
                ...product,
                count: 1,
            })
        }

        setProducts([...newCart])
    }

    return (
        <div className="card-wrapper" key={product.id}>
            <div className="image-wrapper">
                <img src={product.img} alt="" />
            </div>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p className="old-product-price">R$: {handlePrice(product.price, product['%off'])},00</p>
            <p className="product-price">R$: {product.price},00</p>
            <p>%off: {product['%off']}</p>
            <button onClick={() => addToCart()}>Comprar</button>
        </div>
    )
}

export default Card
