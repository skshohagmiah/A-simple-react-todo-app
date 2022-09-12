import Todo from './Todo'

const Todos = ({Todos,handleDelete}) => {
   return (
    <div>
      {Todos.map(todo => <Todo key={Math.random()} handleDelete={handleDelete} todo={todo}  />)}
    
    </div>
  )
}

export default Todos