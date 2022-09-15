import React from "react";
import "./App.css";
import cancelbutton from "../src/svgimages/83972.png"
function Application(){
     return(
      <div className="applicationform">
        <button className="cancelbutton2">
        <img src={cancelbutton} alt="cancelbutton" height={"25"} width={"25"} />
      </button>
        <div className="container5">
        <form>
          <h2 className="applicationformheading">APPLICATION FORM</h2>
          <ul>
            <li>
              <label htmlFor="customername" className="applicationdetails">Full Name:</label> <br />
              <input type="text" className="boxes3" name="customername" required/> <br />
              <br />
            </li>
            <li>
              <label htmlFor="phonenumber" className="applicationdetails">Phone Number:</label> <br />
              <input type="tel" className="boxes3" name="customermobilenumber" required/>
              <br />
              <br />
            </li>
            <li>
              <label htmlFor="customermailid" className="applicationdetails">EMail ID:</label> <br />
              <input type="email" className="boxes3" name="customermailid" required/>
              <br />
              <br />
            </li>
            <li>
              <label className="applicationdetails"> Gender:</label> <br/>
              <input type="radio" className="gender" name="Gender" />
              <label htmlFor="male" className="applicationdetails"> Male</label> <br/>
              <input type="radio" className="gender" name="Gender" />
              <label htmlFor="female" className="applicationdetails">Female</label> <br/>
              <input type="radio" className="gender" name="Gender" />
              <label htmlFor="others" className="applicationdetails">Others</label>
              <br /><br />
            </li>
            <h3>BIKE DETAILS:</h3>
            <li>
              <label htmlFor="bikename" className="applicationdetails">Bike Name:</label> <br />
              <input type="text" className="boxes3" name="bikename" required/> <br /> <br />
            </li>
            <li>
            <label htmlFor="bikemodel" className="applicationdetails">Bike Model:</label>
            <br />
            <input type="text" className="boxes3" name="bikemodel" required/> <br /> <br />
            </li>
            <li>
            <label htmlFor="Bikenumber" className="applicationdetails">Bike Number:</label>
            <br />
            <input type="text" className="boxes3" name="bikenumber"required /> <br /> <br />
            </li>
            <li>
              <label className="applicationdetails">Services:</label><br />
              <input type="checkbox" name="generalservice" className="services" required/>
              <label htmlFor="service1" className="applicationdetails">General Service Check-up</label> <br />
              <input type="checkbox" name="oilchange" className="services" required/>
              <label htmlFor="service2" className="applicationdetails">Oil Change</label><br />
              <input type="checkbox" name="waterwash" className="services" required/>
              <label htmlFor="service3" className="applicationdetails">Water Wash</label> <br /> <br />
            </li>
            <li>
              <label htmlFor="bookingdate" className="applicationdetails">Booking Date:</label> <br/>
              <input type="date" className="bookingdate" name="bookingdate" required/> <br /> <br />
            </li>
            <input type="checkbox" name="termsandconditions" className="termsandconditions" required/>
              <label htmlFor="service1">To Follow our <a className="conditions">Terms and Conditions</a></label> <br />
            <button type="submit" className="submit">SUBMIT</button>
          </ul>
        </form>
      </div>
      </div>
        
     );
}
export default Application;