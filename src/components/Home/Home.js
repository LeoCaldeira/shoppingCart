import React, { useEffect, useState } from 'react'
import MainLayout from 'Layouts/MainLayout'
import products from 'utils/products.json'
import './Home.scss'
import Card from 'components/Elements/Card/Card'

const Home = () => {
    const [allProducts, setAllProducts] = useState([])
    useEffect(() => {
        let prods = []
        Object.values(products).map((category) => prods.push(...category))

        setAllProducts([...prods])
    }, [])

    return (
        <MainLayout>
            <div className="home-wrapper">
                {allProducts.map((product) => (
                    <div key={product.id}>
                        <Card product={product} />
                    </div>
                ))}
            </div>
        </MainLayout>
    )
}

export default Home
