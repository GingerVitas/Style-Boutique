import React from 'react'

// redux
import { connect } from 'react-redux'

// child components
import LineItem from './LineItem'

const LineItems = props => {
    const { lineItems, products, routeProps } = props
    console.log(routeProps)
    return (
        <div>
            {
                lineItems.map(item => {
                    
                    return (
                        <div key={item.id}>
                            <LineItem item={item} routeProps={routeProps} />
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
        products: state.skus,
    }
}

export default connect(mapState)(LineItems);

