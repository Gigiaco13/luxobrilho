import { BrowserRouter, Form, Route, Routes } from "react-router-dom";
import './assets/style.css'

import Cadastro from "./pages/Cadastro";

import Home from './pages/home'

import Login from "./pages/Login";

function App() {

  return (
    <>
    <div>
      <BrowserRouter>
        <Routes> 
        <Route path="/" element={<Home/>}></Route>
        <Route path="/cadastro" element={<Cadastro/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
         </Routes>
      </BrowserRouter>
    </div>
    </>
  )
}

export default App
