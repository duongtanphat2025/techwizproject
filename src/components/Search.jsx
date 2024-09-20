import React, { useState } from "react";
import Ambulance from "../data/data.json";
import MyNav from "./NavBar";
import "../css/Home.css";
import "../css/Search.css";
import Footer from "./footer";
import Dropdown from "react-bootstrap/Dropdown";

import myIcon from "../hinh/icon.png";

import HospitalTable from "./Select";

import h1 from "../hinh/img222.jpg";
import h2 from "../hinh/img2.png";
import h3 from "../hinh/img3.png";
import h4 from "../hinh/img4.png";
import h5 from "../hinh/img555.png";
import h6 from "../hinh/img444.png";
import h7 from "../hinh/img77.png";
import h8 from "../hinh/img8.png";
import h9 from "../hinh/img9.png";
import h10 from "../hinh/img333.png";

const Search = ({ data = Ambulance }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [mainSortBy, setMainSortBy] = useState("type");
  const [secondarySortBy, setSecondarySort] = useState("asc");
  const [showHospitalData, setShowHospitalData] = useState(false);
  const handleImageZoom = (event, imgSrc) => {
    const zoomImage = document.getElementById("zoom-image");
    zoomImage.style.display = "block";
    zoomImage.src = imgSrc;

    const imageContainer = event.target.parentElement;
    const imageWidth = imageContainer.offsetWidth;
    const imageHeight = imageContainer.offsetHeight;

    // Calculate zoom lens dimensions and position
    const lensWidth = imageWidth / 100; // Adjust lens size as needed
    const lensHeight = imageHeight / 100;
    const lensX = event.offsetX - lensWidth / 50;
    const lensY = event.offsetY - lensHeight / 50;

    zoomImage.style.width = imageWidth * 30; // Adjust zoom image size as needed
    zoomImage.style.height = imageHeight * 30;

    document.getElementById("zoom-lens").style.width = lensWidth + "px";
    document.getElementById("zoom-lens").style.height = lensHeight + "px";
    document.getElementById("zoom-lens").style.left = lensX + "px";
    document.getElementById("zoom-lens").style.top = lensY + "px";
  };

  const handleImageUnzoom = () => {
    const zoomImage = document.getElementById("zoom-image");
    zoomImage.style.display = "none";
  };

  const filteredData = data.filter((service) => {
    const searchTextLower = searchTerm.toLowerCase();
    return (
      service.type.toLowerCase().includes(searchTextLower) ||
      service.price.toString().includes(searchTextLower) ||
      service.distance.toLowerCase().includes(searchTextLower) ||
      service.location.toLowerCase().includes(searchTextLower) ||
      service.size.toLowerCase().includes(searchTextLower)
    );
  });

  const imagesData = [
    {
      src: h1,
      id: "1",
      type: "ICU",
      price: "1000",
      location: "1",
      distance: "9",
      alt: "ICU Service",
      size: "large",
    },
    {
      src: h2,
      id: "2",
      type: "ICU",
      price: "900",
      location: "2",
      distance: "4",
      alt: "ICU Service",
      size: "large",
    },
    {
      src: h3,
      id: "3",
      type: "ICCU",
      price: "800",
      location: "1",
      distance: "2",
      alt: "ICCU Service",
      size: "Medium",
    },
    {
      src: h4,
      id: "4",
      type: "ICCU",
      price: "900",
      location: "4",
      distance: "9",
      alt: "ICCU Service",
      size: "Medium",
    },
    {
      src: h5,
      id: "5",
      type: "A/C",
      price: "700",
      location: "5",
      distance: "3",
      alt: "A/C Service",
      size: "Medium",
    },
    {
      src: h6,
      id: "6",
      type: "A/C",
      price: "600",
      location: "3",
      distance: "8",
      alt: "A/C Service",
      size: "Medium",
    },
    {
      src: h7,
      id: "7",
      type: "Normal",
      price: "500",
      location: "3",
      distance: "4",
      alt: "Normal Service",
      size: "Large",
    },
    {
      src: h8,
      id: "8",
      type: "Normal",
      price: "600",
      location: "4",
      distance: "7",
      alt: "Normal Service",
      size: "Large",
    },
    {
      src: h9,
      id: "9",
      type: "Non A/C",
      price: "500",
      location: "3",
      distance: "5",
      alt: "Non A/C Service",
      size: "Large",
    },
    {
      src: h10,
      id: "10",
      type: "Non A/C",
      price: "400",
      location: "5",
      distance: "6",
      alt: "Non A/C Service",
      size: "Large",
    },
  ];

  const sortedData = filteredData.sort((a, b) => {
    // Primary sorting based on mainSortBy
    const primarySortResult =
      mainSortBy === "type"
        ? a.type.localeCompare(b.type)
        : mainSortBy === "price"
        ? a.price - b.price
        : mainSortBy === "location"
        ? a.location.localeCompare(b.location)
        : mainSortBy === "size"
        ? a.size.localeCompare(b.size)
        : mainSortBy === "distance"
        ? a.distance.localeCompare(b.distance)
        : 0;
    // Apply secondary sorting if applicable (considering main sort first)
    const secondarySortResult =
      secondarySortBy === "asc" ? primarySortResult : -primarySortResult;

    return secondarySortResult;
  });

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSortChange = (newSortBy) => {
    setMainSortBy(newSortBy);
  };

  return (
    <>
      <div className="bg bg-content">
        <MyNav />
        <div align="center">
          <div align="center" className="style">
            <h1 className="title"> Ambulance Type </h1>
          </div>
          <div style={{ marginLeft: "45px" }} align="left">
            <input
              type="text"
              value={searchTerm}
              placeholder="Search Service..."
              onChange={handleSearch}
              className="search"
            />
          </div>
          <br />
        </div>
        <div
          className="option"
          style={{
            marginLeft: "45px",
            width: "fit-content",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Dropdown>
            <Dropdown.Toggle variant="primary" id="sortDropdown">
              Sort by {mainSortBy} <span className="caret"></span>
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item onClick={() => handleSortChange("type")}>
                Sort by Type
              </Dropdown.Item>
              <Dropdown.Item onClick={() => handleSortChange("price")}>
                Sort by Price
              </Dropdown.Item>
              <Dropdown.Item onClick={() => handleSortChange("location")}>
                Sort by Location
              </Dropdown.Item>

              <Dropdown.Item onClick={() => handleSortChange("size")}>
                Sort by Size
              </Dropdown.Item>

              <Dropdown.Item onClick={() => handleSortChange("distance")}>
                Sort by Distance
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <button
            className="btn btn-warning"
            style={{ marginLeft: "10px" }}
            onClick={() => alert("You Have Booked The Ambulance")}
            type="button"
          >
            Click To Book
          </button>
        </div>
        <br />
        <div>
          <div className="listView">
            <table className="table-list">
              <tr>
                <th>Type</th>
                <th>Price</th>
                <th>Location</th>
                <th>Size</th>
                <th>Images</th>
                <th>Call</th>
              </tr>
              {sortedData.map((service, index) => (
                <tr key={index}>
                  <td>{service.type}</td>
                  <td>{`${service.price}$`}</td>
                  <td>District {service.location}</td>
                  <td>{service.size}</td>
                  <td key={index}>
                    {imagesData
                      .filter((image) => image.id === service.id)
                      .map((image) => (
                        <>
                          <img
                            className="img"
                            key={image.id}
                            src={image.src}
                            alt={image.alt}
                            onMouseEnter={(e) => handleImageZoom(e, image.src)}
                            onMouseLeave={handleImageUnzoom}
                          />
                        </>
                      ))}
                  </td>

                  <td style={{ width: "300px" }}>
                    <button
                      onClick={() => setShowHospitalData(true)}
                      className="btn btn-call"
                    >
                      <img className="btn-call" src={myIcon} alt="Call Icon" />
                    </button>
                  </td>

                  <div id="zoom-lens" style={{ display: "none" }}></div>
                </tr>
              ))}
            </table>
            <div style={{ display: showHospitalData ? "table-cell" : "none" }}>
              <HospitalTable />
            </div>
            <div className="zoom-box">
              {/* Zoom image element (hidden initially)*/}
              <img
                id="zoom-image"
                style={{ display: "none" }}
                alt="Zoomed Image"
              />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Search;
