import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function EnergyLineChart(props) {
    return (
        <ResponsiveContainer width="90%" aspect={2}>
            <LineChart data={props.data} onClick={(e) => {props.setPieIndex(e.activeTooltipIndex)}}>
                <Line 
                    type="monotone" 
                    dataKey="normal_value" 
                    stroke="#8884d8" 
                    strokeWidth={3} 
                    dot={false}
                    isAnimationActive={false}
                />
                <Line 
                    type="monotone" 
                    dataKey="compressed_value" 
                    stroke="#82ca9d" 
                    strokeWidth={3} 
                    dot={false}
                    isAnimationActive={false}
                />
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis 
                    dataKey="xaxis" 
                    label={{value:"Data (Mb)", position: "insideBottom", offset:-5}} 
                    type="category" 
                    interval={(props.nDataPoints/10)-1} />
                <YAxis label={{value:"Energy (W)", angle:-90, position: "insideLeft"}}/>
                <Tooltip />
                <Legend verticalAlign='top'/>
            </LineChart>
        </ResponsiveContainer>
    );
}