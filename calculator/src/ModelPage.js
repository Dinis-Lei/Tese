import './App.css';
import * as React from 'react';
import Grid from '@mui/material/Grid';
import Form from './form.js';
import Chart from './chart.js';

function ModelPage() {
  const [data, setData] = React.useState(null);
  
  return (
    <Grid container justifyContent="center" spacing={1}>
        <Grid item container xs={12} spacing={0.5} justifyContent="center" height={'100%'}>
        <Grid item xs={12} md={9} lg={7}>
            <Form onFill={setData}/>
        </Grid>
        {/* <Divider orientation='vertical' flexItem sx={{ mr: "-1px" }} /> */}
        <Grid item xs={12} md={3} lg={5}>
            <Chart data={data} />
        </Grid>
        </Grid>
        <Grid item xs={12} justifyContent="center">
        <p>{JSON.stringify(data, null, 2)}</p>
        </Grid>
    </Grid>
  );
}

export default ModelPage;
