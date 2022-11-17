import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './Menu.scss'

const Menu = (props) => {
    const {} = props
    const navigate = useNavigate()
    const currentPath = window.location.href.split('/')[1]

    return (
        <div className="menu-wrapper">
            <div className={`option ${currentPath === 'hardware' && 'active'}`} onClick={() => navigate('/hardware')}>
                Hardware
            </div>
            <div className={`option ${currentPath === 'games' && 'active'}`} onClick={() => navigate('/games')}>
                Games
            </div>
            <div
                className={`option ${currentPath === 'computadores' && 'active'}`}
                onClick={() => navigate('/computadores')}
            >
                Computadores
            </div>
            <div className={`option ${currentPath === 'tv' && 'active'}`} onClick={() => navigate('/tv')}>
                TV
            </div>
            <div
                className={`option ${currentPath === 'ar-e-ventilacao' && 'active'}`}
                onClick={() => navigate('/ar-e-ventilacao')}
            >
                Ar e Ventilação
            </div>
        </div>
    )
}

export default Menu
