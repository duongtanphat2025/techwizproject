import { Link, useNavigate } from 'react-router-dom';
import React from 'react'
import '../css/Footer.css'
import LGSC from '../img/LGSC.png'
const Footer = () => {
    // Hàm xác nhận cuộc gọi
    const confirmCall = (phoneNumber) => {
        const confirmMessage = `Bạn có muốn thực hiện cuộc gọi đến số +${phoneNumber} không?`;
        if (window.confirm(confirmMessage)) {
            // Nếu người dùng chọn OK, mở liên kết "tel:"
            window.location.href = `tel:${phoneNumber}`;
        }
    }
    return (
        <footer className="footer" >
            <div className="footer-container" >              
                    <div className="footer-logo">                       
                            <img src={LGSC} />                        
                    </div>                                  
                <div className="footer-about">
                    <h2>About Us</h2>
                    <p>
                        The LIFE LINK website specializes in providing ambulance calling
                        or rental services.
                    </p>
                    <Link to="/about">Learn more about us</Link>
                </div>

                <div className="footer-contact">
                    <h2>Contact Us</h2>
                    <p>
                        Address:
                        <a target='_blank' style={{ color: 'white', fontSize: '15px', backgroundColor: '#333333', textDecoration: 'none' }} href="https://maps.app.goo.gl/Q92fqDgkNctnpAJg8"> 391a Nam Ky Khoi Nghia Street,
                            Vo Thi Sau, District 3, Ho Chi Minh city, VIETNAM</a>
                    </p>
                    <p>
                        Phone: <a href="" onClick={() => confirmCall(842838803888)}>(028).3880.3888</a>
                    </p>
                    <p>
                        Email: <a href="mailto:tuvan@aptechsaigon.edu.vn">tuvan@aptechsaigon.edu.vn</a>
                    </p>
                </div>
            </div>

            <hr />
            <div className="footer-copyright">
                &copy; 2024 LifeLink. All rights reserved by SIGMA.
            </div>
        </footer>
    );
}

export default Footer;