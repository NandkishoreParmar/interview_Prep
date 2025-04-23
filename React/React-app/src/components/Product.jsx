import React, { useEffect, useState } from "react";

const ProductDetails = () => {
  const [data,setData] = useState([]);

  useEffect(()=>{
fetch("https://fakestoreapi.com/products")
.then((res)=> res.json())
.then((ans)=>{
  setData(ans)
  console.log(data)
});
  }, []);
  return (
    <>
    <div>
      Product Details
    </div>
    <ul>
      {
        data.map((product)=>{
          return <li>
            <p> Product id : {product.id}</p>
            <p>Product Price: {product.price}</p>
          </li>
        })
      }
    </ul>

    
    </>
  )
}

export default ProductDetails;