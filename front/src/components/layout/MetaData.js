import React from "react";
import {Helmet} from 'react-helmet'
//el titulo de la pestaña 

const MetaData =({title}) => {
    return(
        <Helmet> 
            <title>{`${title} - LQN`}</title>
        </ Helmet>
    )
}
export default MetaData;