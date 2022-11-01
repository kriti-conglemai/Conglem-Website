import logo from './logo.svg';
import image from "./img/Image.png"
import image2 from "./img/digital-marketing-1433427_1920 1.png";
import image3 from "./img/Images.png";
import image4 from "./img/Image (1).png"
import Carousel from 'react-bootstrap/Carousel';
import Form from './form';
import { FontAwesomeIcon, FaBrightness } from '@fortawesome/react-fontawesome'
import { faSun, faMoon, faArrowLeft, faArrowRight, faThLarge, faL, faStar, faRankingStar, fa1, fa2, fa3, faHandHoldingDroplet, faUserFriends, faChartLine, faArrowUpRightDots, faUser, faUserGroup, faListCheck } from '@fortawesome/free-solid-svg-icons'
import './App.css';
import Foot from './Footer';
import { faFirstOrderAlt } from '@fortawesome/free-brands-svg-icons';
import { faHandsHelping, faUsers } from '@fortawesome/fontawesome-free-solid';

function App() {
  return (
    <div className="App">
      <nav class="navbar navbar-expand-sm">
        <div class="container-fluid">
          <a class="navbar-brand" href="javascript:void(0)">
            <img src="data:image/png;base64,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" alt="" width="45" height="40" class="d-inline-block align-text-top" />
            <span class="p-2 mt-2">Conglem.ai</span></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
            <span class="navbar-toggler-icon"></span>
          </button>
          {/* <div class="collapse navbar-collapse justify-content-center" id="mynavbar"> */}
          <div class="collapse navbar-collapse navbar_center_align" id="mynavbar">
            <ul class="navbar-nav mx-auto">
              <li class="nav-item">
                <a class="nav-link" href="#home">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#product">Product</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#features">Feature</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#contact">Contact Us</a>
              </li>
              {/* <li class="nav-item">
                <a class="nav-link">
                  <FontAwesomeIcon icon={faSun} />
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link">
                  <FontAwesomeIcon icon={faMoon} />
                </a>
              </li> */}
            </ul>
            {/* <form class="d-flex">
              <button class="btn btn-primary btn-lg me-2" type="button">Login</button>
              <button class="btn btn-outline-primary btn-lg " type="button">SignUp</button>
            </form> */}
          </div>
        </div>
      </nav>
      <div id='home'>
         {/* First Section starts */}
      
      <div class="container my-5">
        <div class="row">
          <div class="col-lg-6">
            <div class="p-3">
              <h2 class="display-5 title">Create <span class="heading">Web Presence</span> For Your <span class="heading">Company</span> and Stand <span class="heading">Distinctive</span></h2>
              <p class="lead mt-4">Conglem is an <span class="para_heading">AI-based powerhouse</span> with an objective to help you <span class="para_heading">create your own brand </span>
                harnessing new age technology so you can establish
                <span class="para_heading"> enhanced benchmarks</span> and <span class="para_heading">grow tremendously!</span> </p>
              <a href="#" class="btn btn-primary btn-lg mt-2">Get Started</a>
            </div>
          </div>
          <div class="col-lg-6">
            <img class="w-100" src={image4} />
          </div>
        </div>
      </div>
      {/* Second Section Starts */}
      <div class="container my-5">
        <div class="row">
          <div class="col-lg-12">
            <div class="p-3 mt-4 ">
              <center><h2 class="display-5 title">Why <span class="para_heading">Conglem?</span></h2></center>
              <p class="lead">We at Conglem aim to counter and resolve your company's issues in a <span class="para_heading">tech-powered</span> way
                customised appropriately for your sector, product, size, spending capacity, and location.
                We cater solutions that <span class="para_heading">integral</span> to your company, <span class="para_heading">dependable</span> in longetivity, and
                <span class="para_heading">objective</span> upto industry relvance.</p>

            </div>
          </div>
        </div>
      </div>
        
      </div>
     
     <div id='product'>
      {/*Third section starts */}
      <div class="container my-5">
        <div class="row">
          <center><h2 class="display-5 title">What can you <span class="para_heading">Expect?</span></h2>
            <p class="lead">Its Always about <span class="para_heading">YOU</span> here at Conglem
            </p>
          </center>
        </div>
        <div class="container">
          <div class="row">

            <div class="col-xs-12 col-sm-4">


              <div class=" px-auto box">
                <div>
                  <center class="pb-2">
                    <button type="button" class="btn-circle btn-outline btn-xl disabled btn-boundary"><FontAwesomeIcon style={{color:"#1524c6"}} icon={faListCheck} /></button>
                  </center>
                  <center>
                    <h4>YOU SAY, WE DO...</h4>
                  </center>
                  <p class="lea">Let us know Objectives of your Company so we can <span class="para_heading">Tailor a Digital Marketing Model to fit it</span></p>

                  <p class="lea">To make your <span class="para_heading">Vision a Reality, we focus to your Purpose and Goals </span></p>
                </div>
              </div>


            </div>

            <div class="col-xs-12 col-sm-4">
              <div class=" px-auto box">
                <div>
                  <center class="pb-2">
                    <button type="button" class="btn-circle btn-outline btn-xl disabled btn-boundary"><FontAwesomeIcon style={{color:"#1524c6"}} icon={faUsers} /></button>
                  </center>
                  <center>
                    <h4>YOU AND WHO?</h4>
                  </center>

                  <p class="lea">Tell us your <span>Story</span> so we can <span class="para_heading">Convey it out in the way that best suits you</span></p>

                  <p class="lea">Brief us about your business and its expertise so we <span class="para_heading">Connect you with your Primary Audience</span></p>

                </div>
              </div>
            </div>
            <div class="col-xs-12 col-sm-4">
              <div class="px-auto box">
                <div>
                  <center class="pb-2">
                    <button type="button" class="btn-circle btn-xl disabled btn-boundary"><FontAwesomeIcon style={{color:"#1524c6"}} icon={faArrowUpRightDots} /></button>
                  </center>
                  <center>
                    <h4>YOU AND WE GROW!</h4>
                  </center>
                  <p class="lea">Let us <span>Customize</span> a bit to match your needs and then let us do the heavy lifting.</p>

                  <p class="lea">Get catered Best Modules as we select the <span class="para_heading">optimised methods to employ in your DM strategy</span></p>
                </div>
              </div>


            </div>

          </div>
        </div>

      </div>

     </div>

      <div id='features'>
         {/* Fourth Section starts */}
      <div class="container my-5">
        <div class="row">
          <div class="col">
            <center><h2 class="display-5 title">What at <span class="para_heading">Conglem</span>?</h2></center>
          
          </div>
      </div>
      </div>
      <div class="container my-5">
        <div class="row">
          <div class="col-lg-6">
            <img class="w-100" src={image} />
          </div>
          <div class="col-lg-6">
        
            <div class="p-3 mt-4 ">
            <h5 class="lead mt-4">FEATURES</h5>
              <h2 class="display-5 mt-4 title">Content Writing </h2>
              <p class="lead mt-4">We use high-quality content that is fully compliant with SEO criteria to assure top SERP ranking blogs, thus increasing the organic traffic to your website. </p>
              <a href="#" class="btn btn-primary btn-lg mt-2">Checkout</a>
            </div>
          </div>

        </div>
      </div>

      {/*Fifth Section starts */}
      <div class="container my-5">
        <div class="row">

          <div class="col-lg-6">
            <div class="p-3 mt-4">
            <h5 class="lead mt-4">FEATURES</h5>
              <h2 class="display-5 mt-4 title">Don’t have a website for marketing?</h2>
              <p class="lead mt-4">Not to worry! Conglem provides you with a platform to post your business's curated blog online. </p>
              <a href="#" class="btn btn-primary btn-lg mt-2">Checkout</a>
            </div>
          </div>
          <div class="col-lg-6">
            <img class="w-100" src={image} />
          </div>

        </div>
      </div>
      {/*Sixth Section*/}
      <div class="container my-5">
        <div class="row">
          <div class="col-lg-6 mt-4">
            <img class="w-100" src={image2} />
          </div>
          <div class="col-lg-6">
            <div class="p-3 mt-4">
            <h5 class="lead mt-4">FEATURES</h5>
              <h2 class="display-5 mt-4 title">Always rank ahead of your competitor!</h2>
              <p class="lead mt-4">
                Conglem will make it simpler for you to consistently retain your organic position above
                your competitors by analysing and optimising your content on a regular basis.</p>
              <a href="#" class="btn btn-primary btn-lg mt-2">Checkout</a>
            </div>
          </div>


        </div>
      </div>

      {/*Seventh Section */}

      <div class="container my-5">
        <div class="row">

          <div class="col-lg-7">
            <div class="p-3 mt-4">
              <h5 class="lead mt-4">TESTIMONIAL</h5>
              <h2 class="display-5 mt-4 title">
                What People Say
              </h2>
              <Carousel variant="light">
                <Carousel.Item>
                  <div class="seventh_section_testimonial">

                    <img src={image} alt="Avatar" style={{ width: "90px" }} />
                    <p><span>Rebecca Flex</span></p>
                    <FontAwesomeIcon style={{ color: "orange" }} icon={faStar} />
                    <FontAwesomeIcon style={{ color: "orange" }} icon={faStar} />
                    <FontAwesomeIcon style={{ color: "orange" }} icon={faStar} />
                    <FontAwesomeIcon style={{ color: "orange" }} icon={faStar} />
                    <FontAwesomeIcon style={{ color: "orange" }} icon={faStar} />
                    <p>I received great customer service from the specialists who helped me. I really recommend to anyone</p>
                  </div>

                </Carousel.Item>
                <Carousel.Item>
                  <div class="seventh_section_testimonial">

                    <img src={image2} alt="Avatar" style={{ width: "90px" }} />
                    <p><span>Rebecca Flex.</span></p>
                    <FontAwesomeIcon style={{ color: "orange" }} icon={faStar} />
                    <FontAwesomeIcon style={{ color: "orange" }} icon={faStar} />
                    <FontAwesomeIcon style={{ color: "orange" }} icon={faStar} />
                    <FontAwesomeIcon style={{ color: "orange" }} icon={faStar} />
                    <p>I received great customer service from the specialists who helped me. I really recommend to anyone</p>
                  </div>


                </Carousel.Item>
                <Carousel.Item>
                  <div class="seventh_section_testimonial">

                    <img src={image3} alt="Avatar" style={{ width: "90px" }} />
                    <p><span>Rebecca x.</span></p>
                    <FontAwesomeIcon style={{ color: "orange" }} icon={faStar} />
                    <FontAwesomeIcon style={{ color: "orange" }} icon={faStar} />
                    <FontAwesomeIcon style={{ color: "orange" }} icon={faStar} />
                    <FontAwesomeIcon style={{ color: "orange" }} icon={faStar} />
                    <p>I received great customer service from the specialists who helped me. I really recommend to anyone</p>
                  </div>
                </Carousel.Item>
              </Carousel>


            </div>
          </div>
          <div class="col-lg-5">
            <img class="w-100" src={image3} />
          </div>

        </div>
      </div>
      </div>
      <div id='contact'>
        {/*Eight section start */}
      <section class="container my-5 eight_section" style={{backgroundColor:"hwb(240 25% 18%)"}}>
        <div class="row ">
          <div class="col-lg-7">
            <div class="p-3 mt-4" style={{color:"white"}}>
              <h2 class="display-1 mt-4 title">Get started with us
              </h2>
              <p class="lead mt-4" style={{color:"white"}}>

                Want to connect with us? </p>
              <p class="lead" style={{color:"white"}}>

                Drop a messager and we’ll be in your inbox</p>
            </div>
          </div>
          <div class="col-lg-5">
            <div class="p-3 mt-4">
              <Form />
            </div>
          </div>


        </div>
      </section>
      {/*nineth section start */}
      <div>


        <Foot />
      </div>

      </div>

      
    </div>
  );
}

export default App;
