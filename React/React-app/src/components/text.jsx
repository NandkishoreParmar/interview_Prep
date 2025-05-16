import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Testing = ()=>{
const [data ,setData] = useState([]);

useEffect(()=>{
fetch("https://fakestoreapi.com/products")
.then((res)=>res.json())
.then((data)=> setData(data))
},[])
  return (
    <>
    <div>
      Product Details 
    </div>
    <ul>
      {
        data.map((product)=>{
          return <li>
            product id: {product.id}
            product name : {product.title}
          </li>
        })
      }
    </ul>
    
    </>
  )
}

export default Testing;