import { ADD_TODO_LOADING,
    ADD_TODO_SUCCESS,
    ADD_TODO_ERROR,
    GET_TODO_LOADING,
    GET_TODO_SUCCESS,
    GET_TODO_ERROR } from "./actionType";

export const reducer =(state = { loading:false, todos:[] ,error:false } ,{type,payload})=>{

    switch(type){
       case ADD_TODO_SUCCESS:
           return{
               ...state,
               loading:false,
               todos:[...state.todos,payload]
           }
        case ADD_TODO_LOADING:
            return{
                ...state,
                loading :true
            }
        case ADD_TODO_ERROR:
            return{
                 ...state,
                 error:true,
                loading:false

            }
         
        case GET_TODO_SUCCESS:
                return{
                    ...state,
                    loading:false,
                    todos:payload
                }
        case GET_TODO_LOADING:
                 return{
                     ...state,
                     loading :true
                 }
         case GET_TODO_ERROR:
                 return{
                      ...state,
                      error:true,
                     loading:false
     
                     }    


        default :
          return state   
    }
}