import React, { Fragment } from 'react'
import MetaData from '../layout/MetaData'

export const ProdutDetails = () => {
  return (
    <Fragment>
        <MetaData title="Camisa Polo"></MetaData>
    <div className='row d-flex justify-content-around'>
        <div className=' col-12 col-lg-5 img-fluid' id='img_producto'>
            <img src='../../img/camisas/camisa-polo-naranja.jpg' height="450" width="450" alt='imagen del producto'/>
        </div>

        <div className='col-12 col-lg-5 mt-5'>
            <h3>Camisa Polo Negra</h3>
            <p id='product _id'>producto #1413261</p>
        </div>
    </div>
    
    </Fragment>
  )
}
