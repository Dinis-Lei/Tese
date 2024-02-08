import * as React from 'react';
import TextField from '@mui/material/TextField';
import { Button, Card, CardActions, CardContent, CardHeader, Grid, IconButton, Tooltip } from '@mui/material';
import model from './model.json';
import HelpIcon from '@mui/icons-material/Help';



function tooltip(title) {
    return (
        <Tooltip title={<p style={{fontSize: "1.2em"}}>{title}</p>}>
            <IconButton style={{padding: 0}}>
                <HelpIcon fontSize='small' />
            </IconButton>
        </Tooltip>
    );

}



export default function Form({onFill}) {

    const [data, setData] = React.useState({});

    const handleChange = (event) => {
        let updatedData = {};
        let value = event.target.value != "" ? Number(event.target.value) : event.target.defaultValue;
        updatedData[event.target.id] = value;
        console.log("DATA", updatedData);
        setData(data => ({
            ...data,
            ...updatedData
        }));
    } 

    React.useEffect(() => {
        fillData(model);
    }, []);

    // Fill the form with default values
    const fillData = (d) => {
        let updatedData = {};
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
    
    function fillForm() {
        onFill(data);
    }

    
    
    return (
        <Card>
            <CardContent>
                <Grid m={2} container justifyContent={"flex-start"} spacing={2} component='form'>
                    {model.map((row, index) => (
                        <Grid item container xs={4} rowSpacing={1} key={index}>
                            <Card variant='outlined'>
                                <CardHeader title={row.title}/>
                                <CardContent>
                                    {row.params.map((param, index) => {
                                        return <Grid item xs={12} key={index}>
                                                    <TextField id={param.id} 
                                                        type={param.type} 
                                                        defaultValue={param.default}
                                                        InputLabelProps={{shrink: true,}}
                                                        onChange={(e) => handleChange(e)}
                                                        variant='standard'
                                                        helperText={
                                                            <p style={{width: '20em', margin:0}}>
                                                                {param.label} {tooltip(param.tooltip)}
                                                            </p>
                                                        }
                                                        
                                                    />
                                            {/* <p>{JSON.stringify(param, null, 2)}</p> */}
                                        </Grid>
                                    })}
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </CardContent>
            <CardActions>
                <Button variant='contained' onClick={fillForm}>Submit Form</Button>
            </CardActions>
        </Card>
  );
}