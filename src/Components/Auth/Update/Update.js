import React from "react";
import './Update.css';

function Update (){
    return(
        <>
        <div className="Change">
                <div className="logo">
                    <img src="./Stuff/Login.png" alt=""/>
                </div>
                <div className="text-center mt-4 name">
                    Reset Password
                </div>
                <form className="p-3 mt-3">
                    <div className="form-field d-flex align-items-center">
                        <span className="fas fa-key"></span>
                        <input type="Password" name="password" id="userName" placeholder="Password"/>
                    </div>
                    <div className="form-field d-flex align-items-center">
                        <span className="fas fa-key"></span>
                        <input type="password" name="password" id="pwd" placeholder="Conform Password"/>
                    </div>
                    <button className="btn mt-3">Click to update</button>
                </form>
            </div>
        </>
    )
}

export default Update;