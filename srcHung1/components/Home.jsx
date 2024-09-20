import Footer from "./footer";
import "../css/Home.css"
import resultSet from "../data/data.json"
import React, { useState } from 'react';
import MyNav from "./NavBar";
import Location from './Location'
import call from '../hinh/1.3.jpg'
const Home = () => {
    const [state, setState] = useState(resultSet);
    /*
     * It filters the list of vehicles by ICU type and distance less than 3 km.
     * If any vehicle is found, it alerts the user with the price and distance of the nearest one.
     * If no vehicle is found, it alerts the user with a message.
     */
    const handleICUCall = () => {
        const icuVehicles = state.filter(vehicle => vehicle.type === "ICU" && vehicle.distance <= 3);

        // If there are any ICU vehicles within 3 km
        if (icuVehicles.length > 0) {
            const nearestICU = icuVehicles[0]; // Assume the first one is the nearest
            alert(`Nearest ICU vehicle price: ${nearestICU.price}$, distance: ${nearestICU.distance}km`);
        } else {
            // If no ICU vehicle is found within 3 km
            alert("No ICU vehicle available within 3 km; however, we will make every effort to find the nearest available vehicle for you.")
        }
    };

    return (
        <>
            <div>
                <MyNav />
            </div>
            <div className="bg bg-content">

                <div align='center'>
                <br />
                <h2 align='center' style={{ fontSize: "80px" }}>Life Link</h2>
                    
                </div>

                <table>
                    <tr>
                        <td className="ec">
                            <div className="inline" >
                                <div className="location">
                                    <Location />
                                </div>
                                <div className="buttoncall">
                                    <button id="danger" onClick={handleICUCall} style={{background:"none"}}><img src={call} alt="" /></button>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p id="intro">
                                Our ambulance service is committed to providing fast and safe emergency medical support in any situation. With a team of professional drivers and modern vehicles equipped with advanced medical equipment, we are ready to meet emergency needs 24/7. Whether you need transportation from home to the hospital, between medical facilities, or in emergency situations on the road, our service ensures peace of mind and reliability. Let us be your partner in health, offering the safest and most timely medical transport solutions.
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <table className="table-home">
                                <tr className="table-list-header">
                                    <th>Type</th>
                                    <th>Price</th>
                                    <th>Location</th>
                                </tr>
                                {state.map((rs) => (
                                    <tr className="table-list">
                                        <td>{rs.type}</td>
                                        <td>{rs.price}$</td>
                                        <td>Distric {rs.location}</td>
                                    </tr>
                                ))}
                            </table>
                        </td>
                    </tr>
                </table>
            </div>
            <div>
                <Footer />
            </div>
        </>
    );
}

export default Home;