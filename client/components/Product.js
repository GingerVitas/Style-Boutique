import React from 'react';
import { addListItem } from '../store/lineItems'
import { connect } from 'react-redux'

export const Product = props => {
    const { product, auth, addToCart } = props;
    console.log(props)
    return (
        <div>
            <img src={product.imageUrl} style={{width:'200px'}}/>
            <ul style={{listStyleType:'none'}}>
                <li style={{fontWeight:'bold'}}>{product.brand}</li>
                <li>{product.name}</li>
                <li>{product.price}</li>
                <li>{product.color}</li>
                <li>{product.size}</li>
            </ul>
            {props.location? '' :
                <button onClick={() => addToCart(product, auth)}>Add to Cart</button>
            }
        </div>
    )
}

const mapState = state => {
    return {
        auth: state.auth
    }
}

const mapDispatch = dispatch => {
    return {
        addToCart(product, auth){
            dispatch(addListItem(product, auth))
        }
    }
}

export default connect(mapState, mapDispatch)(Product)
