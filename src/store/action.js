

import {ADD_TODO_LOADING,
    ADD_TODO_SUCCESS,
    ADD_TODO_ERROR,
    GET_TODO_LOADING,
    GET_TODO_SUCCESS,
    GET_TODO_ERROR,
    DELETE_TODO ,
    TOGGLE_TODO
} from "./actionType";



const addTodoLoading =()=>{
    return{
        type: ADD_TODO_LOADING,
    }
}

const addTodoSuccess =(data)=>{
    return{
        type: ADD_TODO_SUCCESS,
        payload: data
    }
}

const addTodoError =(err)=>{
    return{
        type: ADD_TODO_ERROR,
         payload:err
    }
}
////

const getTodoLoading =()=>{
    return{
        type: GET_TODO_LOADING,
    }
}

const getTodoSuccess =(data)=>{
    return{
        type: GET_TODO_SUCCESS,
        payload: data
    }
}

const getTodoError =(err)=>{
    return{
        type: GET_TODO_ERROR,
         payload:err
    }
}

const deleteTodo =(id)=>{
    return{
        type: DELETE_TODO,
         payload:id
    }
}

const toggleTodo =(id)=>{
    return{
        type: TOGGLE_TODO,
         payload:id
    }
}

export {addTodoError,
    addTodoSuccess, 
    addTodoLoading ,
     getTodoLoading ,
      getTodoSuccess ,
       getTodoError ,
       deleteTodo , 
       toggleTodo  }