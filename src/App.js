import { useState } from "react";
import Form from "./components/Form";
import Todos from "./components/Todos";

  
function App() {

const [state, setState] = useState([])

const handleDelete = (id) => {
  const filteredtodo = state.filter((todo) => todo.id !== id)
 return setState(filteredtodo)
}


// console.log(state[0].id)

return (
  <div className="flex items-center justify-center h-screen bg-gray-900  ">
    <div className="  w-6/12 h-screen bg-slate-600 shadow-md shadow-white">
    <h1 className="text-center text-4xl font-bold text-white m-0">Todo App</h1>
      <Form state={state}  setState={setState}/>
      <hr className="m-2"></hr>
      <Todos Todos={state} handleDelete={handleDelete}/>
    </div>
    </div>
  );
}
export default App;
