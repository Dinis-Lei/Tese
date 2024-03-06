import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import EnergyLineChart from '../components/EnergyLineChart.js';
import { calculate_model, load_models } from '../util/generate_data.js';
import InputSlider from '../components/InputSlider.js';
import EnergyPieChart from '../components/EnergyPieChart.js';

export default function MainPage(props) {
    
    const [layout, setLayout] = React.useState({});
    const [chartData, setChartData] = React.useState([{}]);
    const [nDataPoints, setNDataPoints] = React.useState(20);
    const [stepSize, setStepSize] = React.useState(100);
    const [pie_index, setPieIndex] = React.useState(null);
    React.useEffect(() => {
        load_models();
    }, []);

    React.useEffect(() => {
        let layout = {};

        if (props.isDrawerOpen) {
            layout = {"g0": 4, "g1": 12, "g2": 12, "g3": 6, "g4": 6};
        }
        else {
            layout = {"g0": 10, "g1": 9, "g2": 3, "g3": 12, "g4": 12};
        }
        setLayout(layout);
    }, [props.isDrawerOpen]);

    React.useEffect(() => {
        setChartData(calculate_model(props.formData, nDataPoints, stepSize));
    }, [props.formData, nDataPoints, stepSize]);

    


    return (
        <Box>
            <Toolbar />
            <Grid id="g0" container 
                xs={12} md={layout.g0} 
                justifyContent={props.isDrawerOpen ? "flex-start" : "center"}
                m={5}
            >
                <Grid id="g1" item xs={12} md={layout.g1}>
                    <EnergyLineChart data={chartData} nDataPoints={nDataPoints} setPieIndex={setPieIndex} />
                </Grid>
                <Grid id="g2" container item xs={12} md={layout.g2}>
                    <Grid id="g3" item xs={12} md={layout.g3}>
                        <InputSlider setNDataPoints={setNDataPoints} setStepSize={setStepSize} />
                    </Grid>
                    <Grid id="g4" item xs={12} md={layout.g4}>
                        <EnergyPieChart data={chartData} pie_index={pie_index} />
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
}
