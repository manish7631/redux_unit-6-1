import React from 'react'
import { Link } from "react-router-dom"
export const TodosList = ({ todosList }) => {
    return (
        <div>
            {
                todosList.length && todosList.map((e) => {
                    return (
                        <Link key={e.id} to={`/todos/${e.id}`}> <div  >{e.title}</div></Link>
                    )
                })
            }
        </div>
    )
}
