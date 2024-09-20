import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Set custom icon for the marker (if needed)
const userIcon = new L.Icon({
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const UserLocationMap = () => {
  const [position, setPosition] = useState(null);

  // Use Geolocation API to get user's location
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const { latitude, longitude } = pos.coords;
          setPosition([latitude, longitude]);
        },
        (err) => {
          console.error("Error getting location:", err);
        },
        {
          enableHighAccuracy: true, // Bật độ chính xác cao
          timeout: 5000,            // Giới hạn thời gian chờ (5 giây)
          maximumAge: 0             // Không dùng cache cũ
        }
      );
    } else {
      alert("Your browser does not support Geolocation!");
    }
  }, []);
  

  return (
    <div>
      {position ? (
        <MapContainer center={position} zoom={13} style={{ height: '380px', width: '100%' }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={position} icon={userIcon}>
            <Popup>
            
            </Popup>
          </Marker>
        </MapContainer>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default UserLocationMap;
