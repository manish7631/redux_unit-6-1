 
import * as  types from "./actionTypes"


const initialState = {
 
    data:{
        todos:[],
        isLoading:false,
        isError:false,
    }
}

const reducer = (state = initialState, action) => {
    const {type, payload} = action;
    switch(type){
        case types.GET_TODO_REQUEST:
            return  {...state, data:{...state.data, isLoading:true }  }

            case types.GET_TODO_SUCCESS:
                return  {...state, 
                    data:{
                        todos: payload, 
                        isLoading:true,
                        isError:false,
                    }
                    }
                    

                case types.GET_TODO_FAILURE:
                    return  {...state, data:{isLoading:false, isError:payload}}

                    case types.ADD_TODO_REQUEST:
                        return {...state, data: {...state.data, isLoading:true, isError:false}}

                        
                    case types.ADD_TODO_SUCCESS:
                        return {...state, data: {...state.data, isLoading:false, isError:false}}


                        
                    case types.ADD_TODO_FAILURE:
                        return {...state, data: {...state.data, isLoading:true, isError:true}}


                        case types.TOGGLE_TODO_REQUEST:
                            return {...state, data: {...state.data, isLoading:true, isError:false}}
    
                            
                        case types.TOGGLE_TODO_SUCCESS:

                        let newToggleTodos = state.todos.map((item) => 
                        item.id === payload.id ? payload : item)

                            return {...state, data: {newToggleTodos, isLoading:false, isError:false}}
    
    
                            
                        case types.TOGGLE_TODO_FAILURE:
                            return {...state, data: {...state.data, isLoading:true, isError:true}}
            
            default:
                return state
    }
}

export default reducer;