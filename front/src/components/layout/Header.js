import React, { Fragment } from 'react'
import '../../App.css';
import { FaSearchPlus } from "react-icons/fa";

import { FaCartArrowDown } from "react-icons/fa6";
//clase 8 min 0:20:46
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
                            className="form-control"
                            placeholder='Que producto buscas?...' />
                        <div className='input-group-append'>
                            <button className='btn' id='search-btn' >
                                <FaSearchPlus  className="iconSearch icon" aria-hidden='true'/>
                            </button>
                        </div>
                    </div>
                </div>
                <div className='col-12 col-md-3 mt-4 mt-md-0 text-center'>
                    <span><button className='btn btn-primary' id='login-btn'>Inicie Sesion</button></span>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
                  <i><FaCartArrowDown className='icon' /></i>
                    <span className='ml-1' id='cart_count' >2</span>

                </div>
            </nav>
        </Fragment>
    )
}

export default Header