import React from "react";
import './Forgot.css';

function Forgot() {
    return (
        <>
            <div className="Forgot">
                <div className="togo">
                    <img src="./Stuff/Reset.png" alt="" />
                </div>
                <div className="text-center mt-4 name">
                    Reset Link Generator
                </div>
                <form className="p-3 mt-3">
                    <div className="form-field d-flex align-items-center">
                        <span className="fas fa-envelope"></span>
                        <input type="Email" name="userName" id="userName" placeholder="Email" />
                    </div>
                    <button className="btn mt-3">Send</button>
                </form>
            </div>
        </>
    )
}

export default Forgot;