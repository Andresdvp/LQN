import React, { Fragment, useEffect, useState } from 'react'
import MetaData from '../layout/MetaData'
import { Link, useNavigate } from 'react-router-dom'
import { login, clearErros } from '../../actions/userActions'
import { useDispatch, useSelector } from 'react-redux'

export const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const { isAuthenticated, error, loading } = useSelector(state => state.auth)

    useEffect(() => {
        if (isAuthenticated) {
            navigate("/")
        }
        if (error) {
            dispatch(clearErros)
        }
    },[dispatch,isAuthenticated,error])


    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(login(email, password))
    }


    return (
        <Fragment>
            {loading ? <i class="fa-solid fa-circle-notch fa-spin"></i> : (

                <Fragment >
                    <MetaData title={"Inicie Sesion"} />

                    <div className='row wrapper log '>
                        <div className='col-10 col-lg-5'>

                            <form className='formulario__login' onSubmit={submitHandler}>
                                <h1 className='mb-3 titulo_login' >Inicie Secion</h1>

                                {/*Campo email */}
                                <div className='form__group'>
                                    <label htmlFor='email_field'>Correo electronico</label>
                                    <input type='email'
                                        id='email_field'
                                        className='form-style'
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    ></input>
                                </div>

                                {/*Campo para contraseña */}
                                <div className='form__group'>
                                    <label htmlFor='password_field'>Contraseña</label>
                                    <input type='password'
                                        id='password_field'
                                        className='form-control'
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    ></input>
                                </div>
                                <br />
                                <Link to="/password/forgot" className='float-right mb-4 '>Olvido su contraseña?</Link>



                                {/**boton de iniciar sesion */}
                                <button id='login_button' type='submit' className='btn btn-block py-3'>LOGIN</button>
                                <br />
                                <Link to="/register" className='float-right mb-3'>Usuario nuevo? registrate</Link>
                            </form>
                        </div>
                    </div>
                </Fragment>
            )}
        </Fragment>
    )
}
