import React, { Fragment, useEffect } from 'react'
import MetaData from './layout/MetaData'
import { useDispatch } from 'react-redux'
import { getProducts } from '../actions/productActions'



const Home = () => {
    const dispatch= useDispatch();
    useEffect(()=>{
        dispatch(getProducts());
    },[dispatch])


    return (
        <Fragment>
            <MetaData title='Tenemos de todo'></MetaData>

            <h1 id='encabezado_productos'>Ultimos Productos</h1>

            <section id='productos' className='container mt-5' >
                <div className='row'>
                    {/*producto 1*/}
                    <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
                        <div className='card p-3 rounded'>
                            <img className='card-img-top mx-auto' src='./img/img-contenido/audifonos.png' alt='audifonos' />
                            <div className='card-body d-flex flex-column'>
                                <h5 id='titulo_producto'><a href='http://localhost:3000'>Audifonos inalambricos</a></h5>
                                <div className='rating mt-auto'>
                                    <div className="rating-outer">
                                        <div className='rating-inner'></div>
                                    </div>
                                    <span id='No_de_opiniones'>5 reviews</span>
                                </div>
                                <p className='card-text'>$72.000</p>
                                <a href='http://localhost:3000' id='view_btn' className='btn btn-block'>
                                    Ver detalle
                                </a>
                            </div>
                        </div>

                    </div>
                    {/*producto 2*/}
                    <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
                        <div className='card p-3 rounded'>
                            <img className='card-img-top mx-auto' src='./img/img-contenido/pesas.png' alt='pesas' />
                            <div className='card-body d-flex flex-column'>
                                <h5 id='titulo_producto'><a href='http://localhost:3000'>Audifonos inalambricos</a></h5>
                                <div className='rating mt-auto'>
                                    <div className="rating-outer">
                                        <div className='rating-inner'></div>
                                    </div>
                                    <span id='No_de_opiniones'>5 reviews</span>
                                </div>
                                <p className='card-text'>$2.000</p>
                                <a href='http://localhost:3000' id='view_btn' className='btn btn-block'>
                                    Ver detalle
                                </a>
                            </div>
                        </div>

                    </div>
                       {/*producto 3*/}
                       <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
                        <div className='card p-3 rounded'>
                            <img className='card-img-top mx-auto' src='./img/img-contenido/camisa.png' alt='camisa' />
                            <div className='card-body d-flex flex-column'>
                                <h5 id='titulo_producto'><a href='http://localhost:3000'>Audifonos inalambricos</a></h5>
                                <div className='rating mt-auto'>
                                    <div className="rating-outer">
                                        <div className='rating-inner'></div>
                                    </div>
                                    <span id='No_de_opiniones'>2 reviews</span>
                                </div>
                                <p className='card-text'>$82.000</p>
                                <a href='http://localhost:3000' id='view_btn' className='btn btn-block'>
                                    Ver detalle
                                </a>
                            </div>
                        </div>

                    </div>
                       {/*producto 4*/}
                       <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
                        <div className='card p-3 rounded'>
                            <img className='card-img-top mx-auto' src='./img/img-contenido/televisor.png' alt='televisor' />
                            <div className='card-body d-flex flex-column'>
                                <h5 id='titulo_producto'><a href='http://localhost:3000'>Audifonos inalambricos</a></h5>
                                <div className='rating mt-auto'>
                                    <div className="rating-outer">
                                        <div className='rating-inner'></div>
                                    </div>
                                    <span id='No_de_opiniones'>20 reviews</span>
                                </div>
                                <p className='card-text'>$52.000</p>
                                <a href='http://localhost:3000' id='view_btn' className='btn btn-block'>
                                    Ver detalle
                                </a>
                            </div>
                        </div>

                    </div>

                </div>
            </section>

        </Fragment>
    )
}

export default Home