import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './components/Header'

import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';
import About from './Pages/About';
import Profile from './Pages/Profile';
import Home from './Pages/Home';
export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile" element={<Profile />} />
         
        </Routes>
      </BrowserRouter>
    </div>
  );
}

