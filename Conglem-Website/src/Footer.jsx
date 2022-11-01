import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faTwitter,
    faLinkedin,
  } from "@fortawesome/free-brands-svg-icons";
import react from "react";
function Foot(){
   return <div class="footer">
  <div class="inner-footer">
{/* 
<!--  for company name and description --> */}
    <div class="footer-items">
      <h1><a class="navbar-brand" href="javascript:void(0)">
            <img src="data:image/png;base64,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" alt="" width="45" height="40" class="d-inline-block align-text-top" />
            <span class="p-2">Conglem.ai</span></a></h1>
      <p>BLR , IN</p>
      {/* <!--   for social links --> */}
      <div class="social-media">
          <a href="#"><FontAwesomeIcon icon={faFacebook}/></a>
          <a href="#"><FontAwesomeIcon icon={faTwitter}/></a>
          <a href="#"><FontAwesomeIcon icon={faLinkedin}/></a>
        </div> 
    </div>

{/* <!--  for quick links  --> */}
    <div class="footer-items">
      <h3>Sitemap</h3>
      <div class="border1"></div> 
      {/* <!--for the underline --> */}
        <ul>
          <a href="#"><li>Home</li></a>
          <a href="#"><li>Product</li></a>
          <a href="#"><li>Pricing</li></a>
          <a href="#"><li>Testimonial</li></a>
          <a href="#"><li>Contact Us</li></a>
          
        </ul>
    </div>

{/* <!--  for some other links --> */}
    <div class="footer-items">
      <h3>Landing</h3>
      <div class="border1"></div>  
        <ul>
          <a href="#"><li>Mobile App</li></a>
          <a href="#"><li>Property</li></a>
          <a href="#"><li>Personal Website</li></a>
          <a href="#"><li>Web Developer</li></a>
          <a href="#"><li>Online Course</li></a>
          <a href="#"><li>Donation</li></a>
        </ul>
    </div>

{/* <!--  for contact us info --> */}
    <div class="footer-items">
      <h3>Utility</h3>
      <div class="border1"></div>
        <ul>
          <li>FAQ</li>
          <li>Terms & Conditions</li>
          
        </ul> 
      
    </div>
  </div>
  
{/* <!--   Footer Bottom start  --> */}
  <div class="footer-bottom">
    Copyright &copy; Conglem.ai 2022.
  </div>
</div>
}
export default Foot;