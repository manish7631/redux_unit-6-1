import React, { useState } from 'react'
import { v4 as uuid } from "uuid"

export const TodoInput = ({ onClick }) => {
    const [text, setText] = useState('')
    const handleAdd = () => {
        const payload = { title: text, status: false }
        onClick(payload)
        setText("")
    }
    return (
        <div>
            <input type="text" value={text} placeholder='Enter Your Todos' onChange={(e) => setText(e.target.value)} />
            <button onClick={handleAdd}>Add</button>
        </div>
    )
}
