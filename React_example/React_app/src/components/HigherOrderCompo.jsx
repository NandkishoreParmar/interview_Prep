import React, { useState } from "react";


const HocExample = ()=>{

  return (<>
  <h1>Hoc</h1>
  <Hoc  counter={Counter} />
  <HocGreen counter={Counter} />
  </>)
}

export default HocExample;

function Hoc (props){
  return (<>
  <div style={{color:"red"}}>
    <props.counter />
    </div>
  </>)
}

function HocGreen (props){
  return (<>
  <div style={{color:"green"}}>
    <props.counter />
    </div>
  </>)
}



function Counter(){
  const [count,setCount] = useState(0);

  return (<>
  <p>{count}</p>
  <button onClick={()=>setCount(count+1)}>Update</button>
  </>)
}


