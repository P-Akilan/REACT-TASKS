import React, {useState} from "react";
import "./App.css";
import Application from "../src/Application";
function Content() {
    const [show, setShow] = useState(false);
    return (
        <div className="container4">
            <div className="profile">
                <button type="submit" className="contentbutton">PROFILE</button>
                <button type="submit" className="contentbutton">APPLICATION FORM</button>
                <button type="submit" className="contentbutton">History</button>

            </div>
            <div className="middle">
                <button type="submit" className="applicationbutton" onClick={() =>setShow (true)}>APPLY</button>
                {show && (<Application/>)}
            </div>
        </div>
    );
}
export default Content;