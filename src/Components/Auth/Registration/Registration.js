import React from "react";
import './Registration.css'

function Registration(){
    return(
        <>
        <div className="Reg">
                <div className="text-center mt-4 name">
                    Registration
                </div>
                <form className="p-3 mt-3">
                    <div className="form-field d-flex align-items-center">
                        <span className="fas fa-user"></span>
                        <input type="text" name="userName" id="userName" placeholder="Username"/>
                    </div>
                    <div className="form-field d-flex align-items-center">
                        <span className="fas fa-envelope"></span>
                        <input type="Email" name="Email" id="pwd" placeholder="Email"/>
                    </div>
                    <div className="form-field d-flex align-items-center">
                        <span className="fas fa-key"></span>
                        <input type="password" name="password" id="pwd" placeholder="Password"/>
                    </div>
                    <div className="form-field d-flex align-items-center">
                        <span className="fas fa-key"></span>
                        <input type="password" name="password" id="pwd" placeholder="Conform Password"/>
                    </div>
                    <button className="btn mt-3">Register</button>
                </form>
                <div className="text-center fs-6">
                    <h6>Already Have a Account</h6><a href="/" className="text-white"><u>Click Here</u></a>
                </div>
            </div>
        </>
    )
}

export default Registration;