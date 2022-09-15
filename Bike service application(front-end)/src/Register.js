import React from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";
import cancelbutton from "../src/svgimages/83972.png";
function Register() {
  const navigate = useNavigate();
  function navigateToLogin() {
    navigate("/login");
  }
  return (
    <div className="container2">
        <button className="cancelbutton1">
        <img src={cancelbutton} alt="cancelbutton" height={"25"} width={"25"} />
      </button>
      <h2 className="registrationheading">REGISTRATION FORM</h2>
      <form className="register" action="register.php" method="POST">
        <ul>
          <li>
            <label htmlFor="fullname" className="registerdetails">FULL NAME:</label> <br />
            <input
              type="text"
              className="boxes2"
              name="fullname"
              placeholder="eg.Ashwin kumar"
              required />
            <br />
            <br />
          </li>
          <li>
            <label htmlfor="mobilenumber" className="registerdetails">MOBILE NUMBER:</label> <br />
            <input
              type="tel"
              className="boxes2"
              name="mobilenumber"
              placeholder="eg.+91 9876543210"
              required />
            <br />
            <br />
          </li>
          <li>
            <label htmlFor="email" className="registerdetails">E-Mail ID:</label> <br />
            <input
              type="email"
              className="boxes2"
              name="email"
              placeholder="eg.abc123@gmail.com"
              required />
            <br />
            <br />
          </li>
          <li>
            <label htmlFor="password" className="registerdetails">PASSWORD:</label> <br />
            <input
              type="password"
              className="boxes2"
              name="password"
              placeholder="Enter Your Password"
              required /><br />
            <br />
          </li>
          <li>
            <label htmlFor="retypepswd" className="registerdetails">RE-TYPE PASSWORD:</label> <br />
            <input
              type="password"
              className="boxes2"
              name="retypepswd"
              placeholder="ReTypePassword"
              required />
            <br />
            <br />
          </li>
        </ul>
        <input type="checkbox" name="termsandconditions" className="terms" required/>
              <label htmlFor="service1">By Clicking Register,You need to accept our<a className="conditions">Terms and Conditions</a></label> <br />
          
        
        <button type="submit" className="register" onClick={navigateToLogin}><b>REGISTER</b></button>
      </form>
    </div>);
}
export default Register;