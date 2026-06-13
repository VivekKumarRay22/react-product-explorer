import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'
import { getData } from '../Api/DataAPI'

export const ProductDataContext = createContext()

const ProductContext = (props) => {

    const [productData, setProductData] = useState([])

    const setData = async () => {
        const data = await getData()
        console.log(data);
        setProductData(data)
        
    }

    useEffect(function () {
        setData()
    }, [])

    return (
        <div>
            <ProductDataContext.Provider value={productData} >
                {props.children}
            </ProductDataContext.Provider>
        </div>
    )
}

export default ProductContext