import './App.css';
import * as React from 'react';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Box } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from './pages/MainPage.js';
import InfoPage from './pages/InfoPage.js';
import AboutPage from './pages/AboutPage.js';
import FormDrawer from './components/FormDrawer.js';
import Navbar from './components/Navbar.js';
import { Theme } from './util/theme.js';
import IntroductionCard from './components/InfoPageCards/IntroductionCard.js';
import UploadModelCard from './components/InfoPageCards/UploadModelCard.js';
import DownloadModelCard from './components/InfoPageCards/DownloadModelCard.js';
import StorageModelCard from './components/InfoPageCards/StorageModelCard.js';

import { MathJaxContext } from 'better-react-mathjax';
import OverallModelCard from './components/InfoPageCards/OverallModelCard.js';


const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

function App() {
  
    const [mode, setMode] = React.useState(() => {
        const localMode = localStorage.getItem('colorMode');
        return localMode ? localMode : 'dark';
    });
    const colorMode = React.useMemo(
        () => ({
          toggleColorMode: () => {
              setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
          },
        }),
        [],
    );
        
    const theme = React.useMemo(
        () => {
            localStorage.setItem('colorMode', mode === 'dark' ? 'dark' : 'light');
            return createTheme(Theme(mode));
        },
        [mode],
    );

    const [openDrawer, setOpenDrawer] = React.useState(true);
    const [formData, setFormData] = React.useState(null); 
    const [infoPageSection, setInfoPageSection] = React.useState(0);
        

    return (
        <MathJaxContext config={{
            options: {
                enableMenu: false,
                makeCollapsible: false,
            }
        
        }}>
        <BrowserRouter>
        <ColorModeContext.Provider value={colorMode} >
            <ThemeProvider theme={theme}>
                <Box>
                    <CssBaseline />
                    <Navbar theme={theme} colorMode={colorMode} openDrawer={openDrawer} setOpenDrawer={setOpenDrawer}/>
                    <FormDrawer open={openDrawer} fillForm={setFormData} setInfoPageSection={setInfoPageSection}/>
                    <Routes>
                        <Route path='/' element={<MainPage formData={formData} isDrawerOpen={openDrawer}/>} />
                        <Route path='/info' element={<InfoPage isDrawerOpen={openDrawer} infoPageSection={infoPageSection}/>}>
                            <Route path='' element={<IntroductionCard />}/>
                            <Route path='uploadModel' element={<UploadModelCard />} />
                            <Route path='downloadModel' element={<DownloadModelCard />} />
                            <Route path='storageModel' element={<StorageModelCard />} />
                            <Route path='overallModel' element={<OverallModelCard />} />
                        </Route>
                        <Route path='/about' element={<AboutPage isDrawerOpen={openDrawer}/>} />
                    </Routes>
                </Box>
            </ThemeProvider>
        </ColorModeContext.Provider>
        </BrowserRouter>
        </MathJaxContext>
    );
}

export default App;
