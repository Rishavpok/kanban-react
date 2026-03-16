
import './App.css'
import {  Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home.tsx";
import Registration from './pages/Authentication/Register/Registration.tsx';
import ProtectedRoute from './core/guard/auth_guard.tsx';
import Login from './pages/Authentication/Login/Login.tsx';
import { ToastContainer } from 'react-toastify';

function App() {

  return (
    
    <BrowserRouter>
        <ToastContainer position="top-right" autoClose={3000} />
        <Routes>
            <Route path="/register" element={<Registration />} />
            <Route path="/login" element={<Login />} />

            <Route element={<ProtectedRoute />}>
                <Route path='/' element={<Navigate to="/home" />} />
                <Route path="/home" element={<Home />} />
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App
