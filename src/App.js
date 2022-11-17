import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ProductContext } from 'context/ProductContext'
import { useState, useMemo } from 'react'
import Home from 'components/Home/Home'
import './App.scss'
import Products from 'components/Products/Products'
import Cart from 'components/Cart/Cart'

function App() {
    const [products, setProducts] = useState([])

    const productsProvider = useMemo(() => ({ products, setProducts }), [products, setProducts])
    return (
        <div className="App">
            <Router>
                <ProductContext.Provider value={productsProvider}>
                    <Routes>
                        <Route element={<Home />} path="/" exact />
                        <Route element={<Home />} path="/home" exact />
                        <Route element={<Products />} path="/hardware" exact />
                        <Route element={<Products />} path="/games" exact />
                        <Route element={<Products />} path="/computadores" exact />
                        <Route element={<Products />} path="/tv" exact />
                        <Route element={<Products />} path="/ar-e-ventilacao" exact />
                        <Route element={<Cart />} path="/cart" exact />
                    </Routes>
                </ProductContext.Provider>
            </Router>
        </div>
    )
}

export default App
