import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { remove } from '../store/cardSlice';

export default function Cart() {
  const dispatch= useDispatch();

  const products = useSelector(state => state.card)
  
  const handleRemove =(productId)=>{
    dispatch(remove(productId))
  }

  return (

    <div className='container mt-5'>
      <h1 className='text-center mt-4'>Your Product</h1>
     {
      products.map((result)=>(
        <div className="card p-5 h-50 mt-4" key={result.id}>
        <div className="row g-1">
          <div className="col-md-4">
            <img src={result.image} className="img-fluid rounded-start" alt={result.title} height="100px" />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{result.title}</h5>
              <p className="card-text">{result.description}</p>
              <h3 className="card-text">{result.price}</h3>
              <button className="button-61" onClick={()=>handleRemove(result.id)}>Remove</button>
            </div>
          </div>
        </div>
      </div>
      ))
     }
    </div>


  )
}
