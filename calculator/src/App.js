import './App.css';
import * as React from 'react';
import { ThemeProvider, createTheme, styled } from '@mui/material/styles';
import { AppBar, Box, Button, Divider, Toolbar, Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import CssBaseline from '@mui/material/CssBaseline';

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ModelPage from './ModelPage.js';
import InfoPage from './InfoPage.js';
import ChangeModelPage from './ChangeModelPage.js';
import FormDrawer from './FormDrawer.js';
import Test from './test.js';

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });
const drawerWidth = 240;

const MyAppBar = styled(AppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));



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

  const [openDrawer, setOpenDrawer] = React.useState(false);


  return (
    <BrowserRouter>
      <ColorModeContext.Provider value={colorMode} >
        <ThemeProvider theme={theme}>
          <Box>
            <CssBaseline />
            <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
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
                <Button color="inherit" onClick={() => setOpenDrawer(!openDrawer)}>
                  <Typography variant="h6">Open Drawer</Typography>
                </Button>
                <Button color="inherit" component={Link} to="/test">
                  <Typography variant="h6">Test</Typography>
                </Button>
              </Toolbar>
            </AppBar>
            <FormDrawer open={openDrawer}/>
            <Routes>
              <Route path='/' element={<ModelPage/>} />
              <Route path='/info' element={<InfoPage/>} />
              <Route path='/changeModel' element={<ChangeModelPage/>} />
              <Route path='test' element={<Test open={openDrawer}/>} />
            </Routes>
          </Box>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </BrowserRouter>
  );
}

export default App;
