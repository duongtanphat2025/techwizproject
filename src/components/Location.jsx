import React, { useState, useEffect } from 'react';

const Location = () => {
  const [location, setLocation] = useState({
    latitude: null,
    longitude: null,
    error: null,
    loading: true,
  });

  useEffect(() => {
    if (!navigator.geolocation) {
      setLocation((prevState) => ({
        ...prevState,
        error: "Geolocation is not supported by your browser",
        loading: false, // Ngừng loading khi phát hiện lỗi
      }));
    } else {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            error: null,
            loading: false, // Ngừng loading khi có vị trí
          });
        },
        (error) => {
          let errorMessage = '';
          switch(error.code) {
            case error.PERMISSION_DENIED:
              errorMessage = 'User denied the request for Geolocation.';
              break;
            case error.POSITION_UNAVAILABLE:
              errorMessage = 'Location information is unavailable.';
              break;
            case error.TIMEOUT:
              errorMessage = 'The request to get user location timed out.';
              break;
            default:
              errorMessage = 'An unknown error occurred.';
              break;
          }
          setLocation((prevState) => ({
            ...prevState,
            error: errorMessage,
            loading: false, // Ngừng loading khi phát hiện lỗi
          }));
        }
      );
    }
  }, []);

  return (
    <div className='thongbao'>
      Your Location
      {location.loading ? (
        <p>Loading...</p> // Hiển thị khi đang lấy vị trí
      ) : location.error ? (
        <p>Error: {location.error}</p>
      ) : (
        <div >
          <p>Latitude: {location.latitude}</p>
          <p>Longitude: {location.longitude}</p>
          In HO CHI MINH CITY
          <br /><br />
        </div>
      )}
    </div>
  );
};

export default Location;
