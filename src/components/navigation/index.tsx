import React, {useState} from 'react';
import {
    AppBar,
    Box,
    Button,
    Drawer,
    Hidden,
    IconButton,
    Link,
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
import {Link as RouterLink} from "react-router-dom";

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
                        <Link component={RouterLink} to={'settings'}>
                            <ListItemText primary={'Settings'}/>
                        </Link>
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    );

    return (
        <Box sx={{flexGrow: 1}}>
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
                    <Link component={RouterLink} to={'/'} sx={{flexGrow: 1}}>
                        <Typography variant="h6" component="div"
                                    style={{color: 'white'}}>
                            Movies Recommendation
                        </Typography>
                    </Link>
                    <Box sx={{display: {xs: 'none', lg: 'flex'}}}>
                        <Link component={RouterLink} to={'settings'}>
                            <Button sx={{my: 2, color: 'white', display: 'block'}}>
                                Settings
                            </Button>
                        </Link>
                    </Box>

                </Toolbar>
            </AppBar>
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

