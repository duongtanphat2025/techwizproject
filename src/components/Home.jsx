import Footer from "./footer";
import "../css/Home.css";
import resultSet from "../data/data.json";
import React, { useState } from "react";
import MyNav from "./NavBar";
import UserLocationMap from "./Location";
import { Link } from 'react-router-dom';
import Ambulance from "../data/data.json";
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
                <div className="inline">
                    <div>
                        <div>
                            <h1 className="text-center title-home">Life Link</h1>
                        </div>
                        <div style={{ textAlign: 'center' }} className="input-container">
                            <input 
                                onChange={handleInputChange}
                                type="text"
                                className='home-search'
                                placeholder='search your Ambulance Type' 
                            />
                            {showList && (
                                <table className="home-input-list">
                                    {list.slice(0,4).map((list, index) => (
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
                    </div>
                        
                    <div className="buttoncall text-center">

                        <button onClick={handleICUCall} style={{ background: "none", border: "none" }}>
                            <div id="danger"></div>
                        </button>

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
