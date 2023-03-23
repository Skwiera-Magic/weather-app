function TodayCard(props) {
   
    console.log(props.weatherResponse)
    console.log(props.city)
    // console.log(props.index)
    // ifprops.weatherResponses)
    // 
    // return null;

    let todayDate = new Date();
    
    return (
        <div className = "max-w-sm rounded overflow-hidden shadow-lg">
        <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2"><h3>{props.weatherResponse.locations[props.city].name}, {todayDate.toDateString()}</h3></div>
        <p className="text-gray-700 text-base">
        <p clasName="font-bold">Temperature: {props.weatherResponse.locations[props.city].values[0].temp} °C</p> 
        <p>Wind Speed: {props.weatherResponse.locations[props.city].values[0].wspd} km/h </p>
        <p>Humidity: {props.weatherResponse.locations[props.city].values[0].humidity} %</p>
        </p>
        
        </div>
        </div>
    );
  }
  export default TodayCard;