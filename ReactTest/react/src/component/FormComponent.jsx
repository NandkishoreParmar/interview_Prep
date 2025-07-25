// import React, { useState } from "react";
// import { ToastContainer } from "react-toastify";
// import { handleError, handleSuccess } from "../utils/error";
// const Form = () => {
//   const [signInfo,setsignInfo] = useState({
//     name:"",
//     email:"",
//     password:""
//   })

// const handleChange = (e)=>{
// const {name,value} = e.target;
// // console.log(name,value)
// const copyInfo = {...signInfo};
// copyInfo[name] = value;
// setsignInfo(copyInfo)
// }
// const handleSubmit = async (e)=>{
//   e.preventDefault()
//   // console.log("submitt",signInfo)
//   const {name,email,password} = signInfo;
//   if (!name || !email || !password){
//     return handleError("name,email and password is required")
//   }
//   try {
//     const url = "http://localhost:8080/auth/signup"
//     const response = await fetch(url,{
//       method:"POST",
//       headers:{
//         'content-Type':"application/json"
//       },
//       body:JSON.stringify(signInfo)
//     })
//     const result  = await response.json()
//     const {success,message,error} = result;
//     console.log(result)
//     if (success){
//       handleSuccess(message)
//     }else if(error){
//       const details = error?.details[0].message
//       handleError(details)
//     }else if(!success){
//       handleError(message)
//     }
//   } catch (error) {
//     console.log(error)
//   }
// }

//   return (
//     <>
//       <div id="mainConta">
//         <h1>Signup</h1>
//         <form onSubmit={handleSubmit} >
//           <div>
//             <label>Name:</label>
//             <input type="text"  name="name"  value={signInfo.name}  placeholder="Enter a name" onChange={handleChange} />
//           </div>
//           <div>
//             <label>Email:</label>
//             <input type="email" name="email" value={signInfo.email} placeholder="Enter a email" onChange={handleChange} />
//           </div>
//           <div>
//             <label>Password:</label>
//             <input type="password" name="password" value={signInfo.password} placeholder="Enter a password" onChange={handleChange} />
//           </div>
//             <button>Submit</button>
//         </form>
//       </div>
//       <ToastContainer/>
//     </>
//   );
// };

// export default Form;


import React, { useState } from "react";
import { handleError, handleSuccess } from "../utils/handle";
import { ToastContainer } from "react-toastify";

const Form = ()=>{
const [signInfo,setsignInfo] = useState({
  name:"",
  email:"",
  password:""
})
const handleChange = (e)=>{
// console.log(e.target.value)
const {name,value} = e.target;
const copyInfo = {...signInfo}
copyInfo[name] = value
setsignInfo(copyInfo);
}
const handleSubmiit = async(e)=>{
  e.preventDefault()
  console.log(signInfo)
  const {name,email,password} = signInfo;
  if(!name || !email || !password){
    return handleError("name, email and password is required..")
  }
  try {
    const url = "http://localhost:8080/auth/signup"
    const response = await fetch(url,{
      method:"POST",
      headers:{
        "content-Type":"application/json"
      },
      body:JSON.stringify(signInfo)
    })
    const result = await response.json()
    const {message,success,error} = result;

    if(success){
      setTimeout(()=>{
        handleSuccess(message)
        // navigate("/login")
      },1000)
    }
    else if (error){
      const details = error?.details[0].message
      return handleError(details)
    }else if (!success){
      handleError(message)
    }
    console.log(result)
  } catch (error) {
    console.log("error",error.message)
    return handleError(error.message)
  }
}
  return (<>
  <div id="container">
    <h1>Signup</h1>
    <form onSubmit={handleSubmiit}>
      <div>
        <label>Name</label>
        <input type="text" value={signInfo.name} name="name"  onChange={handleChange} />
      </div>
      <div>
        <label>Email</label>
        <input type="email" value={signInfo.email} name="email" onChange={handleChange} />
      </div>
      <div>
        <label>Password</label>
        <input type="password" value={signInfo.password} name="password" onChange={handleChange} />
      </div>
      <button>Submit</button>
    </form>
  </div>
  <ToastContainer/>
  </>)
}

export default Form;