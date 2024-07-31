import React from 'react';
import Form from "../components/Form.jsx"
import "../sass/login.scss";
const Login = () => {
    return (
        <div className='signin-page'>
            <main className='bg-dark'>
                {/* Returns form component */}
                < Form />
            </main>
        </div>
        
    )
};

export default Login;