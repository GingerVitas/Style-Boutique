import React from 'react'

// child components
import LineItem from './LineItem'

const LineItems = props => {
    const { lineItems, routeProps } = props
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

export default LineItems;

