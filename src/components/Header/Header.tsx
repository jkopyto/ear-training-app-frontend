import React from 'react'
import clefLogo from 'src/images/icon.png'

const Header = () => (
    <div className= "m-grid m-grid__item m-grid__item--top i-header">
        <div className= "m-grid m-grid__item--center m-grid--ver m-grid__item i-header__content">
            <div className = "m-grid m-grid__item i-header__logo--wrapper">
                <img src={clefLogo} alt="" className = "m-grid__item i-header__logo"/>
            </div>
        </div>
    </div>
)

export default Header