import { useEffect, useState } from 'react';
import './App.css';
//import { Button } from '@progress/kendo-react-buttons';
import { ComboBox } from '@progress/kendo-react-dropdowns';
import '@progress/kendo-theme-default/dist/all.css';

//function App1() {
//    const [forecasts, setForecasts] = useState();

//    useEffect(() => {
//        populateWeatherData();
//    }, []);

//    const contents = forecasts === undefined
//        ? <p>Loading....done</p>
//        : <table className="table table-striped" aria-labelledby="tabelLabel">
//            <thead>
//                <tr>
//                    <th>Date</th>
//                    <th>Temp. (C)</th>
//                    <th>Temp. (F)</th>
//                    <th>Summary</th>
//                </tr>
//            </thead>
//            <tbody>
//                {forecasts.map(forecast =>
//                    <tr key={forecast.date}>
//                        <td>{forecast.date}</td>
//                        <td>{forecast.temperatureC}</td>
//                        <td>{forecast.temperatureF}</td>
//                        <td>{forecast.summary}</td>
//                    </tr>
//                )}
//            </tbody>
//        </table>;

//    return (
//        <div>
//            <h1 id="tabelLabel">Hello World App1</h1>
//            <p>This component demonstrates fetching data from the server.</p>
//            {contents}
//        </div>
//    );
    
//    async function populateWeatherData() {
//        const response = await fetch('weatherforecast');
//        const data = await response.json();
//        setForecasts(data);
//    }
//}
function App2() {
    const [forecasts, setForecasts] = useState();

    useEffect(() => {
        populateWeatherData();
    }, []);

    const contents = forecasts === undefined
        ? <p>Loading....done</p>
        : <table className="table table-striped" aria-labelledby="tabelLabel">
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Temp. (C)</th>
                    <th>Temp. (F)</th>
                    <th>Summary</th>
                </tr>
            </thead>
            <tbody>
                {forecasts.map(forecast =>
                    <tr key={forecast.date}>
                        <td>{forecast.date}</td>
                        <td>{forecast.temperatureC}</td>
                        <td>{forecast.temperatureF}</td>
                        <td>{forecast.summary}</td>
                    </tr>
                )}
            </tbody>
        </table>;

    return (
        <div>
            <h1 id="tabelLabel">Hello World App2</h1>
            <p>This component demonstrates fetching data from the server.</p>
            {contents}
        </div>
    );
    
    async function populateWeatherData() {
        const response = await fetch('weatherforecast');
        const data = await response.json();
        setForecasts(data);
    }
}

//const handleClick = () => {
//    console.log('Button clicked!');
//    fetch('https://jsonplaceholder.org/posts?id=1', {
//        method: "GET",
//        mode: 'cors',
//        headers: {
//            'Access-Control-Allow-Origin': '*',
//            'Content-Type': 'application/json',
//        }
//    }).then(response => response)
//        .then(json => console.log(json))
//        .catch(e => console.log(e));
//};
//function App() {
//    return (
//        <div className="App">
//            <Button onClick={handleClick} >Click me</Button>
//            <ComboBox
//                data={['Option 1', 'Option 2', 'Option 3']} // Replace with your data
//                placeholder="Select an option"
//            />
//        </div>

//    );
//}
const MyComponent = () => {
    const [comboBoxData, setComboBoxData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://localhost:44397/api/v1/master/getGeneralCode?reference=USERSTATUS&mode=P');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setComboBoxData(data); // Update state with fetched data
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData(); // Call the async function
    }, []); // Empty dependency array means this effect runs only once, on component mount

    return (
        <ComboBox
            data={comboBoxData}
            textField="name" // Replace 'name' with the field name from your API response
            valueField="id" // Replace 'id' with the field name from your API response
        />
    );
};


export default { App2, MyComponent };
