function TodayCard(props) {
    let todayDate = new Date();

    return (
        <div className="w-72 rounded overflow-hidden shadow-lg bg-gray-200">
            <div className="font-bold text-xl mb-2">
                <h3>{props.weatherResponse.locations[props.city].address}</h3>
                <h4>{todayDate.toDateString()}</h4>
            </div>
            <p>Temperature: {props.weatherResponse.locations[props.city].values[0].temp}°C</p>
            <p>Wind Speed: {props.weatherResponse.locations[props.city].values[0].wspd} km/h </p>
            <p>Humidity: {props.weatherResponse.locations[props.city].values[0].humidity}%</p>
        </div>
    );
}
export default TodayCard;