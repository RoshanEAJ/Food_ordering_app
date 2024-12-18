import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>Quis ullamco in consequat deserunt magna tempor amet aliqua occaecat culpa nulla reprehenderit sit. Proident adipisicing sit ipsum aliqua incididunt ullamco magna eu nulla eu magna. Labore aliquip pariatur pariatur aute mollit minim. Laborum id adipisicing elit incididunt reprehenderit fugiat nisi minim. Ut anim occaecat ex pariatur duis est tempor commodo fugiat ea velit esse Lorem.</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.x_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>+94768778577</li>
                        <li>contact@cinnamon.com</li>
                    </ul>
            </div>
        </div>
        <hr />
        <p className="footer-copyright">
            Copyright 2024 © Cinnamon.com - All Right Reserved.
        </p>
    </div>
  )
}

export default Footer