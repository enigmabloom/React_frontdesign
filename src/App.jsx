import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login'
import { Route, Routes } from 'react-router-dom'
import Signup from './components/Signup'
import Blog from './components/Blog'
import Addblogs from './components/Addblogs'
import Main from './components/Main'

function App() {
 

  return (
    <>
   <Routes>
    <Route path='/' element={<Login/>}>LogIn</Route>
    <Route path='/signup' element={<Signup/>}>SignUp</Route>
    <Route path='/blog' element={<Main child={<Blog/>}/>}></Route>
    <Route path='/addblogs' element={<Main child={<Addblogs/>}/>}></Route>
   </Routes>
    </>
  )
}

export default App
