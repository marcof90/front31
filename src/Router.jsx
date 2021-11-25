import React from 'react'
import { Routes, Route } from 'react-router'
import { ContactsApp } from './components/ContactsApp'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import NotFound from './pages/NotFound'

export default function Router() {
    return (
        <Routes>
            <Route path={'/'} element={<ContactsApp /> }/>
            <Route path={'/login'} element={<Login />} />
            <Route path={'/register'} element={<Register />} />
            <Route path='*' element={<NotFound /> }/>
        </Routes>
    )
}
