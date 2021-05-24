
import React, { Component } from 'react';
import Headertop from '../common/Headertop';
import Headermidel from '../common/Headermidel';
import Navmenu from '../common/Navmenu';
import Footer from '../common/Footer';
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import Background from "../../../assets/img/doc.png";
import laptop3 from "../../../assets/img/laptop3.png";
import shopping from "../../../assets/img/shopping.png";
import { Link } from "react-router-dom";
// import { Carousel ,RadioGroup ,Radio,Divider } from 'rsuite';
var rotated = false;
var rotated2 = false;

class Projects extends Component {
  state = {
    open: true,
  }

  

  add(e) {

  var x = document.getElementById('tpbgimg'),
  angle = rotated ? 0 : 180;
x.style.transform = 'rotate(' + angle + 'deg)';
x.style.backfaceVisibility ='hidden';
x.style.transformStyle='preserve-3d';
x.style.transformOrigin='50% 160%';
x.style.transition='1s .2s cubic-bezier(.88,.17,0,.99)';
x.style.willChange='transform';
x.style.position= 'absolute';
// x.style.top= '50%';
x.style.left= 'auto';
rotated = !rotated;

var y = document.getElementById('title_main_slide'),
angle = rotated2 ? 0 : 180;
y.style.transform = 'rotate(' + angle + 'deg)';
y.style.backfaceVisibility ='hidden';
y.style.transformStyle='preserve-3d';
y.style.transformOrigin='50% 70%';
y.style.transition='1s .2s cubic-bezier(.88,.17,0,.99)';
y.style.willChange='transform';
y.style.position= 'absolute';
y.style.zIndex= '50';
y.style.left= 'auto';
rotated2 = !rotated2;

    
const mediaMatch = window.matchMedia('(max-width: 414)');
x.style.transformOrigin='50% 163%';
  }

  render() {
    const options = {
        loop: true,
        autoplay: false,
        animateOut: "slideOutDown",
        animateIn: "flipInX",
        dots: false,
        nav: true,
        navText: [
          "<i class='fa fa-angle-left'></i>",
          "<i class='fa fa-angle-right'></i>",
        ],
        responsive: {
          0: {
            items: 1,
          },
          600: {
            items: 1,
          },
          1000: {
            items: 1,
          },
        },
      };
    return (

      <div >
    
        <div   >
       
          <div id='tpbgimg'   >
            <svg  id='svg' viewBox="0 0 1440 181" xmlns='http://www.w3.org/2000/svg' preserveAspectRatio="none" style={{ height: 200, width: "100%" ,zIndex:'10'}} className='css-1d3w5wq' >
              <linearGradient id='SVGID_1_' gradientUnits='userSpaceOnUse' x1='1543.491' y1='1474.8508' x2='2952.8528' y2='659.8721' >
                <stop offset='0' style={{ stopColor: '#131217' }} />
                <stop offset='1' style={{ stopColor: '#292A33' }} />
              </linearGradient>

              <path className='st0' style={{ fill: "#13516d", stroke: "#13516d", strokeWidth: 1, fillRule: 'nonzero' }} d="M0 96l60-10.7C120 75 240 53 360 74.7 480 96 600 160 720 176s240-16 360-42.7c120-26.3 240-48.3 300-58.6l60-10.7V0H0v96z"   >
              </path>

            </svg>
            <div id='title_main_slide'  >CS CODE</div>
          </div>
          {/* <Carousel   wrap={false}  onSlide={(e) => {
            console.log(e);
            this.add(e)
          }} >
            
          </Carousel> */}

<div className="slider-area">
        <div className="tractor-main-slider">
          <OwlCarousel className="owl-carousel owl-theme" {...options}  onChanged={(e) => {
            console.log(e);
            this.add(e)
          }}   >
            <div className="tractor-single-slider  ">
            
            {/* <div style={{backgroundImage:`url(require("../../img/h-main-parallax-2.jpg"))`}} id='img2' /> */}
              <div className="tractor-single-table">
                <div className="tractor-single-tablecell">
                  <div className="container">
                    <div id='main_row_slide' >
                      <div id='first_col_slide'>
                        
                        <div id='font_slide'>
                          {/* tr<span>a</span>ct<span>o</span>ur <br /> */}
                          choice for industry
                        </div>
                        <p>
                          lorem ipsum dolor sit amt, consectet adop adipisicing
                          elit, sed do eiusmod
                          <br />
                          teporara incididunt ugt labore.
                        </p>
                        {/* <Link href="#" className="btn btn-type-1">
                          our services
                        </Link> */}
                        <Link href="#" className="btn btn-type-2">
                          purchase now
                        </Link>
               
                      </div>
                      <div id='main_bg_img'  >
              <img src={laptop3} id='img2'/>
              </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="tractor-single-slider  ">
            {/* <img src={brand1} alt="logo"  className="img-fluid4" /> */}
         
              <div className="tractor-single-table">
                <div className="tractor-single-tablecell">
                  <div className="container">
                  <div id='main_row_slide' >
                      <div id='first_col_slide'>
                        <div id='font_slide'>
                          {/* tr<span>a</span>ct<span>o</span>ur <br /> */}
                          choice for industry
                        </div>
                        <p>
                          lorem ipsum dolor sit amt, consectet adop adipisicing
                          elit, sed do eiusmod
                          <br />
                          teporara incididunt ugt labore.
                        </p>
                    
                        <Link href="#" className="btn btn-type-2">
                          purchase now
                        </Link>
                      </div>
                      <div id='main_bg_img'  >
              <img src={shopping} id='img2' alt="logo"  />
              </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          
            <div className="tractor-single-slider  ">
            {/* <img src={brand1} alt="logo"  className="img-fluid4" /> */}
        
              <div className="tractor-single-table">
                <div className="tractor-single-tablecell">
                  <div className="container">
                  <div id='main_row_slide' >
                      <div id='first_col_slide'>
                        <div id='font_slide'>
                          {/* tr<span>a</span>ct<span>o</span>ur <br /> */}
                          choice for industry
                        </div>
                        <p>
                          lorem ipsum dolor sit amt, consectet adop adipisicing
                          elit, sed do eiusmod
                          <br />
                          teporara incididunt ugt labore.
                        </p>
                      
                        <Link href="#" className="btn btn-type-2">
                          purchase now
                        </Link>
                      </div>
                      <div id='main_bg_img'  >
              <img src={Background} id='img2' alt="logo"  />
              </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </OwlCarousel>
        </div>
      </div>



        </div>



      </div>
    );
  }
}
export default Projects;



