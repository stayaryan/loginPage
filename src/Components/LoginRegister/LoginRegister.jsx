import React from "react";
import "./LoginRegister.css";
import { FaUser, FaLock } from "react-icons/fa";

//creating the component
 const LoginRegister = () => {
    return (
        <div className="wrapper">
            <div className="form-box login">
                <form action="">
                <h1>Login</h1>
                <div className="input-box">
                    <input type="text" placeholder="Enter Username" required/>
                    <FaUser className="icon"/>
                </div>
                <div className="input-box">
                    <input type="password" placeholder="Enter Password" required/>
                    <FaLock className="icon"/>
                </div>
                <div className="Remember">
                    <label><input type="checkbox"/>Remember me</label>
                    <a href="#">Forgot Password?</a>
                </div>
                    <button type="submit">Login</button>
                    
                <div className="Register">
                    <p>Not a member?<a href="#">Register here</a></p>
                </div>
                </form>
            </div>
        </div>
    );
 }

 export default LoginRegister;