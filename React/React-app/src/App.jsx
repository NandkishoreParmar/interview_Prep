
import './App.css'
import MyButton from './components/Button'
// import { useEffect} from 'react';
import ControlledComponent from './components/ControlledComp';
import ProductDetails from './components/Product';
import TodoList from './components/TodoList';
import Testing from './components/text';
function App() {
  // const [count, setCount] = useState(0);
//   const increaseCounter = ()=> {
// setCount(count+1)
//   }
//   const DecreaseCounter = ()=> {
//     setCount(count -1 )
// //   }
//   useEffect(()=>{
//     alert("Run on count change")
//   },[count])
  return (
    <>
    {/* <div>Count : {count}</div>
   <MyButton title={"Increase Counter"} Counter={increaseCounter} />
   <MyButton title={"Decrease Counter"} Counter={DecreaseCounter} />
   <ControlledComponent/> */}
   {/* <ProductDetails/> */}
   {/* <TodoList/> */}
   <Testing/>
   </>
  )
}

export default App
