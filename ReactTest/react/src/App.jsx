import Form from './component/FormComponent'
import NewCompo from './component/NewCompo'
import CounterState from './component/context/CounterState'
function App() {


  return (
    <>
     {/* <h1>Hello WOrld</h1> */}
     {/* <Form/> */}
     <CounterState>
     <NewCompo/>
     </CounterState>
    </>
  )
}

export default App
