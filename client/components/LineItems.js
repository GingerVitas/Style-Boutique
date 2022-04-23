import React from 'react'

// redux
import { connect } from 'react-redux'

// child components
import LineItem from './LineItem'

export const LineItems = props => {
    const { lineItems, products, routeProps } = props
    console.log(routeProps)
    return (
        <div>
            {
                lineItems.map(item => {
                    const product = products.find(product => product.id === item.productId)
                    return (
                        <div key={item.id}>
                            <LineItem item={item} product={product} routeProps={routeProps} />
                            <hr />
                        </div>
                    )
                })
            }
        </div>
    )
}

const mapState = state => {
    return {
        products: state.products,
    }
}

export default connect(mapState)(LineItems);

