import React, {useState} from 'react';
import {
    AppBar,
    Box,
    Button,
    Drawer,
    Hidden,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Toolbar,
    Typography
} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import SettingsIcon from '@mui/icons-material/Settings';

export const Navigation = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const list = () => (
        <Box
            sx={{width: '250px'}}
            role="presentation"
            onClick={() => setIsOpen(false)}
            onKeyDown={() => setIsOpen(false)}
        >
            <List>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <SettingsIcon/>
                        </ListItemIcon>
                        <ListItemText primary={'Settings'}/>
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    );

    return (
        <Box>
            <AppBar position="static">
                <Toolbar>
                    <Hidden only={['xl', 'lg']}>
                        <IconButton
                            onClick={() => setIsOpen(true)}
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{mr: 2}}
                        >
                            <MenuIcon/>
                        </IconButton>
                    </Hidden>
                    <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                        Movies Recommendation
                    </Typography>
                </Toolbar>
            </AppBar>
            <h1>Eneyida TV</h1>
            <Drawer
                anchor='left'
                open={isOpen}
                onClose={() => setIsOpen(false)}
            >
                {list()}
            </Drawer>
        </Box>
    );
};

