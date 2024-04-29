import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { MDBDataTable } from 'mdbreact'

import { getProducts } from '../../actions/productActions'
import { useAlert } from 'react-alert'
import MetaData from '../layout/MetaData'
import Sidebar from './Sidebar'
import { Link } from 'react-router-dom'


//clase 15 no me muestra nada
export const ProductsList = () => {

    const { loading, products, error } = useSelector(state => state.products)
    const alert = useAlert();


    const dispatch = useDispatch();
    useEffect(() => {
        if (error) {
            return alert.error(error)
        }
        dispatch(getProducts());
    }, [dispatch])

    const setProducts = () => {
        const data = {
            columns: [
                {
                    label: "Nombre",
                    field: "nombre",
                    sort: "asc"
                },
                {
                    label: "Precio",
                    field: "precio",
                    sort: "asc"
                },
                {
                    label: "Inventario",
                    field: "inventario",
                    sort: "asc"
                },
                {
                    label: "Vendedor",
                    field: "vendedor",
                    sort: "asc"
                },
                {
                    label: 'Acciones',
                    field: 'acciones',
                },
            ],
            rows: []
        }

        products.forEach(product => {
            data.rows.push({
                nombre: product.nombre,
                precio: `$${product.precio}`,
                inventario: product.inventario,
                vendedor: product.vendedor,
                acciones: <Fragment>
                    <Link to={`/producto/${product._id}`} className="btn btn-primary py-1 px-2">
                        <i className="fa fa-eye"></i>
                    </Link>
                    
                    <Link to={`/`} className="btn btn-warning py-1 px-2">
                        <i class="fa fa-pencil"></i>
                    </Link>
                    <button className="btn btn-danger py-1 px-2 ml-2" >
                        <i className="fa fa-trash"></i>
                    </button>
                </Fragment>
            })
        });


        return data;
    }


    return (
        <Fragment>
            <MetaData title={"Todos los productos"} />
            <div className='row'>
                <div className='col-12 col-md-2'>
                    <Sidebar />
                </div>

                <div className='col-12 col-md-10' >
                    <Fragment>
                        <h1 className='my-5'><b>Productos Registrados</b></h1>

                        {/**pendiente */}
                        {loading ? <i class="fa-solid fa-circle-notch fa-spin"></i> : (
                            <MDBDataTable
                                data={setProducts()}
                                className='px-3'
                                bordered
                                striped
                                hover
                            /> 



                        )}
                    </Fragment>
                </div>
            </div>

        </Fragment>
    )
}

export default ProductsList
