import React from 'react'

export const Total = props => {
    const { lineItems} = props
    return (
        <div style={{fontWeight: 'bold', fontSize:'2rem'}}>
            Total: $
            {
                lineItems.length > 0 ? (lineItems.map(obj => +obj.total).reduce((a, b) => a + b)).toFixed(2) : 0
            }
        </div>
    )
}

export default Total;

