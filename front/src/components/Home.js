import React, { Fragment, useEffect, useState } from 'react'
import MetaData from './layout/MetaData'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../actions/productActions'
import { useAlert } from 'react-alert'
import Pagination from 'react-js-pagination'
import { Link, useParams } from 'react-router-dom'  //mejora la etiqueta (a) para navegar enttre rutas
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'









const Home = () => {
    const params = useParams();
    const keyword = params.keyword;
    const [precio, setPrecio] = useState([100, 100000])

    const [CurrentPage, setCurrentPage] = useState(1)
    //traigo los estados con useSelector vienen desde el reducer
    const { loading, products, error, resPerPage, productsCount } = useSelector(state => state.products)
    const alert = useAlert();


    const dispatch = useDispatch();
    useEffect(() => {
        if (error) {
            return alert.error(error)
        }
        dispatch(getProducts(CurrentPage, keyword, precio));
    }, [dispatch, alert, error, CurrentPage, keyword, precio])

    //cabiar pagina actual
    function setCurrentPageNo(pageNumber) {
        setCurrentPage(pageNumber)
    }


    return (
        <Fragment>
            {/* preguntar con el loading si cargo o no */}
            {loading ? <i class="fa-solid fa-circle-notch fa-spin"></i> : (
                <Fragment>
                    <MetaData title='Tenemos de todo'></MetaData>

                    <h1 id='encabezado_productos'>Ultimos Productos</h1>

                    <section id='productos' className='container mt-5' >
                        <div className='row'>

                            
                                <Slider
                                    range
                                    
                                    className='t-slider slider-box'
                                    marks={{
                                        100: `$100`,
                                        100000: `$100000`
                                    }}
                                    min={100}
                                    max={100000}
                                    defaultValue={[100, 100000]}
                                    tipFormatter={value => `$${value}`}
                                    tipProps={{
                                        placement: 'top',
                                        prefixCls: 'rc-slider-tooltip',
                                        visible: true
                                    }}
                                    value={precio}
                                    onChange={precio => setPrecio(precio)}
                                    
                                ></Slider>

                          



                            {/*productos en su map me saca un producto*/}
                            {products && products.map(producto => (

                                //el id se llama con un piso antes _id
                                <div key={producto._id} className='col-sm-12 col-md-6 col-lg-3 my-3'>
                                    <div className='card p-3 rounded'>
                                        <img className='card-img-top mx-auto' src={producto.imagen[0].url} alt={producto.nombre} />
                                        <div className='card-body d-flex flex-column'>
                                            <h5 id='titulo_producto'><Link to={`/producto/${producto._id}`}>{producto.nombre}</Link></h5>
                                            <div className='rating mt-auto'>
                                                <div className="rating-outer">
                                                    <div className='rating-inner' style={{ width: `${(producto.calificacion / 5) * 100}%` }}></div>
                                                </div>
                                                <span id='No_de_opiniones'>{producto.numCalificaciones} Opiniones</span>
                                            </div>
                                            <p className='card-text'>${producto.precio}</p>
                                            <Link to={`/producto/${producto._id}`} id='view_btn' className='btn btn-block'>
                                                Ver detalle
                                            </Link>
                                        </div>
                                    </div>

                                </div>

                            ))}



                        </div>
                    </section>

                    <div className='d-flex justify-content-center mt-5'>

                        <Pagination
                            activePage={CurrentPage}
                            itemsCountPerPage={resPerPage}
                            totalItemsCount={productsCount}
                            onChange={setCurrentPageNo}
                            nextPageText={'Siguiente'}
                            prevPageText={'Anterior'}
                            firstPageText={'Primera'}
                            lastPageText={'Ultima'}
                            itemClass='page-item'
                            linkClass='page-link'
                        />

                    </div>



                </Fragment>
            )}


        </Fragment>
    )
}

export default Home