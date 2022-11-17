import Header from 'components/Elements/Header/Header'
import Menu from 'components/Elements/Menu/Menu'
import React, { useState, useEffect } from 'react'
import './MainLayout.scss'

const MainLayout = (props) => {
    const { children } = props

    return (
        <div className="layout-wrapper">
            <div className="header">
                <Header />
            </div>
            <div className="manu">
                <Menu />
            </div>
            <div className="content">{children}</div>
        </div>
    )
}

export default MainLayout
