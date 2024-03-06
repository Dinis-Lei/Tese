import * as React from 'react';
import TextField from '@mui/material/TextField';
import { Button, Card, CardActions, CardContent, CardHeader, Grid, IconButton, Tooltip, Typography } from '@mui/material';
import model from '../model.json';
import HelpIcon from '@mui/icons-material/Help';
import { InputAdornment } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';



function tooltip(title, error=false) {
    let color = error ? "red" : "";
    
    return (
        <Tooltip title={<p style={{fontSize: "1.2em"}}>{title}</p>}>
            <IconButton style={{padding: 0, color: color}}>
                <HelpIcon fontSize='small'/>
            </IconButton>
        </Tooltip>
    );

}



export default function Form({onFill}) {

    const [data, setData] = React.useState({"disabled": []});
    const [errorMessages, setErrorMessage] = React.useState({});
    const handleChange = (event) => {
        let updatedData = {};
        if (event.target.value === ""){
            errorMessages[event.target.id] = "This field is required";
            setErrorMessage(errorMessages);
        }
        else {
            errorMessages[event.target.id] = null;
            setErrorMessage(errorMessages);
        }
        let value = event.target.value !== "" ? Number(event.target.value) : event.target.defaultValue;
        updatedData[event.target.id] = value;
        console.log("DATA", updatedData);
        setData(data => ({
            ...data,
            ...updatedData
        }));
    } 

    


    React.useEffect(() => {
        fillData(model);
        for (let key in model) {
            for (let param in model[key].params) {
                errorMessages[param.id] = null;
            }
        }

    }, []);

    // Fill the form with default values
    const fillData = (d) => {
        let updatedData = {"disabled": []};
        model.map((row, index) => {
            row.params.map((param, index) => {
                updatedData[param.id] = param.default;
            });
        });
        setData(data => ({
            ...data,
            ...updatedData
        }));
        onFill(updatedData);
    }
    
    const fillForm = () => {
        if(Object.keys(errorMessages).some((k) => errorMessages[k] != null)){
            return;
        }
        onFill(data);
    }

    const disableComponent = (row) => {
        row.params.map((param, index) => {
            const element = document.getElementById(param.id);
            element.disabled = !element.disabled;
            if (element.disabled){
                setData(data => ({
                        ...data,
                        "disabled": [...data.disabled, param.id]
                }));
            }
            else {
                setData(data => ({
                    ...data,
                    "disabled": data.disabled.filter((value, index, arr) => value !== param.id)
                }));
            }
            
        });
    }
    
    
    return (
        <Card>
            <CardContent>
                <Grid container justifyContent={"flex-start"} spacing={2} component='form'>
                    {model.map((row, index1) => {
                        const internal_grid_layout = Math.max(12/(1+Math.floor(row.params.length/6)), 4); //row.params.length > 5 ? 6: 12;
                        const external_grid_layout = Math.min((1+Math.floor(row.params.length/6))*4, 12) //row.params.length > 5 ? 8: 4;
                        return <Grid item container xs={12} sm={12} md={6} lg={external_grid_layout} rowSpacing={1} key={index1}>
                            <Card variant='outlined' >
                                <CardHeader 
                                    title={
                                        <Typography variant='h6' noWrap>
                                            {row.title}
                                            <Tooltip title={"Disable Component"}>
                                                <Checkbox onClick={(e) => disableComponent(row)}/>
                                            </Tooltip>
                                        </Typography>
                                    } 
                                    titleTypographyProps={{variant:'h6', noWrap:false}}/>
                                <CardContent>
                                    <Grid container justifyContent={"flex-start"}>
                                        {row.params.map((param, index2) => {
                                            return <Grid item xs={internal_grid_layout} key={index2} justifyContent={'center'}>
                                                        <TextField 
                                                            id={param.id} 
                                                            type={param.type} 
                                                            defaultValue={param.default}
                                                            InputLabelProps={{shrink: true,}}
                                                            onChange={(e) => handleChange(e)}
                                                            variant='standard'
                                                            helperText={
                                                                <p style={{width: '20em', margin:0}}>
                                                                    {param.label} {tooltip(param.tooltip, errorMessages[param.id])}
                                                                    {errorMessages[param.id] && <br/>} {errorMessages[param.id]}
                                                                </p>
                                                            }
                                                            required
                                                            error={errorMessages[param.id] != null}
                                                            InputProps={{
                                                                startAdornment: param.unit ? 
                                                                <InputAdornment  position="start">
                                                                    {param.unit}
                                                                </InputAdornment> : null
                                                            
                                                            }}
                                                        />
                                                {/* <p>{JSON.stringify(param, null, 2)}</p> */}
                                            </Grid>
                                        })}
                                    </Grid>
                                </CardContent>
                            </Card>
                        </Grid>
                    })}
                </Grid>
            </CardContent>
            <CardActions>
                <Button type="submit" variant='contained' onClick={fillForm}>Submit Form</Button>
            </CardActions>
        </Card>
  );
}