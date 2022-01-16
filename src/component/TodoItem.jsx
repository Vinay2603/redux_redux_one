import { useEffect, useState } from "react"
import { useDispatch ,useSelector} from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom"
import {toggleTodo} from "../store/action"
const axios = require('axios');


export const  TodoItem=()=>{
    const navigate = useNavigate()
    const {id} = useParams()
    const [user ,setUser] = useState(null)
    const {todos} = useSelector((state)=> ({ todos: state.todos}))
    console.log(todos)
   const dispatch = useDispatch()     


const getSingleTodo =()=>{
    axios.get(`http://localhost:3001/todos/${id}`)
    .then(function (response) {
      // handle success
      console.log("res",response.data);
     setUser(response.data)
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
 
}
  console.log("user",user)
useEffect(()=>{
    console.log("gaksjcgsk")
    getSingleTodo()
},[])
    
    return <div>

          <h1>todo Item page: {id} </h1>
            <h2>TODO : {user?.title }</h2>
            <h3>STATUS : {user?.status ? "true" : "false"}</h3>
          
          <button
            onClick={()=>
            //    { console.log(toggleTodo(user.id))
            //     dispatch(toggleTodo(user.id))
            //    // getSingleTodo()
            // }
          {user.status = !user?.status}
            }
          >TOGGLE</button>

           <Link to={"/"}><button>back</button></Link> 
    </div>
}