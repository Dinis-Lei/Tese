import './App.css';
import * as React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Form from './form.js';
import Chart from './chart.js';
import { AppBar, Box, Button, Divider, Toolbar, Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import CssBaseline from '@mui/material/CssBaseline';

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ModelPage from './ModelPage.js';
import InfoPage from './InfoPage.js';
import ChangeModelPage from './ChangeModelPage.js';

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

function App() {
  
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
    <BrowserRouter>
      <ColorModeContext.Provider value={colorMode} >
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <AppBar position="static">
            <Toolbar
              sx={{
                backgroundColor: theme.palette.mode === 'dark' ? 'gray' : 'lightgray',
              }}
            >
              <IconButton onClick={colorMode.toggleColorMode} color="inherit">
                {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
              </IconButton>
              <Button color="inherit" component={Link} to="/">
                <Typography variant="h6">Model</Typography>
              </Button>
              <Button color="inherit" component={Link} to="/info">
                <Typography variant="h6">Info</Typography>
              </Button>
              <Button color="inherit" component={Link} to="/changeModel">
                <Typography variant="h6">Change Model</Typography>
              </Button>
            </Toolbar>
          </AppBar>
          <Routes>
            <Route path='/' element={<ModelPage/>} />
            <Route path='/info' element={<InfoPage/>} />
            <Route path='/changeModel' element={<ChangeModelPage/>} />
          </Routes>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </BrowserRouter>
  );
}

export default App;
