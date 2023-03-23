function Card(props) {
   
    console.log(props.weatherResponse)
    console.log(props.city)
    // console.log(props.index)
    // ifprops.weatherResponses)
    // 
    // return null;


    
    return (
        <div className = "max-w-sm rounded overflow-hidden shadow-lg bg-gray-400">
        <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2"><h3>{props.weatherResponse.locations[props.city].address}, {new Date(props.datetimeStr.slice(0,10)).toDateString()}</h3></div>
        <p className="text-gray-700 text-base"></p>
        <p className="font-bold">Temperature: {props.temp} °C</p> 
        <p>Wind Speed: {props.wspd} km/h </p>
        <p>Humidity: {props.humidity} %</p>
        
        
        </div>
        </div>

    );
  }
  export default Card;
