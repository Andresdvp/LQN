import React, { Fragment } from 'react'
import '../../App.css';
import { FaSearchPlus } from "react-icons/fa";
import { Link } from 'react-router-dom'
import { FaCartArrowDown } from "react-icons/fa6";

const Header = () => {
    return (
        <Fragment>
            <nav className='navbar row'>
                <div className='col-12 col-md-3'>
                    <div className='navbar-brand'>
                       <Link to={"/"}> <img src="/img/logo_small.png" alt="logo de lo que nececitas" className='logo'/></Link>
                           
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
                   
                   <div className='ml-4  dropdown d-inline'>
                    <Link to="#!" className='btn dropdown-toggle text-white mr-4' type='button'
                    id='dropDownMenu' data-toggle= "dropdown" aria-haspopup="true" aria-expanded='false'>
                        <span>Panel de control</span>
                    </Link>
                    <div className='dropdown-menu' aria-labelledby='dropDownMenu'>
                        <Link className='dropdown-item' to="/dashboard">Adm. Productos</Link>
                        <Link className='dropdown-item' to="/">Pedidos</Link>
                        <Link className='dropdown-item' to="/">Mi Cuenta</Link>
                        <Link className='dropdown-item' to="/">Cerrar Sesion</Link>
                        
                    </div>
                   </div>

                  <i><FaCartArrowDown className='icon' /></i>
                    <span className='ml-1' id='cart_count' >2</span>

                </div>
            </nav>
        </Fragment>
    )
}

export default Header