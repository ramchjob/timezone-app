function Car(props) {
    const cars = props.cars;
    const prices = props.prices;
    return (
        <>
        <>
            <ul>
                {cars.map((car) => <p>This is {car}</p>)}
            </ul>
        </>
        <>
            {
                prices && prices.length > 0 &&

                <ul>
                   {prices.map((price) => <p>Price is  {price}</p>)}
                </ul>
            }
            
           
            
        </>
        </>

    );

}
export default Car;