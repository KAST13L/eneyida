import React, {useState} from 'react';
import {
    AppBar,
    Box,
    Button,
    CssBaseline, Drawer,
    IconButton,
    Toolbar,
    Typography
} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

export const App = () => {
    const [IsDrawerOpen, setIsDrawerOpen] = useState<boolean>(false)

    return (
        <>
            <CssBaseline/>
            <Box>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            onClick={() => setIsDrawerOpen(true)}
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{mr: 2}}
                        >
                            <MenuIcon/>
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                            Eneyida
                        </Typography>
                        <Button color="inherit">Login</Button>
                    </Toolbar>
                </AppBar>
                <h1>Eneyida TV</h1>
                <Drawer
                    anchor='left'
                    open={IsDrawerOpen}
                    onClose={() => setIsDrawerOpen(false)}
                >
                    +++++++++ menu ++++++++
                </Drawer>
            </Box>
        </>
    );
};

