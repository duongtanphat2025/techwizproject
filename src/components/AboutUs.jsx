import MyNav from "./NavBar";
import Footer from '../components/footer'
import '../css/about.css'
import teamSigma from '../img/teamSigma.png'
const About = () => {
    return (
        <>
            <div>
                <MyNav />
            </div>
            <div className="bg">
                <div>
                <br />
                <h2 align='center' style={{ fontSize: "80px" }}> About Us</h2>
                    
                </div>
                <table>

                    <tr >
                        <td >
                            <h4>Vision</h4>
                            <p className="aboutus">Our vision is to become the leading platform in providing fast and convenient ambulance booking services. By connecting hospitals, medical centers, and modern emergency vehicles, we are committed to enhancing access to emergency medical services, ensuring that everyone can receive prompt and effective support in critical situations.</p>
                            <h4>Mission</h4>
                            <p className="aboutus">Our mission is to deliver safety and reliability by offering quick, professional, and 24/7 available ambulance booking services. We are dedicated to meeting the emergency needs of the community, ensuring that every emergency call is responded to promptly, and transporting patients to care facilities safely and efficiently. With a team of professionally trained drivers and state-of-the-art emergency vehicles, we stand by your health and safety.</p>
                            <h4>Core Values</h4>
                            <ul>
                                <li>Speed: Quick response, 24/7 ambulance booking service.</li>
                                <li>Reliability: Ensuring safety, quality, and professionalism in every trip.</li>
                                <li>Community Care: Prioritizing the health and safety of patients.</li>
                                <li>Modern Technology: Utilizing technology to optimize the booking and coordination process for emergency vehicles.</li>
                            </ul>
                        </td>
                        <td >
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d244.95423926373664!2d106.6819972919525!3d10.790787359214184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f6a752ab57b%3A0x2200ce7d4f57d1f5!2sFPT%20APTECH!5e0!3m2!1sen!2s!4v1726633107172!5m2!1sen!2s" style={{ width: '100%', height: '400px' }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" />
                        </td>
                    </tr>
                    <br /><br />
                    <tr>
                        <td>
                            <h2>Team: SIGMA</h2>
                            <p className="member">
                                Mr. Duong Tan Phat <br />
                                Mr. Phu Vinh Huy <br />
                                Mr. Do Thanh Hung <br />
                                Ms. Dang Le Phuong Van <br />
                                Mr. Le Quoc Dat <br />
                                Mr. Nguyen Minh Nhan
                            </p>
                        </td>
                        <td id="team">
                            <div>
                                <img src={teamSigma} style={{ width: '600px', height: '500px' }} />
                            </div>
                        </td>
                    </tr>
                    <br />
                </table>
            </div>
            <div>
                <Footer />
            </div>
        </>
    );
}

export default About;