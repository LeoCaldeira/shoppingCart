import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ProductContext } from 'context/ProductContext'
import { useState, useMemo } from 'react'
import Home from 'components/Home/Home'
import './App.scss'

function App() {
    const [products, setProducts] = useState(['produto 1', 'produto 2', 'produto 3', 'produto 4'])

    const productsProvider = useMemo(() => ({ products, setProducts }), [products, setProducts])
    return (
        <div className="App">
            <Router>
                <ProductContext.Provider value={productsProvider}>
                    <Routes>
                        <Route element={<Home />} path="/" exact />
                        <Route element={<Home />} path="/home" exact />
                    </Routes>
                </ProductContext.Provider>
            </Router>
        </div>
    )
}

export default App
