import React from 'react';
import header from "./header.css";

const Header=function(){
    return(
        <div className="header-container">
            <div className="header-main">
                <div className="header-logobar">
                        <div class="menu-icon">&#9776;</div>
                        <img className="mobile-logo" src="responsive_logo.png"/>

                        <div className="logo-containar">
                            <img className='header-logo' src="header_logo.png"/>
                        </div>
                </div>        
                
                <div className="header-pages">
                    <a className="active"href="#">Catalog</a>
                    <a className="active1"href="#">How it works </a>
                    <a className="active2"href="#">Pricing</a>
                    <a className="active3"href="#">Blog</a>
                    <a className="active4"href="#">Services</a>
                    <a className="active5"href="#">Use-cases</a>
                    <a className="active6"href="#">Need help?</a>
                </div>
                <div className='header-items'>
                    <button className='header-button'>Log in</button>
                    <button className='header-button1'>Sign up</button>
                </div>

            </div>

        </div>
        
    )
}
export default Header;