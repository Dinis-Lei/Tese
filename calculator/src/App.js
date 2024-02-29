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

import { BrowserRouter, Routes, Route } from "react-router-dom";
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
            <Box sx={{width: '100%', display: 'flex', backgroundColor: theme.palette.mode === 'dark' ? 'gray' : 'lightgray' }}>
              <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
                {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
              </IconButton>
            </Box>
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
