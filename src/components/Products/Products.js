import React from 'react'
import products from 'utils/products.json'
import Card from 'components/Elements/Card/Card'
import MainLayout from 'Layouts/MainLayout'
import './Products.scss'

const Products = () => {
    const currentPath = window.location.href.split('/')[3]
    const selectedProducts = products[currentPath]

    return (
        <MainLayout>
            <div className="products-wrapper">
                {selectedProducts.map((product) => (
                    <Card product={product} />
                ))}
            </div>
        </MainLayout>
    )
}

export default Products
