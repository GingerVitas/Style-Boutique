import React from 'react'
import { connect } from 'react-redux'
import LineItem from './LineItem'
import Total from './Total'

export const Cart = props => {
    const { lineItems, username, products, location } = props
    return (
        <div>
            <p style={{ fontWeight: 'bold', marginBottom: '20px'}}>Hello, {username ? username : 'guest'}
                <br />
                <span style={{ fontWeight: 'bold', color: 'gray' }}>My Cart</span>
            </p>
            <div>  
                {
                    lineItems.map(item => {
                        const product = products.find(product => product.id === item.productId)
                        return(
                            <div key={item.id}>
                                <LineItem  item={item} product={product} location={location} />
                                <hr />
                            </div>
                        ) 
                    })
                }
            </div>
            <Total />
        </div>
    )
}

const mapState = state => {
    return {
        products: state.products,
        lineItems: state.lineItems,
        username: state.auth.username
    }
}

export default connect(mapState)(Cart);

