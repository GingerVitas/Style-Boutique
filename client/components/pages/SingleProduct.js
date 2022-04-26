import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useParams} from 'react-router-dom';
import {loadSKUs} from '../../store/skus';

const singleProduct = () => {
  const dispatch = useDispatch();
  const {name} = useParams();
  const products = useSelector(state=>state.products.filter(product => product.name === name));
  const product = products[0];
  console.log(product)
  const skus = useSelector(state=>state.skus);
  console.log('sku loader', skus)

  useEffect(()=> {
    dispatch(loadSKUs(name))
  },[])

  if (!product || !skus.length) return (
    <div>Loading...</div>
  )
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <th>Product Brand</th>
            <th>Product Name</th>
            <th>Price</th>
          </tr>
          <tr>
            <td>{product.brand}</td>
            <td>{product.name}</td>
            <td>{skus[0].price}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default singleProduct