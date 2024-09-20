import { useState } from "react";
import Ambulance from "../data/data.json"
import MyNav from "./NavBar";
import '../css/Home.css'
import '../css/Search.css'
import Footer from "./footer";
import Dropdown from "react-bootstrap/Dropdown";
/**
 *  - The data to be filtered and sorted. The data should
 *   be an array of objects with the following properties:
 *   - type (string): The type of the service
 *   - price (number): The price of the service
 *   - distance (string): The distance of the service
 *  The rendered list of services
 */
const Search = ({ data = Ambulance }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [mainSortBy, setMainSortBy] = useState("type");
  const [secondarySortBy, setSecondarySort] = useState("asc");

  /**
   * Filter the data based on the user's input.
   */
  const filteredData = data.filter((service) => {
    const searchTextLower = searchTerm.toLowerCase();
    return (
      service.type.toLowerCase().includes(searchTextLower) ||
      service.price.toString().includes(searchTextLower) ||
      service.distance.toLowerCase().includes(searchTextLower) ||
      service.location.toLowerCase().includes(searchTextLower)
    );
  });

  /**
   * Sort the filtered data based on the user's input.
   */
  const sortedData = filteredData.sort((a, b) => {
    // Primary sorting based on mainSortBy
    const primarySortResult =
      mainSortBy === "type"
        ? a.type.localeCompare(b.type)
        : mainSortBy === "price"
          ? a.price - b.price
          : mainSortBy === "location"
            ? a.location.localeCompare(b.location)
            : mainSortBy === "distance"
              ? a.distance.localeCompare(b.distance)
              : 0;
    // Apply secondary sorting if applicable (considering main sort first)
    const secondarySortResult =
      secondarySortBy === "asc" ? primarySortResult : -primarySortResult;

    return secondarySortResult;
  });

  /**
   * Handle the user's input in the search box.
   */
  /* const handleSearch = (event) => { */
  /*   setSearchTerm(event.target.value); */
  /* }; */
  const handleSortChange = (newSortBy) => {
    setMainSortBy(newSortBy);
  };
  /**
   * Handle the user's input in the sorting dropdown.
   */
  /* const handleSort = (event) => { */
  /*   setSortBy(event.target.value); */
  /* }; */
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };
  return (
    <>
      <div className="bg bg-content">
        < MyNav />
        <div align='center'>
          <div align='center' className="style">
            <h1 className="title"> Ambulance Type </h1>
          </div>
          <div>
            <input
              type="text"
              value={searchTerm}
              placeholder="Search Service..."
              onChange={handleSearch}
              className="search"
            />
          </div>

        </div>
        <div className="option">
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

              <Dropdown.Item onClick={() => handleSortChange("distance")}>
                Sort by Distance
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div className="listView" >
          <table>
            <tr>
              <th>Type</th>
              <th>Price</th>         
              <th>Location</th>
            </tr>
            {sortedData.map((service, index) => (
              <tr key={index} className="table-list">
                <td>{service.type}</td>
                <td>{`${service.price}$`}</td>         
                <td>District {service.location}</td>

              </tr>
            ))}
          </table>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Search;
