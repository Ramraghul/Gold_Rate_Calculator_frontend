import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";
import './Registration.css'
import Swal from 'sweetalert2';

function Registration(){
    let navigation = useNavigate()

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
    
    //Registration method;
    let formik = useFormik({
        initialValues: {
            Username:"",
            Email:"",
            Password:""
        },
        validate: (value) => {
            let errors = {}
            //Name; 
            if (value.Username === "") {
                errors.Username = "border border-danger"
            }
            //Password;
            if (value.Password.length <= 8) {
                errors.Password = "Password must be 8 Digit"
            }
            return errors
        },
        onSubmit: async (User) => {
            try {
                await axios.post('https://gold-rate-calculator.herokuapp.com/Register', User);
                Toast.fire({ icon: 'success', title: 'Registration successfully' })
                navigation('/')
            } catch (error) {
                Toast.fire({ icon: 'error', title: `${error.response.data.Message}` })
            }
        }
    });
    return(
        <>
        <div className="Reg">
                <div className="text-center mt-4 name">
                    Registration
                </div>
                <form className="p-3 mt-3" onSubmit={formik.handleSubmit}>
                    <div className={`form-field d-flex align-items-center ${formik.errors.Username}`}>
                        <span className="fas fa-user"></span>
                        <input type="text" placeholder="Username" value={formik.values.Username} onChange={formik.handleChange} name="Username"/>
                    </div>
                    <div className="form-field d-flex align-items-center">
                        <span className="fas fa-envelope"></span>
                        <input type="Email" className="pwd" placeholder="Email"  value={formik.values.Email} onChange={formik.handleChange} name='Email'  />
                    </div>
                    <div className={`form-field d-flex align-items-center ${formik.errors.Password}`}>
                        <span className="fas fa-key"></span>
                        <input type="password" className="pwd" placeholder="Password" value={formik.values.Password} onChange={formik.handleChange} name='Password' required/>
                    </div>
                    <span className="text-warning">{formik.errors.Password}</span>
                    <div className={`form-field d-flex align-items-center`}>
                        <span className="fas fa-key"></span>
                        <input type="password" className="pwd" placeholder="Conform Password" required/>
                    </div>
                    <button type="submit" disabled={!formik.isValid} className="btn mt-3">Register</button>
                </form>
                <div className="text-center odd fs-6">
                    <h6 className="odd">Already Have a Account</h6><a href="/" className="text-dark odd"><u >Click Here</u></a>
                </div>
            </div>
        </>
    )
}

export default Registration;