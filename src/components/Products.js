import React, { useEffect, useState } from 'react'
import {useDispatch} from 'react-redux'
import {add} from '../store/cardSlice'


export default function Products() {

    const dispatch=useDispatch();

    const [products,setProduts]=useState([]);

    useEffect(()=>{

       
         fetchProduct();
    },[]);
    
    const fetchProduct = async () =>{


        const res=await fetch("https://fakestoreapi.com/products");
        const data=await res.json();
        console.log(data);
        setProduts(data);
    }

    const handleAdd=(product)=>{
        dispatch(add(product))
    }
  return (
    <>
    {
        products.map((result)=>(
            <div className='col-md-3 mb-4 mt-3' key={result.id}> 
                <div className='card h-100 p-1'>
                    <img src={result.image} alt={result.title} height="200px" 
                    />
                <div className='card-body'>
                    <p>{result.title.substring(0,20)}</p>
                    <p>Price:- {result.price}</p>
                    <button onClick={()=>handleAdd(result)} className='btn btn-primary'>Add to Card</button>
                </div>  
                </div>
            </div>
        ))
    }
    </>
  )
}
