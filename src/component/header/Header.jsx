import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { FaTwitter, FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FiX, FiMenu } from "react-icons/fi";

const SocialShare = [
    // {Social: <FaFacebookF /> , link: 'https://www.facebook.com/'},
    // {Social: <FaLinkedinIn /> , link: 'https://www.linkedin.com/'},
    // {Social: <FaInstagram /> , link: 'https://www.instagram.com/'},
    // {Social: <FaTwitter /> , link: 'https://twitter.com/'},
]

class Header extends Component {
    constructor(props) {
        super(props);
        this.menuTrigger = this.menuTrigger.bind(this);
        this.CLoseMenuTrigger = this.CLoseMenuTrigger.bind(this);
        //  this.subMetuTrigger = this.subMetuTrigger.bind(this);
        window.addEventListener('load', function () {
            console.log('All assets are loaded')
        })
    }
    menuTrigger() {
        document.querySelector('.header-wrapper').classList.toggle('menu-open')
    }

    CLoseMenuTrigger() {
        document.querySelector('.header-wrapper').classList.remove('menu-open')
    }

    render() {
        var elements = document.querySelectorAll('.has-droupdown > a');
        for (var i in elements) {
            if (elements.hasOwnProperty(i)) {
                elements[i].onclick = function () {
                    this.parentElement.querySelector('.submenu').classList.toggle("active");
                    this.classList.toggle("open");
                }
            }
        }
        const { color = 'default-color' } = this.props;
        let logoUrl = <img src="/assets/images/logo/logo-symbol-dark.png" alt="Digital Agency" />;

        return (
            <header className={`header-area header-style-two header--transparent ${color}`}>
                <div className="header-wrapper">
                    <div className="header-left d-flex align-items-center">
                        <div className="logo">
                            <a href="/">
                                {logoUrl}
                            </a>
                        </div>
                        <nav className="mainmenunav d-lg-block ml--50">
                            <ul className="mainmenu">
                                <li className="has-droupdown"><Link to="/">Home</Link>
                                </li>
                                <li className="has-droupdown"><Link to="/service" >Student Life</Link>
                                    <ul className="submenu">
                                        <li><Link to="/math">Math</Link></li>
                                        <li><Link to="/reading">Reading</Link></li>
                                        <li><Link to="/writing">Writing</Link></li>
                                    </ul>
                                </li>
                                <li className="has-droupdown"><Link to="/service" >Activities</Link>
                                    <ul className="submenu">
                                        <li><Link to="/portfolio">Chess</Link></li>
                                        <li><Link to="/portfolio">Teniss</Link></li>
                                        <li><Link to="/portfolio">Coding & Robotics</Link></li>
                                    </ul>
                                </li>
                                <li className="has-droupdown"><Link to="#pages" >Blogs</Link>
                                    <ul className="submenu">
                                        <li><Link to="/blog">Blogs</Link></li>
                                        <li><Link to="/blog">Outings</Link></li>
                                    </ul>
                                </li>
                                {/* <li><Link to="/about" >About</Link></li> */}
                                {/* <li className="has-droupdown"><Link to="#pages" >Blogs</Link>
                                    <ul className="submenu">
                                        <li><Link to="/blog">Blog List</Link></li>
                                        <li><Link to="/blog-details">Blog Details</Link></li>
                                        <li><Link to="/service">Service</Link></li>
                                        <li><Link to="/service-details">Service Details</Link></li>
                                        <li><Link to="/portfolio">Portfolio</Link></li>
                                        <li><Link to="/portfolio-details">Portfolio Details</Link></li>
                                        <li><Link to="/404">404</Link></li>
                                    </ul>
                                </li>
                                <li className="has-droupdown"><Link to="#" >Blocks</Link>
                                    <ul className="submenu">
                                        <li><Link to="/portfolio">Portfolio</Link></li>
                                        <li><Link to="/team">Team</Link></li>
                                        <li><Link to="/service">Service</Link></li>
                                        <li><Link to="/video-popup">Video Popup</Link></li>
                                        <li><Link to="/progressbar">Progressbar</Link></li>
                                        <li><Link to="/gallery">Gallery</Link></li>
                                        <li><Link to="/counters">Counters</Link></li>
                                        <li><Link to="/blog">Blog List</Link></li>
                                        <li><Link to="/clint-logo">Clint Logo</Link></li>
                                        <li><Link to="/contact-form">Contact Form</Link></li>
                                        <li><Link to="/google-map">Google Map</Link></li>
                                        <li><Link to="/columns">Columns</Link></li>
                                        <li><Link to="/pricing-table">Pricing Table</Link></li>
                                    </ul>
                                </li> */}
                                {/* <li><Link to="/contact" >Contact</Link></li> */}
                            </ul>
                        </nav>
                    </div>
                    <div className="header-right">
                        <div className="social-share-inner d-none d-sm-block">
                            <ul className="social-share social-style--2 color-black d-flex justify-content-start liststyle">
                                {SocialShare.map((val, i) => (
                                    <li key={i}><a href={`${val.link}`}>{val.Social}</a></li>
                                ))}
                            </ul>
                        </div>
                        {/* <div className="header-btn">
                            <a className="btn-default btn-border btn-opacity" target="_blank" href="https://themeforest.net/checkout/from_item/31405042?license=regular">
                                <span>buy now</span>
                            </a>
                        </div> */}
                        {/* Start Humberger Menu  */}
                        <div className="humberger-menu d-block d-lg-none pl--20">
                            <span onClick={this.menuTrigger} className="menutrigger text-white"><FiMenu /></span>
                        </div>
                        {/* End Humberger Menu  */}
                        <div className="close-menu d-block d-lg-none">
                            <span onClick={this.CLoseMenuTrigger} className="closeTrigger"><FiX /></span>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}
export default Header;