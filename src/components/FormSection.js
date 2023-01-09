import React, { Component } from "react";
import { Signup } from "./Signup";
import pic1 from "../assets/Level.png";
import pic2 from "../assets/pic2.png";
export default class FormSection extends Component {
  render() {
    return (
      <div className="main-signup">
         <div className="floating-image"><img src={pic2} /></div>
        <div className="promo-section1"><p>Getting</p>
        <p>Started With</p>
        <p>Level 5 Fleet</p></div>
        <div className="promo-section2"><p>Getting</p>
        <p>Monthly</p>
        <p>subscribtion</p> <p>per device</p>
        <br/>
        <p>$10</p></div>
       
        <div className="signup-section">
          <div className="top-bar">
            <img src={pic1} className="top-flex" />
            <div className="top-flex">English(UK)s</div>
          </div>

          <Signup />
          <p>
            Already have an account? <a href="#">Log In</a>
          </p>
        </div>
        
      </div>
    );
  }
}
