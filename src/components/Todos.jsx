import React, { useEffect } from 'react'
import { TodoInput } from './TodoInput'
import { getTodoFailure, getTodoRequest, getTodoSuccess, addTodoRequest, addTodoFailure, addTodoSuccess } from '../redux/action'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { TodosList } from './TodosList'
export const Todos = () => {


    const { todos, isLoading, isError } = useSelector((store) => store.data)
    // console.log(todos)
    const dispatch = useDispatch();
    const handleAdd = (payload) => {
        addTodos(payload).then(() => getTodos()).catch(err => console.log(err))
    }
    const store = useSelector(store => store)

    const addTodos = (payload) => {
        const requestAction = addTodoRequest()
        dispatch(requestAction)
        return axios.post("http://localhost:8080/todos", payload).then(
            res => {
                const successAction = addTodoSuccess(res.data)
                dispatch(successAction)
            }).catch(err => {
                const errorAction = addTodoFailure(err)
                dispatch(errorAction)
            })
    }




    const getTodos = () => {
        const requestAction = getTodoRequest()
        dispatch(requestAction)
        return axios.get("http://localhost:8080/todos").then(
            res => {
                const successAction = getTodoSuccess(res.data)
                dispatch(successAction)
            }).catch(err => {
                const errorAction = getTodoFailure(err)
                dispatch(errorAction)
            })
    }

    useEffect(() => {
        getTodos();
    }, [])




    return (
        <div>
            <h1>Todos</h1>
            <TodoInput onClick={handleAdd} />
            <TodosList todosList={todos} />

        </div>
    )
}
