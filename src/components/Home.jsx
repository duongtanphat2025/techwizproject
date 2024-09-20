import Footer from "./footer";
import "../css/Home.css";
import resultSet from "../data/data.json";
import React, { useState } from "react";
import MyNav from "./NavBar";
import UserLocationMap from "./Location";
import { Link } from 'react-router-dom';
import Ambulance from "../data/data.json";
import VN from "../hinh/mapvietnam.png"
import "../css/Search.css";
const Home = () => {
    const [state, setState] = useState(resultSet);
    const handleICUCall = () => {
        const icuVehicles = state.filter(
            (vehicle) => vehicle.type === "ICU" && vehicle.distance < 3
        );

        // If there are any ICU vehicles within 3 km
        if (icuVehicles.length > 0) {
            const nearestICU = icuVehicles[0]; // Assume the first one is the nearest
            alert(
                `Nearest ICU vehicle price: ${nearestICU.price}$, distance: ${nearestICU.distance}km`
            );
        } else {
            // If no ICU vehicle is found within 3 km
            alert(
                "No ICU vehicle available within 3 km; however, we will make every effort to find the nearest available vehicle for you."
            );
        }
    };


    // search
    const [inputValue, setInputValue] = useState("");
    const [list, setList] = useState([]);
    const [showList, setShowList] = useState(false);


    const handleInputChange = (event) => {
        const value = event.target.value;
        setInputValue(value);

        if (value) {
            const filteredList = Ambulance.filter((list) =>
                list.type.toLowerCase().includes(value.toLowerCase())
            );
            setList(filteredList);
            setShowList(true);
        } else {
            setShowList(false);
        }
    };

    return (
        <>
            <div className="container-fluid bg bg-content" style={{ padding: '0%' }}>
                <div>
                    <MyNav />
                </div>
                <div className="inline row">
                    <div >
                        <img src={VN} alt="" />
                    </div>
                    <div >
                        <div className="title">Life Link</div>   <br />
                        <div style={{ textAlign: 'center' }} className="input-container ">
                            <div >
                                <input
                                    onChange={handleInputChange}
                                    type="text"
                                    className='search '
                                    placeholder='Search your Ambulance Type'
                                    style={{ width: "90%", }}
                                />
                            </div>

                            {showList && (
                                <table className="home-input-list">
                                    {list.slice(0, 4).map((list, index) => (
                                        <Link className="home-input-list-link" to='/search' style={{ textDecoration: 'none', fontSize: '12px', color: 'black' }}>
                                            <tr key={index} >
                                                <td>{list.type}</td>
                                                <td>{list.price}$</td>
                                                <td>District {list.location}</td>
                                            </tr>
                                        </Link>
                                    ))}
                                </table>
                            )}
                        </div>
                        <div >
                            <button onClick={handleICUCall} class="codepen-button" >
                                <span>
                                    <svg style={{ marginRight: "8%", width: "30px", height: "30px" }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone-outbound-fill" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877zM11 .5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V1.707l-4.146 4.147a.5.5 0 0 1-.708-.708L14.293 1H11.5a.5.5 0 0 1-.5-.5" />
                                    </svg>
                                    EMERGENCY CALL </span>
                            </button>
                        </div>

                    </div>
                    <div align='center' style={{ padding: "0% 2% 0% 0%" }}>
                        Your Location
                        <UserLocationMap />
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6 mt-5 p-5">
                        <p id="intro">
                            Our ambulance service is committed to providing fast and safe
                            emergency medical support in any situation. With a team of
                            professional drivers and modern vehicles equipped with advanced
                            medical equipment, we are ready to meet emergency needs 24/7.
                            Whether you need transportation from home to the hospital, between
                            medical facilities, or in emergency situations on the road, our
                            service ensures peace of mind and reliability. Let us be your
                            partner in health, offering the safest and most timely medical
                            transport solutions.
                        </p>
                        <div className="sitemap">
                            <h2>SITE MAP</h2>
                            <ul>
                                <li><button><Link to='/' className='nav-link' >Home</Link></button></li>
                                <li><button><Link to='/search' className='nav-link' >Ambulance Type</Link></button></li>
                                <li><button><Link to='/gallery' className='nav-link' >Gallery</Link></button></li>
                                <li><button><Link to='/about' className='nav-link' >About Us</Link></button></li>
                                <li><button><Link to='/feedback' className='nav-link' >Feedback</Link></button></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-6 mt-5">
                        <table className="table table-hover table-striped" style={{ textAlign: "center" }}>
                            <thead className="table-dark">
                                <tr>
                                    <th>Type</th>
                                    <th>Price</th>
                                    <th>Location</th>
                                </tr>
                            </thead>
                            <tbody>
                                {state.map((rs) => (
                                    <tr>
                                        <td>{rs.type}</td>
                                        <td>{rs.price}$</td>
                                        <td>District {rs.location}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </>
    );
};

export default Home;
