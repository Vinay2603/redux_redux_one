import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"



export const  TodoItem=()=>{
    const {id} = useParams()
    console.log(id)


    const {todos} = useSelector((state)=>({todos: state.todos}) )
    console.log(todos)

    
    return <div>

          <h1>todo Item page: {id} </h1>
          


          { todos.map((el)=> el.id === id ? <div>{el.title}</div> : <div>nothing found</div>)}
          <button
            
          >DELETE</button>
          <button>TOGGLE</button>
    </div>
}