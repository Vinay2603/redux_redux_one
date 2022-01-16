import axios from "axios"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { addTodoError, addTodoLoading, addTodoSuccess, getTodoError, getTodoLoading, getTodoSuccess ,deleteTodo} from "../store/action"

export const Todos=()=>{
    const [text,setText] = useState("")
     const {todos,loading,error} = useSelector((state)=> ({ todos: state.todos,loading:state.loading,error:state.error}))
    // console.log(todos)
     const dispatch = useDispatch()

useEffect(()=>{
    getTodo()
},[])

const getTodo =()=>{
    dispatch(getTodoLoading())
    axios.get('http://localhost:3001/todos')
    .then(function (response) {
      // handle success
     // console.log(response.data);
      dispatch(getTodoSuccess(response.data))
    })
    .catch(function (error) {
      // handle error
      //console.log(error);
      dispatch(getTodoError(error))
    })
   
}

    return loading?(<div>...Loading</div>):error?(<div>something is wrong </div>):  <div>
      <h1>todo</h1>

      <input value={text} type="text"  placeholder="enter todo" onChange={(e)=>setText(e.target.value)}/>
      <button
           onClick={()=>{
             dispatch(addTodoLoading())
            axios.post('http://localhost:3001/todos', {
                title: text,
                status: false
              })
              .then(function (response) {
                console.log(response.data);
                dispatch(addTodoSuccess(response.data))
              })
              .catch(function (error) {
                console.log(error);

                dispatch(addTodoError(error))
              });



           }}
       >ADD</button>
       {todos.map((el,i )=> <div style={{
         border:"1px solid black",
         padding: "20px",
         margin : "20px",
         display:"flex",
         justifyContent:"space-between"
       }} key={i}>
         
         <div>{el.title}</div>
         <div> status:{ !el.status ? "false" :"true"}</div>
          <Link to={`/todos/${el.id}`}><button>EDIT</button></Link>
          <button
            onClick={()=>{
                // console.log(deleteTodo(el.id))
                // dispatch(deleteTodo(el.id))
                axios.delete(`http://localhost:3001/todos/${el.id}`)
                .then(function (response) {
                  // handle success
                  console.log(response.data);
                //  dispatch(getTodoSuccess(response.data))
                getTodo()
                })
                .catch(function (error) {
                  // handle error
                  console.log(error);
                 // dispatch(getTodoError(error))
                })
              
              }}
          >DELETE</button>
       </div>)}
    </div>
}