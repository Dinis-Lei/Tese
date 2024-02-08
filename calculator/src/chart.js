import * as React from 'react';
import {CartesianGrid, LineChart, Line, ResponsiveContainer, XAxis, YAxis, Tooltip, Legend, PieChart, Pie} from 'recharts';
import { Box, Card, CardContent, Grid, Slider, TextField } from '@mui/material';

function cpe_model(data, d_in) {
    let intensity = (data.t_on/data.t_use)*(data.p_cpe/data.n_cpe);
    let time = d_in/data.cpe_bandwidth;
    return time*intensity;
}

function an_model(data, d_in) {
    let intensity = (data.p_an/data.n_an)*data.pue_an;
    let time = d_in/data.an_bandwidth;
    return time*intensity;
}

function server_model(data, d_in, operation_cost=0) {
    let intensity = (data.p_server/data.n_server)*data.pue_server;
    let exp = 1+operation_cost;
    //console.log(exp, operation_cost, 1+operation_cost);
    let time = (d_in**exp)/data.server_bandwidth;
    return time*intensity;
}

function calculate_model(data, nDataPoints=20, stepSize=100) {
    if (!data.data) {
        return null;
    }
    data = data.data;
    console.log("STEP SIZE", stepSize)
    let series = [];
    for (let d_in = 0; d_in < nDataPoints*stepSize; d_in += stepSize) {
        let cpe = cpe_model(data, d_in);
        let an = an_model(data, d_in);
        let server = server_model(data, d_in);

        let d_in_compressed = d_in*data.compression_rate;
        let cpe_compressed = cpe_model(data, d_in_compressed);
        let an_compressed = an_model(data, d_in_compressed);
        // console.log("SERVER");
        let server_compressed = server_model(data, d_in_compressed, data.compression_cost);
    
        series.push({
            "normal_value": cpe+an+server,
            "compresed_value":cpe_compressed+an_compressed+server_compressed,
            "normal_pie": [
                {
                    "name": "CPE",
                    "value": cpe
                },
                {
                    "name": "AN",
                    "value": an
                },
                {
                    "name": "Server",
                    "value": server
                }
            ],
            "compressed_pie": [
                {
                    "name": "CPE",
                    "value": cpe_compressed
                },
                {
                    "name": "AN",
                    "value": an_compressed
                },
                {
                    "name": "Server",
                    "value": server_compressed
                }
            ],
        });
    }


    return series;
}

export default function Chart(data) {
    
    const [chartData, setChartData] = React.useState(calculate_model(data));
    const [pie_index, setPieIndex] = React.useState(0);
    const [nDataPoints, setNDataPoints] = React.useState(20);
    const [stepSize, setStepSize] = React.useState(100);

    React.useEffect(() => {
        setChartData(calculate_model(data, nDataPoints, stepSize));
    }, [data, nDataPoints, stepSize]);

    return (
    <Grid container spacing={2}>
        <Grid item xs={12} m={2} p={2}>
            <LineChart m={3} width={700} height={400} data={chartData} onClick={(e) => {setPieIndex(e.activeTooltipIndex)}}>
                <Line type="monotone" dataKey="normal_value" stroke="#8884d8" strokeWidth={3} />
                <Line type="monotone" dataKey="compresed_value" stroke="#82ca9d" strokeWidth={3} />
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis label={{value:"Data (Mb)", position: "insideBottom", offset:-5}} type="category" interval={(nDataPoints/10)-1} />
                <YAxis label={{value:"Energy (W)", angle:-90, position: "insideLeft"}}/>
                <Tooltip />
                <Legend verticalAlign='top'/>
            </LineChart>
        </Grid>
        <Grid item xs={12} md={6} mt={2}>
            <PieChart width={400} height={400}>
                <Pie data={chartData && pie_index < chartData.length ? chartData[pie_index].normal_pie : chartData} 
                     dataKey="value" nameKey="name" 
                     cx="25%" cy="50%" outerRadius={50} 
                     fill="#8884d8" label 
                     //animationDuration={100}
                />
                <Pie data={chartData && pie_index < chartData.length ? chartData[pie_index].compressed_pie : chartData}
                     dataKey="value" nameKey="name" 
                     cx="75%" cy="50%" outerRadius={50} 
                     fill="#82ca9d" label
                     //animationDuration={100}
                />
                <Tooltip />
            </PieChart>
        </Grid>
        <Grid item xs={12} md={6} mt={2}>
            <Box p={3}>
                <Card>
                    <CardContent>
                        <h5>Number of data points</h5>
                        <Slider 
                            defaultValue={20}
                            step={10}
                            min={10}
                            max={100}
                            valueLabelDisplay='auto'
                            marks
                            onChange={(e) => setNDataPoints(e.target.value)}
                        />
                        <TextField id="stepSize"
                            type="number" 
                            label="Step size (Mb)"
                            defaultValue={100}
                            InputLabelProps={{shrink: true,}}
                            variant='standard'
                            onChange={(e) => setStepSize(Number(e.target.value))}          
                        />
                    </CardContent>
                </Card>
                
            </Box>
        </Grid>
        <Grid item xs={12}>
            <p>{JSON.stringify(chartData ? chartData[pie_index]: null, null, 2)}</p>
        </Grid>
    </Grid>
  );
}