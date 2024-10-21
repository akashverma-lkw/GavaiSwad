import React from 'react'
import './Footer.css';
import { FaPiggyBank } from "react-icons/fa6";
import { FaShippingFast } from "react-icons/fa";
import { MdHeadphones } from "react-icons/md";
import { TbRibbonHealth } from "react-icons/tb";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaWallet } from "react-icons/fa6";


const Footer = () => {
  return (
    <>
      <div className="footer">
          <div className="container">
              <div className="left-box">
                  <div className="box">
                      <div className="icon_box">
                      <TbRibbonHealth />
                      </div>
                      <div className="detail">
                          <h3>100% Organic</h3>
                      </div>
                  </div>
                  
                  <div className="box">
                      <div className="icon_box">
                      <FaShippingFast />
                      </div>
                      <div className="detail">
                          <h3>free delivey</h3>
                      </div>
                  </div>
                  <div className="box">
                      <div className="icon_box">
                      <MdHeadphones />
                      </div>
                      <div className="detail">
                          <h3>24x7 support</h3>
                      </div>
                  </div>
                  <div className="box">
                      <div className="icon_box">
                      <FaWallet />
                      </div>
                      <div className="detail">
                          <h3>Save Money</h3>
                      </div>
                  </div>
              </div>
              <div className="right_box">
                  <div className="header">
                  <img src='images/logo2.png' alt="" />
                      <p>Organic products use natural ingredients without synthetic chemicals or GMOs, emphasizing sustainability and health.</p>
                  </div>
                  <div className="bottom">
                      <div className="box">
                          <h3>Your Account</h3>
                          <ul>
                              <li>About us</li>
                              <li>Account</li>
                              <li>Payment</li>
                              <li>Sales</li>
                          </ul>
                      </div>
                      <div className="box">
                          <h3>products</h3>
                          <ul>
                              <li>delivery</li>
                              <li>track order</li>
                              <li>new product</li>
                              <li>old product</li>
                          </ul>
                      </div>
                      <div className="box">
                          <h3>contact us</h3>
                          <ul>
                              <li>522, Near New Stadium, Delhi</li>
                              <li>+91 00000 00000</li>
                              <li>demo@gmail.com</li>
                          </ul>
                      </div>
                      <div className="box">
                          <h3>Follow us</h3>
                          <ul>
                              <li><FaFacebookF /></li>
                              <li><FaInstagram /></li>
                              <li><FaYoutube /></li>
                              <li><FaXTwitter /></li>
                          </ul>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </>
  )
}

export default Footer;
