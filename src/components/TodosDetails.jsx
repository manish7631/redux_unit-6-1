import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux';
import axios from "axios";
import { toggleTodoFailure, toggleTodoRequest, toggleTodoSuccess } from '../redux/action';
export const TodosDetails = () => {
    // const todos = useSelector(state => state.data);

    // const { id } = useParams()


    // const [currentTodo] = useState(() => {
    //     return todos.find((item) => item.id === id) || {}
    // })


    const { id } = useParams()


    const [list, setlist] = useState({})


    useEffect(() => {
        GetEvent()
    }, [])
    const GetEvent = () => {
        axios.get(`http://localhost:8080/todos/${id}`).then(({ data }) => {
            setlist(data)
            console.log("data", data)

        }).catch((err) => { console.log('error', err) })
    }
    const dispatch = useDispatch()
    const toggleStatus = (id, newStatus) => {
        dispatch(toggleTodoRequest())

        axios.patch(`http://localhost:8080/todos/${id}`, { status: newStatus }).then(r =>

            dispatch(toggleTodoSuccess)).catch(e => dispatch(toggleTodoFailure(e)))
    }


    return (
        <div>
            <h1>   TodosDetails</h1>

            <h2> Title:- {list.title}</h2>
            <h2>Status:-{list.status ? "true" : "false"}</h2>

            <button onClick={toggleStatus(list.id, !list.status)}>Toggle</button>


        </div>
    )
}
