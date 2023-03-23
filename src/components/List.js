import Card from "./Card"



function List (props) {
    let content;
    // for (let i = 1; i < 6; i++) {
        content = props.weatherResponse.locations[props.city].values.map((item, index) => {
            if(index < 6 && index >= 1){
                return <Card weatherResponse={props.weatherResponse} city={props.city} key={index} temp={item.temp} wspd={item.wspd} humidity={item.humidity} datetimeStr={item.datetimeStr}></Card>
            }
            return null
        })
        
    // }
    return (

        <>
            {content}
            </>
    )


}
export default List;