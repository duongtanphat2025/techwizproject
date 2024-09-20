import React from "react";
import "../css/backgroundstyle.css";
import Footer from "./footer.jsx";
import Slide from "../components/Carousel.jsx"
import h1 from '../img1/ac.png';
import h2 from '../img1/ac1.png';
import h3 from '../img1/ac2.png';
import h4 from '../img1/icu.png';
import h5 from '../img1/icu1.png';
import h6 from '../img1/icu2.png';
import h7 from '../img1/nomal.png';
import h8 from '../img1/nomal1.png';
import h9 from '../img1/nomal2.png';
import h10 from '../img1/nonac.png';
import h11 from '../img1/nonac1.png';
import h12 from '../img1/nonac2.png';
import MyNav from "./NavBar";
import '../css/Gallery.css';
import newsearch from '../img1/newsearch.jpg'
const Gallery = () => {
    return (
        <>
            <div>
                <MyNav />
            </div>
            <div className="bg" align="center">
                <div >
                    <Slide />
                </div>
                <h1 align='center'>Our Services</h1>
                <table id="picture" style={{ textAlign: 'center' }}>
                    <tr>
                        <td><img src={h1} className="imgvan" /></td>
                        <td><img src={h2} className="imgvan" /></td>
                        <td><img src={h3} className="imgvan" /></td>
                    </tr>
                    <tr>
                        <td><img src={h4} className="imgvan" /></td>
                        <td><img src={h5} className="imgvan" /></td>
                        <td><img src={h6} className="imgvan" /></td>
                    </tr>
                    <tr>
                        <td><img src={h7} className="imgvan" /></td>
                        <td><img src={h8} className="imgvan" /></td>
                        <td><img src={h9} className="imgvan" /></td>
                    </tr>
                    <tr>
                        <td><img src={h10} className="imgvan" /></td>
                        <td><img src={h11} className="imgvan" /></td>
                        <td><img src={h12} className="imgvan" /></td>
                    </tr>
                </table>
            </div>
            <div>
                <div class="box-hover">
                    <img src={newsearch} alt="atention" width={400} />
                    <div href={h2} class="nut1" target="_top">
                        Images are taken from sources on the internet.
                    </div>
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </>
    );
}

export default Gallery;