import { useState, useEffect } from 'react';

import mobileBg from './assets/pattern-bg-mobile.png';
import desktopBg from './assets/pattern-bg-desktop.png';
import iconMarker from './assets/icon-location.svg';

import SearchBar from './components/SearcBar';
import IpInformation from "./components/IpInformation";



import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
function App() {

  const [ipData, setIpData] = useState({})

  const ipGeolocationToken = "at_ol9EF0yZuuQxOtjDOmz8S96y8Rf5V"

  const handleFindAddress = async (ipAddress) => {
    try {
      const response = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=${ipGeolocationToken}&ipAddress=${ipAddress}`)
      const data = await response.json();
      console.log('API response:', data)
      setIpData(data)
    }
    catch (err) {
      alert("Failed to connect", err)
    }

  }


  useEffect(() => {
    async function fetchUserIp() {
      try {
        const response = await fetch('https://api.ipify.org?format=json');
        const data = await response.json()
        const userIp = data.ip
        handleFindAddress(userIp)
      } catch (err) {
        alert("Error", err)
      }
    }
    fetchUserIp();
  }, [])


  useEffect(() => {
    var container = L.DomUtil.get("map");
    const lat = ipData.location ? ipData.location.lat : ''
    const lng = ipData.location ? ipData.location.lng : ''
    if (container != null) {
      container._leaflet_id = null;
    }

    const map = L.map('map', {
      zoomControl: false,
      dragging: true
    }).setView([lat, lng], 13);



    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    const customIcon = L.icon({
      iconUrl: iconMarker,
      iconSize: [25, 30],
      iconAnchor: [16, 32],
    });

    L.marker([lat, lng], { icon: customIcon }).addTo(map)
      .openPopup();
  }, [ipData.location]);




  return (
    <>
      <div className="main-wrapper relative h-screen">
        <div className="sm:h-auto">
          <img className="sm:w-full md:h-72 lg:hidden " src={mobileBg} alt="" aria-hidden="true" />
          <img className="sm:w-full sm:hidden lg:flex" src={desktopBg} alt="" aria-hidden="true" />
        </div>

        <div className=" sm: absolute sm:top-0 sm: w-full sm:flex sm: flex-col sm:items-center z-10 ">
          <SearchBar
            findIpAddress={handleFindAddress} />

          <IpInformation
            ipAddress={ipData.ip}
            country={ipData.location ? ipData.location.country : ''}
            region={ipData.location ? ipData.location.region : ''}
            timezone={ipData.location ? ipData.location.timezone : ''}
            isp={ipData.isp}
          />

        </div>


        <div className="sm:h-full w-full relative z-0" id="map"></div>


      </div>
    </>
  )
}

export default App
