import React from 'react';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import Form from './form.js';
import { Toolbar } from '@mui/material';

export default function FormDrawer(props) {

    const [data, setData] = React.useState(null);
    const [drawerWidth, setDrawerWidth] = React.useState("66%");
    React.useEffect(() => {
        window.addEventListener("resize", () => {
            console.log("RESIZE", window.innerWidth);
            if (window.innerWidth < 900) {
                setDrawerWidth("100%");
            }
            else {
                setDrawerWidth("66%");
            }
        });
    }, []);
    

    return (
        <Drawer
            anchor="right"
            open={props.open}
            variant='persistent'
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box'},
              }}
        >
            <Toolbar />
            <Box sx={{ overflow: 'auto' }}>
                <Form onFill={props.fillForm}/>
            </Box>
        </Drawer>
    );
}