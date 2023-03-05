import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {Homepage, Subscription, Posts} from './pages'


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage/>} />
        <Route path='/subscriptions' element={<Subscription/>} />
        <Route path='/posts' element={<Posts/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App