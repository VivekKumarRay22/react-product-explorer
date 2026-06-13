import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { ProductDataContext } from '../context/ProductContext'

const ProductDetails = () => {
    const productData = useContext(ProductDataContext)
    const { id } = useParams()

    const selectedProductData = productData.find((elem) => id == elem.id)

    if (!selectedProductData) {
        return (
            <h1>Loading...</h1>
        )
    }

    return (
        <div>
            <img src={selectedProductData.image} alt="" />
            <h2> {selectedProductData.title}</h2>
            <h5>   {selectedProductData.price} </h5>
        </div>
    )
}

export default ProductDetails