import * as React from 'react';
import {CartesianGrid, LineChart, Line, ResponsiveContainer, XAxis, YAxis, Tooltip, Legend} from 'recharts';

function retrieveData(data) {
    if (!data.data) {
        return null;
    }
    data = data.data;
    console.log("data", data);
    let series = [];
    for (let i = 0; i < 10; i++) {
        let value = 0;
        console.log("L", Object.keys(data).length);
        for (let j = 0; j < Object.keys(data).length; j++) {
            value += i * data[`val${j}`];
            console.log(i * data[`val${j}`]);
        }
        series.push({"val": value});
    }
    console.log(series)
    return series;
}


export default function Chart(data) {
    
    const [chartData, setChartData] = React.useState(retrieveData(data));

    React.useEffect(() => {
        setChartData(retrieveData(data));
    }, [data]);

    return (
    // <ResponsiveContainer width="100%" height="100%">
        <LineChart width={400} height={400} data={chartData}>
            <Line type="monotone" dataKey="val" stroke="#8884d8" />
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
        </LineChart>
    // </ResponsiveContainer>
  );
}