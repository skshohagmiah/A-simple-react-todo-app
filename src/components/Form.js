import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const Form = ({state, setState}) => {

  const [title, setTitle] = useState(' ');
  const [description, setDesction] = useState(' ');


  function handleSubmit(e) {
    e.preventDefault();
    setState([...state, { title, description, id:uuidv4() }]);
    setTitle(' ');
    setDesction(" ");
  }
return (
<form className='space-y-1 flex items-start pl-6  justify-center flex-col' onSubmit={handleSubmit} >
        <div className=' w-8/12 '>
            <label htmlFor='title' className='mb-2 text-white font-bold text-lg'>Title:</label>
             <input className='p-1 w-full h-10 text-xl rounded-lg border-none outline-0 focus:ring-4   placeholder:text-lg placeholder:text-gray-900' type="text" id='title' name='title' placeholder='Enter Your Todo Title' value={title} onChange={(e) => setTitle(e.target.value)}></input>
        </div>
        <div className=' w-8/12'>
            <label htmlFor='desc' className='mb-2 text-white font-bold text-lg'>Description:</label>
             <textarea  className='p-1 w-full h-20 text-xl rounded-lg border-none outline-0 focus:ring-4 placeholder:text-lg placeholder:text-gray-900' type="text" id='desc' name='desc' placeholder='Enter Your Todo Description' value={description}
             onChange={(e) => setDesction(e.target.value) } ></textarea>
        </div>
        <div className='w-60 align- bg-red-300 mb-8 hover:bg-red-200 transition-all  hover:ring-2 hover:font-medium text-white border-transparent rounded  '>
          <button className='text-xl text-black px-6 text-center font-bold m-2 ' type='submit'>Add Todo</button>
        </div>
    </form>
  )
}

export default Form;