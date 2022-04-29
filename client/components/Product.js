import React from 'react';
import { connect } from 'react-redux'

const Product = props => {
  const {skus, item} = props;
  
  
    return (
        <div style={{ flexBasis: '33.333333%'}}>
            <img src={product.imageUrl} style={{width:'150px'}}/>
            <ul style={{listStyleType:'none'}}>
                <li>{product.name}</li>
                <li>$ {product.price}</li>
                <li>{product.color}</li>
                <li>{product.size}</li>
            </ul>
        </div>
    )
}
const mapState = state => {
  return {
    product: state.skus
  }
}
export default connect(mapState)(Product);
