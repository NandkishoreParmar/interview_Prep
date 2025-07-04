
import React, { useEffect, useState } from "react";
import axios from "axios";

const FetchAxious = ()=>{
 const [data,setData] = useState([]);
 const [error,setError] = useState(null);
 const [loading,setLoading] = useState(false);

 useEffect(()=>{
 const FetchData = async ()=> {
  try {
    setLoading(true);
    const response = await axios.get("https://fakestoreapi.com/products");
    setData(response.data)
  } catch (error) {
    console.log(error)
    setError(error)
  }finally{
    setLoading(false)
  }
 }

 FetchData()

 },[])
 if (error) return <div> Error : {error.message}</div>
 if (loading) return <div> Loading axious ....</div>
  return (<>
        <div>
          <ul>
            {data.map((el,id)=>(
              <li key={el.id}>{id} {el.title}</li>
            ))}
          </ul>
        </div>
        <hr></hr>
  </>)
}

export default FetchAxious;