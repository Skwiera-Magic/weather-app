import React, { useState, useEffect } from 'react';
import './App.css';
import "./components/Card";
import "./images/bg1.jpg";
import TodayCard from "./components/TodayCard";
import History from './components/history';
import List from "./components/List"

function App() {
  const [city, setCity] = useState('test');
  const [history, setHistory] = useState([]);
  const [weatherResponse, setWeatherResponse] = useState({ locations: { test: { name: "", values: [{}, { datetimeStr: '2023-03-22T00:00:00-06:00', temp: "", wspd: "", humidity: "" }] } } });
  const [cityName, setCityName] = useState('test')

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
        let queryCityName = weatherResponse.locations[queryCity].address
        setCity(queryCity)
        setCityName(queryCityName)
        if (!history.includes(cityName) || !city === 'test') {
          setHistory([...history, cityName]);
          localStorage.setItem("history", JSON.stringify(history));
          console.log(history);
        }
      })
  }

  function clearHistory() {
    // setCity("test");
    setHistory([]);
    localStorage.setItem('history', JSON.stringify([]));
  }

  return (
    <div className='bg-cover bg-center h-screen  bg-bg2' >
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
                  <History history={history} handleSearch={handleSearch}/>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
