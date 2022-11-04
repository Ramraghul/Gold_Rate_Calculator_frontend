import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";
import './Login.css'

function Login() {
    const navigate = useNavigate()

        //Login Method;
        let login = useFormik({
            initialValues: {
                Email: "",
                Password: ""
            },
            validate: (value) => {
                let errors = {};
                //Email; 
                if (value.Email === "") {
                    errors.Email = "border border-danger"
                }
                //Password;
                if (value.Password.length <= 8) {
                    errors.Password = "border border-danger"
                }
                return errors
            },
            onSubmit: async (Login) => {
    
                try {
                    let login = await axios.post("https://gold-rate-calculator.herokuapp.com/Login", Login);
                    console.log(login.data);
                    let watchman = login.data;
                    if (watchman.token) {
                        alert('Successfully Login')
                        navigate('/Home')
                    } else {
                        alert(`${watchman.Message}`)
                    }
                } catch (error) {
                    alert(`${error.response.data.Message}`)
                }
            }
        })
    return (
        <>
            <div className="wrapper">
                <div className="fir">
                    <img src="./Stuff/Login.png" alt=""/>
                </div>
                <div className="text-center mt-4 name">
                    Login
                </div>
                <form className="p-3 mt-3" onSubmit={login.handleSubmit}>
                    <div className={`form-field d-flex align-items-center ${login.errors.Email}`}>
                        <span className="fas fa-envelope"></span>
                        <input type="Email" id="userName" placeholder="Email" value={login.values.Email} onChange={login.handleChange} name="Email" required/>
                    </div>
                    <div className={`form-field d-flex align-items-center ${login.errors.Password}`}>
                        <span className="fas fa-key"></span>
                        <input type="password"  id="pwd" placeholder="Password" value={login.values.Password} onChange={login.handleChange} name="Password" required/>
                    </div>
                    <button className="btn mt-3" type="submit">Login</button>
                </form>
                <div className="text-center fs-6">
                    <a href="Forgot" className="text-black">Forget password? or<>&nbsp;</></a><a href="/Registration" className="text-black"><>&nbsp;</>Sign up</a>
                </div>
            </div>
        </>
    )
}

export default Login