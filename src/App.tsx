import React, {useState} from 'react';
import {
    AppBar,
    Box,
    Button,
    CssBaseline,
    Divider,
    Drawer, Hidden,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Toolbar,
    Typography
} from "@mui/material";
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu'

export const App = () => {
    const [IsDrawerOpen, setIsDrawerOpen] = useState<boolean>(false)


    const list = () => (
        <Box
            sx={{width: '250px'}}
            role="presentation"
            onClick={() => setIsDrawerOpen(false)}
            onKeyDown={() => setIsDrawerOpen(false)}
        >
            <List>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon/> : <MailIcon/>}
                            </ListItemIcon>
                            <ListItemText primary={text}/>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider/>
            <List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon/> : <MailIcon/>}
                            </ListItemIcon>
                            <ListItemText primary={text}/>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );


    return (
        <>
            <CssBaseline/>
            <Box>
                <AppBar position="static">
                    <Toolbar>
                        <Hidden only={['xl', 'lg']}>
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
                        </Hidden>
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
                    {list()}
                </Drawer>
            </Box>
        </>
    );
};

