import React, { Fragment } from 'react'
import '../../App.css';
import { BiSearchAlt2 } from "react-icons/bi"
import { FaCartArrowDown } from "react-icons/fa6";

const Header = () => {
    return (
        <Fragment>
            <nav className='navbar row'>
                <div className='col-12 col-md-3'>
                    <div className='navbar-brand'>
                        <img src="/img/logo_small.png" alt="logo de lo que nececitas" className='logo'/>
                    </div>
                </div>
                <div className='col-12 col-md-6 mt-2 mt-md-0'>
                    <div className='input-group'>
                        <input
                            type='text'
                            id='search_field'
                            className='from-control'
                            placeholder='Que producto buscas?' />
                        <div className='input-group-append'>
                            <button className='btn' id='search-btn' >
                                <BiSearchAlt2 className="iconSearch icon-c" aria-hidden='true'/>
                            </button>
                        </div>
                    </div>
                </div>
                <div className='col-12 col-md-3 mt-4 mt-md-0 text-center'>
                    <button className='btn btn-primary' id='login-btn'>Inicie Sesion</button>
                    <span id='cart' className='ml-3'><FaCartArrowDown className='icon-c' /></span>
                    <span className='ml-1' id='cart_count' >2</span>

                </div>
            </nav>
        </Fragment>
    )
}

export default Header