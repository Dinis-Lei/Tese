import React from 'react';
import { PieChart, Pie, Tooltip, ResponsiveContainer } from 'recharts';


export default function EnergyPieChart(props) {
    const [data, setData] = React.useState(null);

    React.useEffect(() => {
        console.log("PIE INDEX", props.pie_index, props)
        if (props.data && props.pie_index < props.data.length) {
            setData(props.data[props.pie_index]);
            console.log("PIE DATA", props.data[props.pie_index])
        }
        else {
            setData(props.data);
        }
        console.log("PIE DATA", data)
    }, [props]);
    
    return (
        <ResponsiveContainer width="100%" aspect={1}>
            <PieChart width={400} height={400}>
                <Pie 
                    data={data ? data.normal_pie : null} 
                    dataKey="value" nameKey="name" 
                    cx="25%" cy="50%" outerRadius={50} 
                    fill="#8884d8" label 
                    //animationDuration={100}
                />
                <Pie data={data ? data.compressed_pie : null}
                    dataKey="value" nameKey="name" 
                    cx="75%" cy="50%" outerRadius={50} 
                    fill="#82ca9d" label
                    //animationDuration={100}
                />
                <Tooltip />
            </PieChart>
        </ResponsiveContainer>
    );
}
