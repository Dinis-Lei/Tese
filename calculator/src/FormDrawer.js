import React from 'react';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import Form from './form.js';
import { Toolbar } from '@mui/material';

const drawerWidth = "66%";

export default function FormDrawer(open) {

    const [data, setData] = React.useState(null);


    return (
        <Drawer
            anchor="right"
            open={open.open}
            variant='persistent'
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box'},
              }}
        >
            <Toolbar />
            <Box sx={{ overflow: 'auto' }}>
                <Form onFill={setData}/>
            </Box>
        </Drawer>
    );
}