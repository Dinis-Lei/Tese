import './App.css';
import * as React from 'react';
import Grid from '@mui/material/Grid';
import Form from './form.js';
import Chart from './chart.js';

function App() {
  const [data, setData] = React.useState(null);
  
  return (
    <Grid m={2} container spacing={0.5} justifyContent="center">
      <Grid item xs={6}>
        <Form onFill={setData}/>
      </Grid>
      <Grid item xs={6}>
        <div>
          <p>{data ? data["val1"] : "A" }</p>
          <Chart data={data} />
        </div>
      </Grid>
    </Grid>
  );
}

export default App;
