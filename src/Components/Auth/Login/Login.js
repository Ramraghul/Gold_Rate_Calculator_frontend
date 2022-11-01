import React from "react";
import { useNavigate } from "react-router-dom";
import './Login.css'

function Login() {
    const navigate = useNavigate()

    let conform=()=>{
        navigate('/Home')
    }
    return (
        <>
            <div className="wrapper">
                <div className="logo">
                    <img src="./Stuff/Login.png" alt=""/>
                </div>
                <div className="text-center mt-4 name">
                    Login
                </div>
                <form className="p-3 mt-3">
                    <div className="form-field d-flex align-items-center">
                        <span className="fas fa-envelope"></span>
                        <input type="Email" name="userName" id="userName" placeholder="Email"/>
                    </div>
                    <div className="form-field d-flex align-items-center">
                        <span className="fas fa-key"></span>
                        <input type="password" name="password" id="pwd" placeholder="Password"/>
                    </div>
                    <button className="btn mt-3" onClick={()=>{conform()}}>Login</button>
                </form>
                <div className="text-center fs-6">
                    <a href="Forgot" className="text-white">Forget password?<>&nbsp;</></a>or<a href="/Registration" className="text-white"><>&nbsp;</>Sign up</a>
                </div>
            </div>
        </>
    )
}

export default Login