import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";
import './Login.css'
import Swal from 'sweetalert2';


function Login() {
    const navigate = useNavigate()

    //Alert function;
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })


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
                errors.Password = "Password Must be Eight Degit"
            }
            return errors
        },
        onSubmit: async (Login) => {
            try {
                let login = await axios.post("https://gold-rate-calculator-back-end.vercel.app/Login", Login);
                let watchman = login.data;
                if (watchman.token) {
                    Toast.fire({ icon: 'success', title: 'Signed in successfully' })
                    navigate('/Home',{state:watchman.Name});
                } else {
                    Toast.fire({ icon: 'warning', title: `${watchman.Message}` })
                }
            } catch (error) {
                Toast.fire({ icon: 'error', title: `${error.response.data.Message}` })
            }
        }
    })
    return (
        <>
            <div className="wrapper">
                <div className="fir">
                    <img src="./Stuff/Login.png" alt="" />
                </div>
                <div className="text-center mt-4 name">
                    Login
                </div>
                <form className="p-3 mt-3" onSubmit={login.handleSubmit}>
                    <div className={`form-field d-flex align-items-center ${login.errors.Email}`}>
                        <span className="fas fa-envelope"></span>
                        <input type="Email" id="userName" placeholder="Email" value={login.values.Email} onChange={login.handleChange} name="Email" required />
                    </div>
                    <div className={`form-field d-flex align-items-center`}>
                        <span className="fas fa-key"></span>
                        <input type="password" id="pwd" placeholder="Password" value={login.values.Password} onChange={login.handleChange} name="Password" required />
                    </div>
                    <span className="text-warning">{login.errors.Password}</span>
                    <button className="btn mt-3" type="submit">Login</button>
                </form>
                <div className="text-center fs-6">
                    <a href="Forgot" className="text-black">Forget password? or<>&nbsp;</></a><a href="/Registration" className="text-black"><>&nbsp;</>Sign up</a>
                </div>

                <span className="d-grid text-black bg-warning">
                    <strong>For testing Purpose</strong>
                    Email: Test@gmail.com <br/>
                    Pass: Test@1234
                </span>
            </div>
        </>
    )
}

export default Login