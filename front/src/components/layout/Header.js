import React, { Fragment } from 'react'
import '../../App.css';
import { Link } from 'react-router-dom'
import { FaCartArrowDown } from "react-icons/fa6";
import { Search } from './Search';
import { useDispatch, useSelector } from 'react-redux';
import {useAlert} from 'react-alert'
import { logout } from '../../actions/userActions';



const Header = () => {
    const alert =useAlert();
    const dispatch = useDispatch();

    const { user, loading } = useSelector(state => state.auth)

    const logoutHandler =()=>{
        dispatch(logout())
        alert.success("Logout Exitoso")
    }


    return (
        <Fragment>
            <nav className='navbar row'>
                <div className='col-12 col-md-3'>
                    <div className='navbar-brand'>
                        <Link to={"/"}> <img src="/img/logo_small.png" alt="logo de lo que nececitas" className='logo' /></Link>

                    </div>
                </div>
                <div className='col-12 col-md-5 mt-2 mt-md-0'>
                    {/** aqui va buscar  */}
                    <Search />
                </div>

                <div className='col-12 col-md-4 mt-4 mt-md-0 text-center'>
                    {/** boton carrito */}
                    <Link to="/carrito"><FaCartArrowDown className='icon' /></Link>
                    <span className='ml-1' id='cart_count' >2</span>

                    {user ? (
                        <div className='ml-4  dropdown d-inline'>
                            <Link to="#!" className='btn dropdown-toggle text-white mr-4' type='button'
                                id='dropDownMenu' data-toggle="dropdown" aria-haspopup="true" aria-expanded='false'>
                                <figure className='avatar avatar-nav'>
                                    <img
                                        src={user.avatar && user.avatar.url}
                                        alt={user && user.nombre}
                                        className='rounded-circle border border-primary'></img>
                                </figure>
                                <span>{user && user.nombre}</span>
                            </Link>
                            <div className='dropdown-menu' aria-labelledby='dropDownMenu'>
                                {/**preguntar el rol de quien esta oline  */}
                                {user && user.role === "admin" && (
                                    <Link className='dropdown-item' to="/dashboard">Adm. Productos</Link>
                                )}

                                <Link className='dropdown-item' to="/">Pedidos</Link>
                                <Link className='dropdown-item' to="/yo">Mi Perfil</Link>
                                <Link className='dropdown-item' to="/" onClick={logoutHandler}>Cerrar Sesion</Link>

                            </div>
                        </div>
                    ) : !loading &&
                    <div>
                        <Link to="/login" className='btn ml-4' id='login_btn'>Login</Link>
                    </div>}



                </div>
            </nav>
        </Fragment>
    )
}

export default Header

