/* eslint-disable react-hooks/exhaustive-deps */

import './App.css';
import React, { useEffect, useState } from "react";
import AllCities from './component/allcities';
import SingleData from './component/singleData';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  const [weatherData, setWeatherData] = useState({ records: [] });
  const apiURL = `https://public.opendatasoft.com/api/records/1.0/search/?dataset=geonames-all-cities-with-a-population-1000&facet=cou_name_en&sort=name`;

  useEffect(() => {
    fetch(apiURL)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error");
        }
        return response.json();
      })
      .then((data) => {
        setWeatherData(data)
      })
      .catch((e) => {
        console.log(e);
      })
  }, [])

  return (
    <BrowserRouter>
      <div className='bg-blue-300 py-[5%] md:h-[100vh] h-[100%]'>

        <div className='lg:mx-24 md:mx-14 mx-6'>
          <Routes>
            <Route path="/" element={<AllCities weatherData={weatherData} />} />
          </Routes>
        </div>

        <div className='lg:mx-24 md:mx-14 mx-6'>
          <Routes>
            <Route path="/:cityName" element={<SingleData weatherData={weatherData} />} />
          </Routes>
        </div>

      </div>
    </BrowserRouter>
  );
}

export default App;
