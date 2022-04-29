import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useParams} from 'react-router-dom';
import {loadSKUs} from '../../store/skus';
import ProductCard from '../ProductCard';

const singleProduct = () => {
  const dispatch = useDispatch();
  const {name} = useParams();
  const product = useSelector((state)=>(state.products.filter(product => product.name === name))[0]);
  const skus = useSelector(state=>state.skus);
  const categories = useSelector(state=>state.categories)

  useEffect(()=> {
    dispatch(loadSKUs(name))
  },[])

  if (!product || !skus.length) return (
    <div>Loading...</div>
  )
  return (
    <div>
      <ProductCard product={product} skus={skus} categories={categories} />
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