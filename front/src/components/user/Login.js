import React, { Fragment } from 'react'
import MetaData from '../layout/MetaData'
import {Link} from 'react-router-dom'

export const Login = () => {
  return (
   <Fragment>
    <MetaData title={"Inicie Sesion"}/>
        <div className='row wrapper'>
            <div className='col-10 col-lg-5'>
                <form className='shadow-lg'>
                    <h1 className='mb-3'>Inicie Secion</h1>
                    {/*Campo email */}
                    <div className='from-group'>
                        <label htmlFor='email_field'>Correo electronico</label>
                        <input type='email' id='email_field' className='form-control'></input>
                    </div>
                    {/*Campo para contraseña */}
                    <div className='from-group'>
                        <label htmlFor='password_field'>Contraseña</label>
                        <input type='password' id='password_field' className='form-control'></input>
                    </div>
                    <br/>
                    <Link to="/password/forgot" className='float-right mb-4 '>Olvido su contraseña?</Link>
                     
                    

                    {/**boton de iniciar sesion */}
                    <button id='login_button' type='submit' className='btn btn-block py-3'>LOGIN</button>
                    <br/>
                    <Link to="/register" className='float-right mb-3'>Usuario nuevo? registrate</Link>
                </form>
            </div>
        </div>
   </Fragment>
  )
}
