import React from 'react'

const Todo = ({todo, handleDelete}) => {
  const {title, description,id }=todo



 
return (
<div className='flex items-center justify-between m-3 transition-all bg-zinc-800 hover:text-white  p-1 text-xl space-x-2 rounded-md shadow-lg hover:ring-2 hover:bg-zinc-700 text-white/90 '>
<div className='flex items-center justify-center flex-col transition-all '>
    <div>{title}</div>
    <div className=''>{description}</div>
    </div>
    <div>
    <i className="fa-solid fa-xmark font-bold p-3 bg-red-500 rounded shadow-md hover:bg-red-300 hover:text-black" onClick={()=>handleDelete(id)}></i>
    </div>
</div>
  )
}

export default Todo