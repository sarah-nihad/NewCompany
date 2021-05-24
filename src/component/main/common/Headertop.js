import React from "react";
import { Link} from "react-router-dom";
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import PinterestIcon from '@material-ui/icons/Pinterest';
const Headertop = () => {
  return (
    <>
      <div className="header-top-area  text-center sec-p-30">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="tractor-lang float-left">
                <select name="select" id="lang-typ" className="tractor-lang">
                  <option>english</option>
                  <option>عربي</option>
                 </select>
              </div>

              <ul className="header-top-social">
                <li>
                  <Link to="#">
                    <FacebookIcon />
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <InstagramIcon />
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <TwitterIcon />
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <LinkedInIcon />
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <YouTubeIcon />
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <PinterestIcon />
                  </Link>
                </li>
              </ul>
              {/* <div className="quote-btn float-right ">
                <Link to="#" className="btn btn-type-4">
                Order now
                </Link>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Headertop;
