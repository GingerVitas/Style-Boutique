import React from 'react'

export const Product = props => {
    const { product } = props
    return (
        <div>
            <ul>
                <li>{product.id}</li>
                <li>{product.category}</li>
                <li>{product.name}</li>
                <li>{product.color}</li>
                <li>{product.size}</li>
                <li>{product.price}</li>
            </ul>
            <button>Add to cart</button>
        </div>
    )
}

export default Product
