import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import './Update.css';
import Swal from 'sweetalert2';

function Update() {

    //Get user Detail via link 
    const test = useParams()
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

    //Formik method;
    let formik = useFormik({
        initialValues: {
            Password: ""
        },
        validate: (value) => {
            let errors = {}
            //Password;
            if (value.Password.length <= 8) {
                errors.Password = "border border-info"
            }
            return errors
        },
        onSubmit: async (User) => {
            try {
                await axios.post(`https://gold-rate-calculator.herokuapp.com/Update/${test.id}/${test.token}`, User);
                Toast.fire({ icon: 'success', title: 'Password update done' })
                navigate('/')
            } catch (error) {
                Toast.fire({ icon: 'error', title: `${error.response.data.Message}` })
            }
        }
    });
    return (
        <>
            <div className="Change">
                <div className="text-center mt-4 name">
                    Reset Password
                </div>
                <form className="p-3 mt-3" onSubmit={formik.handleSubmit}>
                    <div className="form-field d-flex align-items-center">
                        <span className="fas fa-key"></span>
                        <input type="Password" id="userName" placeholder="Password" value={formik.values.Password} onChange={formik.handleChange} name="Password" />
                    </div>
                    <div className="form-field d-flex align-items-center">
                        <span className="fas fa-key"></span>
                        <input type="password" id="pwd" placeholder="Conform Password" required />
                    </div>
                    <button className="btn mt-3" disabled={!formik.isValid}>Click to update</button>
                </form>
            </div>
        </>
    )
}

export default Update;