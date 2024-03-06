import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Slider from '@mui/material/Slider';
import TextField from '@mui/material/TextField';
import { Typography } from '@mui/material';



export default function InputSlider(props) {

    return (
        <Box p={3}>
            <Card>
                <CardContent>
                    <Typography gutterBottom>Number of data points</Typography>
                    <Slider 
                        defaultValue={20}
                        step={10}
                        min={10}
                        max={100}
                        valueLabelDisplay='auto'
                        marks
                        onChange={(e) => props.setNDataPoints(e.target.value)}
                    />
                    <TextField id="stepSize"
                        type="number" 
                        label="Step size (Mb)"
                        defaultValue={100}
                        InputLabelProps={{shrink: true,}}
                        variant='standard'
                        onChange={(e) => props.setStepSize(Number(e.target.value))}          
                    />
                </CardContent>
            </Card>
        </Box>
    );
}