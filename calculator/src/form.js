import * as React from 'react';
import TextField from '@mui/material/TextField';
import { Button, Grid } from '@mui/material';


export default function Form({onFill}) {
    const [val0, setVal0] = React.useState();
    const [val1, setVal1] = React.useState();
    const [val2, setVal2] = React.useState();
    
    function fillForm() {
        console.log(val0, val1, val2);
        onFill({
            "val0": parseInt(val0),
            "val1": parseInt(val1),
            "val2": parseInt(val2)
        });
    }
    
    
    
    return (
    <Grid container justifyContent={"center"} spacing={0.5}>
        <Grid item xs={4}>
            <TextField
            id="example"
            label="Number1"
            type='number'
            InputLabelProps={{
                shrink: true,
            }}
            onChange={(e) => setVal0(e.target.value)}
            /> 
        </Grid>
        <Grid item xs={4}>
            <TextField
            id="example"
            label="Number2"
            type='number'
            InputLabelProps={{
                shrink: true,
            }}
            onChange={(e) => setVal1(e.target.value)}
            /> 
        </Grid>
        <Grid item xs={4}>
            <TextField
            id="example"
            label="Number3"
            type='number'
            InputLabelProps={{
                shrink: true,
            }}
            onChange={(e) => setVal2(e.target.value)}
            /> 
        </Grid>
        <Button onClick={fillForm}>Fill Form</Button>
    </Grid>
  );
}