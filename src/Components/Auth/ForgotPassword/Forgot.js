import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";
import './Forgot.css';
import Swal from 'sweetalert2';

function Forgot() {

    let navigate = useNavigate()

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

    //Formik Method
    let formik = useFormik({
        initialValues: {
            Email: ""
        },
        validate: (value) => {
            let errors = {}
            //Password;
            if (value.Email === "") {
                errors.Email = "border border-danger"
            }
            return errors
        },
        onSubmit: async (User) => {
            try {
                let status = await axios.post('https://gold-rate-calculator.herokuapp.com/Reset', User);
                console.log(status);
                Toast.fire({ icon: 'success', title: 'Link send Your mail' })
                navigate('/')
            } catch (error) {
                Toast.fire({ icon: 'error', title: 'Sorry User not found.!' })
            }
        }
    });
    
    return (
        <>
            <div className="Forgot">
                <div className="togo">
                    <img src="./Stuff/Reset.png" alt="" />
                </div>
                <div className="text-center mt-4 name">
                    Reset Link Generator
                </div>
                <form className="p-3 mt-3" onSubmit={formik.handleSubmit}>
                    <div className={`form-field d-flex align-items-center ${formik.errors.Email}`}>
                        <span className="fas fa-envelope"></span>
                        <input type="Email" id="userName" placeholder="Email" value={formik.values.Email} onChange={formik.handleChange} name="Email" required />
                    </div>
                    <button className="btn mt-3" disabled={!formik.isValid}>Send</button>
                </form>
            </div>
        </>
    )
}

export default Forgot;