import React, {useCallback, useContext, useState} from 'react';
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
    ListItemText, Switch,
    Toolbar,
    Typography
} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import SettingsIcon from '@mui/icons-material/Settings';
import {Link as RouterLink} from "react-router-dom";
import {AppContext} from "../../context";
import {LOCALES} from "../../variables";

export const Navigation = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const {state, dispatch} = useContext(AppContext)

    const setLanguage = useCallback((locale: string) => {
        dispatch({
            type: 'setLocale',
            locale
        })
    }, [])

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
                    <Link component={RouterLink} to={'/eneyida'} sx={{flexGrow: 1}}>
                        <Typography variant="h6" component="div"
                                    style={{color: 'white'}}>
                            Movies Recommendation
                        </Typography>
                    </Link>
                    <Box sx={{m: '0 10px 0 0'}}>
                        <Button sx={{color: 'white'}}
                                disabled={state.locale === LOCALES.UKRAINIAN}>
                            en
                        </Button>
                        <Switch color={'default'} value={state.locale} onChange={() => {
                            setLanguage(
                                state.locale === LOCALES.UKRAINIAN ? LOCALES.ENGLISH : LOCALES.UKRAINIAN
                            )
                        }}/>
                        <Button sx={{color: 'white'}}
                                disabled={state.locale === LOCALES.ENGLISH}>
                            uk


                        </Button>
                    </Box>
                    <Box sx={{display: {xs: 'none', lg: 'flex'}}}>
                        <Button component={RouterLink} to={'settings'}
                                sx={{my: 2, color: 'white', display: 'block'}}>
                            Settings
                        </Button>
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

