import Header from 'components/Elements/Header/Header'
import { ProductContext } from 'context/ProductContext'
import MainLayout from 'Layouts/MainLayout'
import React, { useState, useEffect } from 'react'
import { useContext } from 'react'
import './Home.scss'

const Home = () => {
    const { products } = useContext(ProductContext)

    return (
        <MainLayout>
            <div className="home-wrapper"></div>
        </MainLayout>
    )
}

export default Home
