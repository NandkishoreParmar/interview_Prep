import React, { useEffect, useState } from "react";

const Product = () => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setIsLoading] = useState(true);

  useEffect(() => {
    const FetchProduct = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setItems(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    FetchProduct();
  }, []);
if (loading) return <div> Loading Products....</div>
  if (error) return <div> Error : {error.message}</div>
  return (
    <>
      <h1>Products Lists neww</h1>
      <ul style={{display:"flex", flexWrap:"wrap", gap:"20px",listStyle:"none", border:"2px solid white"}}>
        {items.map((product)=>(
          <li>
            <div style={{width:"400px",marginLeft:"50px"}}>
             <p> {product.title}</p>
             <p> <img width="200px" height="200px" src={product.image} /> </p>
             <p> ${product.price}</p>
            </div>
            </li>
        ))}
      </ul>
    </>
  );
};

export default Product;
