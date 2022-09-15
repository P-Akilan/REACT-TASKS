import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";
import gpay from "../src/svgimages/gpayicon.png";
import paytm from "../src/svgimages/paytm-logo.png";
import phonepe from "../src/svgimages/phonepe.png";
import image1 from "../src/svgimages/yamaha.png";
import Register from "../src/Register";
function Login() {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  function navigateToContent() {
    navigate("/content");
  }
 
  return (
    <div className="container">
      <div className="header">
        <div className="header1">
        <p className="heading"><sup>John's</sup>2&#9762;SPARKS <br/></p>
       <p className="address">Anna Nagar,Thampi street,XYZ Talkies Opposite,Coimbatore-600391.</p>
        </div>
        <div className="header2">
        <div className="home1">
            <a href=".top" className="content">HOME</a>
          </div>
          <div className="home2">
            <a href=".serviceheading" className="content">SERVICES</a>
          </div>
          <div className="home2">
            <a href=".bottom" className="content">ABOUT</a>
          </div>
          <div className="home3" >
            <button type="submit" className="homepagelogin">LOGIN</button>
          </div>
          <div className="home4" >
            <button type="submit" className="homepageregister" onClick={() =>setShow(true)}>REGISTER??</button>
            {show && (<Register/>)}
          </div>
        </div>
      </div>
      
      <div className="top">
        <div className="bikeimages">
          <img src={image1} alt="image1" height={"500"} width={"1200"}></img>
        </div>
        <div className="container1">
          <h2 className="loginheading" >LOGIN FORM</h2>
          <form>
            <ul>
              <li>
                <label htmlfor="emailid" className="logindetails">EMAIL:</label> <br />
                <input type="email" name="email" className="boxes1" required /> <br />

              </li>
              <li>
                <label htmlfor="pswd" className="logindetails">PASSWORD:</label> <br />
                <input type="password" name="password" className="boxes1" required />
                <a href="./Pswdchange" className="frgtpswd">Forgot password?</a> <br /> <br />

              </li>
              <button type="submit" className="login" onClick={navigateToContent}>LOGIN</button>
              <br />
            </ul>
          </form>
        </div>

        <h2 className="serviceheading">SERVICES</h2>
        <div className="service">
          <div className="services1">
          </div>
          <div className="split"><p className="servicename"><b>General Service Check-up</b></p></div>
        </div>
        <div className="service">
          <div className="services2">
          </div>
          <div className="split"><p className="servicename"><b>Oil Change</b></p></div>
        </div>
        <div className="service">
          <div className="services3">

          </div>
          <div className="split"><p className="servicename"><b>Water Wash</b></p></div>
        </div>
      </div>
      <div className="bottom">
        <div className="onlinepay">
          <p className="transactions">
            HERE!... Only Accept These Transaction Methods...
          </p>
        </div>
        <div className="onlinepay1"><img src={gpay} alt="gpay" height={"50"} width={"50"}/></div>
        <div className="onlinepay2"><img src={paytm} alt="gpay" height={"50"} width={"50"}/></div>
        <div className="onlinepay3"><img src={phonepe} alt="gpay" height={"50"} width={"50"}/></div> <br /> <br /> <br />
        <p className="address2">Anna Nagar,Thampi street,XYZ Talkies Opposite,Coimbatore-600391.</p>
      </div>
    </div>
  );
}
export default Login;