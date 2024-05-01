import React from 'react';
import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import { Link, useLocation } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import TimelineIcon from '@mui/icons-material/Timeline';
import InfoIcon from '@mui/icons-material/Info';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import BoltIcon from '@mui/icons-material/Bolt';
import { styled } from '@mui/material/styles';
import { useTheme } from '@mui/material/styles';

export default function Navbar(props) {

    const TypographyStyled = styled(Typography)(({ theme }) => ({
        variant: 'h6',
        flexGrow: 1,
        fontWeight: 'bold',
        textTransform: 'capitalize',
        color: "inherit",
        display: 'flex',
    }));

    const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
        ({ theme }) => ({
          textTransform: 'none',
          fontWeight: theme.typography.fontWeightRegular,
          fontSize: theme.typography.pxToRem(15),
          paddingRight: theme.spacing(3),
          paddingBottom: 15,
          color: 'rgba(255, 255, 255, 0.7)',
          '&.Mui-selected': {
            color: '#ffffff',
          },
          '&:hover': {
            color: '#ffffff',
            backgroundColor: theme.palette.action.hover,
            
          },
        }),
      );

    const theme = useTheme();

    const tabInfo = [
        {"label": <TypographyStyled>Model</TypographyStyled>, "icon": <TimelineIcon />, "link": "/"},
        {"label": <TypographyStyled>Info</TypographyStyled>, "icon": <InfoIcon />, "link": "/info"},
        {"label": <TypographyStyled>About</TypographyStyled>, "icon": <SwapHorizIcon />, "link": "/about"},

    ]

    const pathname = useLocation().pathname;
    const [currentTab, setCurrentTab] = React.useState(
        tabInfo.findIndex(
            tab => {
                if (pathname === "/") {
                    return tab.link === pathname;
                }
                return pathname.startsWith(tab.link) && tab.link !== "/";
            }
        )
    );
    const changeTab = (event, newValue) => {
        setCurrentTab(newValue);
    }


    return (
        <AppBar 
            position="fixed" 
            sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
            id="navbar"
        >
            <Toolbar
                sx={{
                    color: "white",
                }}
            >
                <Box sx={{ flexGrow: 0 }}>
                    <IconButton onClick={props.colorMode.toggleColorMode} color="inherit">
                        {props.theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                    </IconButton>
                </Box>
                <Box sx={{flexGrow: 0, display: { xs: 'flex'}, justifyContent: "center" }}>
                    <BoltIcon />
                    <Typography sx={{fontWeight: "bold"}}>
                        ECompress
                    </Typography>
                </Box>
                <Box sx={{ flexGrow: 1, display: { xs: 'flex'}, justifyContent: "center" }}>
                    <Tabs 
                        value={currentTab} 
                        onChange={changeTab} 
                        indicatorColor={theme.palette.mode === 'dark' ? 'primary' : 'secondary'} 
                        textColor='primary'
                        sx={{
                            boxShadow: "inset 0 -2px 0 0 #E6ECF0",
                        }}
                    >
                        {tabInfo.map((tab, index) => {
                            return (
                                <StyledTab 
                                    key={index}
                                    label={tab.label}
                                    icon={tab.icon}
                                    component={Link}
                                    to={tab.link}
                                    iconPosition="start"
                                    sx={{minHeight: 0}}
                                />
                            )
                        })}
                    </Tabs>
                </Box>
                <Box sx={{ flexGrow: 0 }}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="end"
                        onClick={() => props.setOpenDrawer(!props.openDrawer)}
                        sx={{
                            ...(props.openDrawer && { 
                                transform: "rotate(180deg)" 
                            }),
                            transition: "transform 0.5s"
                        }}
                    >
                        <MenuOpenIcon />
                    </IconButton>
                </Box>
            </Toolbar>
        </AppBar>
    );
} 