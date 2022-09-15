import React from "react";
import "./App.css";
function Pswdchange() {
    return (
        <div className="container3">
            <ul>
                <li>
                    <label htmlFor="gmail">Enter your E-MailID</label>
                    <input type="email" className="boxes4" name="resetemail" />
                </li>
                <li>
                    <label htmlFor="newpswd">Enter Your NewPassword</label>
                    <input type="password" className="boxes4" name="resetpswd"/>
                </li>
                <li>
                    <label htmlFor="repswd">Re-Enter Your NewPassword</label>
                    <input type="password" className="boxes4" name="repswd"/>
                </li>
                <button type="submit" className="createpswd">CREATE PASSWORD</button>
            </ul>
        </div>
    );
}
export default Pswdchange;