import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Login from './Components/Auth/Login/Login';
import Registration from './Components/Auth/Registration/Registration';
import Forgot from './Components/Auth/ForgotPassword/Forgot';
import Update from './Components/Auth/Update/Update';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Login/>}/>
      <Route path='/Registration' element={<Registration/>}/>
      <Route path='/Forgot' element={<Forgot/>}/>
      <Route path='/Update' element={<Update/>}/>
      <Route path='/Home' element={<Home/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;
