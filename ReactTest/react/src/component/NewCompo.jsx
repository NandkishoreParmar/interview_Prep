import React, { useState } from "react";

const NewCompo = () => {
const [loginInfo,setLoginInfo] = useState({
  email:"",
  password:""
})
const [data,setData]  = useState([])

const handleChange = (e)=>{
// console.log(e.target.value)
const {name,value} = e.target;
const copyInfo = {...loginInfo}
copyInfo[name] = value
setLoginInfo(copyInfo)
// console.log(loginInfo)
}

const handleSubmiit = async (e)=>{
e.preventDefault()
console.log(loginInfo)
const {email,password} = loginInfo;

if (!email || !password){
  console.log("email and password is required")
}
try {
  const user = await fetch("http",{
    "method":"POST",
    "content-Type":"application/json",
    body:JSON.stringify(loginInfo)
  })
  const response = await user.json()
  setData(response)

} catch (error) {
  console.log("error",error)
}

}
  return (
    <>
      <div style={{height:"100vh", width:"100%" , display:"grid", placeItems:"center"}}>
        <div style={{width:"250px", border:"1px solid gray" , padding:"20px"}}>
          <h1 style={{display:"flex",justifyContent:"center"}}>Login</h1>
          <form onSubmit={handleSubmiit}  style={{display:"flex", flexDirection:"column", margin:"10px"}} >
            <div style={{display:"flex", flexDirection:"column", marginBottom:"5px"}} >
              <label>Email</label>
              <input type="email" value={loginInfo.email} name="email" onChange={handleChange}  />
            </div >
            <div style={{display:"flex", flexDirection:"column" , marginBottom:"10px"}}>
              <label>Password</label>
              <input type="password" value={loginInfo.password} name="password"   onChange={handleChange}/>
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default NewCompo;
