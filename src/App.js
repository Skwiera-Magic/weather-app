import React, { useState, useEffect } from 'react';
import './App.css';
import "./components/Card";
import  "./images/bg1.jpg";

import TodayCard from "./components/TodayCard";
import List from "./components/List"

function App() {
  const [city, setCity] = useState('test');
  const [history, setHistory] = useState([]);
  const [weatherResponse, setWeatherResponse] = useState({locations:{test:{name: "", values:[{}, {datetimeStr:'2023-03-22T00:00:00-06:00', temp:"", wspd:"", humidity:""}]}}});
  // const [cityName, setCityName] = useState('test')
  // //JSON.parse(localStorage.history  
  useEffect(() => {
    let savedHistory = JSON.parse(localStorage.getItem("history")) || [];
    setHistory(savedHistory);
  }, [])
  const handleSearch = e => {
    e.preventDefault();
    let queryCity = "";
    if (e.target.tagName.toLowerCase() === "button") {
      queryCity = e.target.textContent.trim();
    } else {
      queryCity = document.getElementById("search-input").value.trim();
    }
    let apiKey = "GSXZLQPHWJBFGDLEP2ZW5HKMD";
    let queryURL =
      "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/weatherdata/forecast?locations=" +
      queryCity +
      "&limit=8&aggregateHours=24&unitGroup=metric&shortColumnNames=false&contentType=json&key=" +
      apiKey;

    fetch(queryURL)
      .then((response) => response.json())
      .then(function renderForecast(weatherResponse) {
        console.log(weatherResponse)
        setWeatherResponse(weatherResponse);
      //  let queryCityName = weatherResponse.locations[queryCity].name
        setCity(queryCity)
        // setCityName(queryCityName)
        if (!history.includes(city)) {
          setHistory([...history, city]);
          localStorage.setItem("history", JSON.stringify(history));
          console.log(history);
        }

        // let renderToday = document.getElementById("today");
        // let todayDate = new Date();
        // renderToday.innerHTML = "";
        // renderToday.innerHTML = `
        // <div className = border-2 border-orange-300>
        // <h3>${weatherResponse.locations[queryCity].name}, ${todayDate.toDateString()}</h3>
        // <p>Temperature: ${weatherResponse.locations[queryCity].currentConditions.temp} °C</p> 
        // <p>Wind Speed: ${weatherResponse.locations[queryCity].currentConditions.wspd} km/h </p>
        // <p>Humidity: ${weatherResponse.locations[queryCity].currentConditions.humidity} %</p>
        
        
        
        // </div>`;


        // let renderForecast = document.getElementById("forecast");
        // renderForecast.innerHTML = "";
        // renderForecast.innerHTML = `<div className = "max-w-sm rounded overflow-hidden shadow-lg">
        // <div className="px-6 py-4">
        // <div className="font-bold text-xl mb-2"><h3>${weatherResponse.locations[queryCity].name}, ${new Date(weatherResponse.locations[queryCity].values[1].datetimeStr.slice(0,10)).toDateString()}</h3></div>
        // <p className="text-gray-700 text-base">
        // <p clasName="font-bold">Temperature: ${weatherResponse.locations[queryCity].values[1].temp} °C</p> 
        // <p>Wind Speed: ${weatherResponse.locations[queryCity].values[1].wspd} km/h </p>
        // <p>Humidity: ${weatherResponse.locations[queryCity].values[1].humidity} %</p>
        // </p>
        // </div>
        // </div>`;
      })
  }

  function clearHistory() {
    // setCity("test");
    setHistory([]);
    localStorage.setItem('history', JSON.stringify([]));
  }

  return (
     <div className= 'bg-cover bg-center h-screen  bg-bg2' >
    <div className="App">
     
      <header className="container max-w-full mx-auto sm:px-4 text-center text-white text-3xl font-bold h-20 bg-gradient-to-r from-sky-500 to-indigo-500 p-2 weather-header ">
        <h1 className='mt-2'>Weather Dashboard</h1>
      </header>

      <div className="container max-w-full mx-auto sm:px-4">
        <div className="flex flex-wrap ">
          <aside className="lg:w-1/4 pr-4 pl-4 pb-3">
            <h2 id="form-heading" className="mt-1 mb-2 mr-0 pt-2 h3 form-label border-solid border-2 border-sky-500 ...  rounded-lg ... h-14 bg-gradient-to-r from-sky-500 to-indigo-500 text-white">
              Search for a City :
            </h2>
            <form id="search-form" className="form" onSubmit={handleSearch}>
              <div className="flex items-center mb-4">
                <div className="relative flex items-stretch w-full">
                  <input
                    className="form-input weather-search p-1"
                    type="text"
                    id="search-input"
                    placeholder="Liverpool"
                    aria-labelledby="form-heading"
                    aria-controls="today forecast"
                  />
                  <div className="input">
                    <button
                      type="submit"
                      className="align-middle text-center select-none border border-black font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline bg-blue-600 text-white hover:bg-blue-800 search-button"
                      id="search-button"
                      aria-label="submit search"
                    >
                      Search
                    </button>
                  </div>
                </div>
              </div>
            </form>
            <div
              className="flex flex-col pl-0 mb-0 border rounded border-gray-300"
              id="history"
            >
              <button
                className="bg-orange-400 hover:bg-orange-600 rounded border border-black p-1 m-1"
                onClick={() => clearHistory()}
              >
                Clear History
              </button>
              <hr></hr>
              <div className="flex flex-col">
                {history.map((city) => {
                  console.log(city)
                  if (city.trim() === '' || city.trim() === 'test') {
                    return null;
                  }
                  return (
                    <button
                      className="bg-green-300 hover:bg-green-500 rounded border border-black m-1 p-1"
                      key={city}
                      onClick={handleSearch}
                    >
                      {city}
                    </button>
                  );
                })}
              </div>
            </div>
          </aside>

          <div className="lg:w-3/4 pr-4 pl-4 pb-3">
            <section id="today" className="mt-3" aria-live="polite">
            
            {
            city!=='test'&&<TodayCard weatherResponse={weatherResponse} city={city} ></TodayCard>
            }
            </section>
            <section id="forecast" className="flex flex-wrap mt-3" aria-live="polite">
            
            {
              
            city!=='test'&&<List weatherResponse={weatherResponse} city={city}></List>
            }
            </section>
            
            {/* <Card weatherResponse={weatherResponse} city={city} ></Card> */}
            {/* <Card weatherResponse={weatherResponse} city={city} index={2}></Card>
            <Card weatherResponse={weatherResponse} city={city} index={3}></Card> */}
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default App;
