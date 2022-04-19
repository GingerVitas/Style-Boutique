import React from 'react'
import { connect } from 'react-redux'

export const Total = props => {
    const { lineItems} = props
    return (
        <div style={{fontWeight: 'bold', fontSize:'2rem'}}>
            Total: $
            {
                lineItems.length > 0 ? lineItems.map(obj => +obj.total).reduce((a, b) => a + b) : 0
            }
        </div>
    )
}

const mapState = state => {
    return {
        lineItems: state.lineItems,
    }
}

export default connect(mapState)(Total);


