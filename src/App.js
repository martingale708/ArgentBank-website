import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Header from "../src/components/Header.jsx";
import Footer from  "../src/components/Footer.jsx";
import Home from "../src/pages/Home.jsx";
 import Login from "../src/pages/Login.jsx";
 import Profile from "../src/pages/Profil.jsx";
 import Error from "../src/pages/Error.jsx";
import "../src/sass/main.scss"


function App() {
    const isConnected = useSelector((state) => state.auth.isConnected);

  return (
    <div>
        <Header/>
        <Routes>
            <Route path='/' element={<Home />} />
             <Route path='login' element={<Login />} />
            <Route 
                path='profile' 
                element={isConnected ? <Profile/> : <Navigate to="/login" />} 
            />
             <Route path='*' element={<Error />} />  
        </Routes>
        <Footer />
    </div>
)  
}

export default App;
