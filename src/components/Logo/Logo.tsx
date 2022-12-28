import React from 'react';
import './Logo.scss'
import LogoImg from '../../img/logo.svg'

const Logo: React.FC = () => {

    return (
        <div className='logoWrapper'>
            <img className='logoImg' src={LogoImg} alt=""/>
        </div>
    )
}

export default Logo