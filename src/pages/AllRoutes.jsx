import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { TodosDetails } from '../components/TodosDetails'
import { TodosList } from '../components/TodosList'
import { Home } from './Home'

export const AllRoutes = () => {
    return (

        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/todos' element={<TodosList />} />
            <Route path='/todos/:id' element={<TodosDetails />} />
        </Routes>

    )
}
