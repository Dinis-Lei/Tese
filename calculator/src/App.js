import './App.css';
import * as React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Form from './form.js';
import Chart from './chart.js';
import { AppBar, Box, Divider } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import CssBaseline from '@mui/material/CssBaseline';

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

function App() {
  const [data, setData] = React.useState(null);
  
  const [mode, setMode] = React.useState('dark');
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  );


  return (
    <ColorModeContext.Provider value={colorMode} >
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar position="static">
          <Box sx={{width: '100%', display: 'flex', backgroundColor: theme.palette.mode === 'dark' ? 'gray' : 'lightgray' }}>
            <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
              {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
          </Box>
        </AppBar>
        <Grid container justifyContent="center" spacing={1}>
          <Grid item container xs={12} spacing={0.5} justifyContent="center" height={'100%'}>
            <Grid item xs={7}>
              <Form onFill={setData}/>
            </Grid>
            {/* <Divider orientation='vertical' flexItem sx={{ mr: "-1px" }} /> */}
            <Grid item xs={5}>
              <Chart data={data} />
            </Grid>
          </Grid>
          <Grid item xs={12} justifyContent="center">
            <p>{JSON.stringify(data, null, 2)}</p>
          </Grid>
        </Grid>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
