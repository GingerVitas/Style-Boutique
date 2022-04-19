import React from 'react'
import { connect } from 'react-redux'
import Product from './Product'

export const Products = props => {
    const { products } = props
    console.log(props)
    return (
        <div style={{display:'flex', flexWrap:'wrap'}}>
            {
                products.map(product => {
                    return <Product key={product.id} product={product}/>
                })
            }
        </div>
    )
}

const mapState = state => {
    return {
        products: state.products
    }
}

export default connect(mapState)(Products)
