function Card(props) {
  return (
    // Flex code
    <div className="flex flex-col shadow-md w-64 overflow-hidden p-1">
      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-gray-400">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">
            <h3>
              {new Date(props.datetimeStr.slice(0, 10)).toDateString()}
            </h3>
          </div>
          <p>Temperature: {props.temp}°C</p>
          <p>Wind Speed: {props.wspd} km/h </p>
          <p>Humidity: {props.humidity}%</p>
        </div>
      </div>
    </div>
  );
}
export default Card;
