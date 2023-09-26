import React, { useState } from 'react'; 
import {
    Button,
    Drawer,
    ListItemButton,
    List,
    ListItemText,
    AppBar,
    Toolbar,
    IconButton,
    Stack,
    Typography,
    Divider,
    CssBaseline,
    Box 
} from '@mui/material'; 
import { useNavigate } from 'react-router-dom'; 
import HomeIcon from '@mui/icons-material/Home';
import HolidayVillageIcon from '@mui/icons-material/HolidayVillage';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import MenuIcon from '@mui/icons-material/Menu';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';

import { theme } from '../../../Theme/themes'

const menuWidth = 200

const menuStyles = {
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        }),
    },
    appBarShift: {
        width: `calc(100% - ${menuWidth}px)`,
        marginLeft: menuWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut, //number 
            duration: theme.transitions.duration.enteringScreen //number
        }),
    },
    menuButton: {
        marginRight: theme.spacing(2) //default it 8px * 2 == 16px 
    },
    hide: {
        display: 'none'
    },
    menu: {
        width: menuWidth,
        flexShrink: 0
    },
    menuPaper: {
        width: menuWidth
    },
    menuHeader: {
        display: 'flex',
        width: menuWidth,
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar, //spread operator is taking the rest of the properties from theme.mixins.toolbar 
        justifyContent: 'flex-end'
    },
    content: {
        transition: theme.transitions.create('margin', { //shifting it back to original position
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        }),
        marginLeft: 0
    },
    contentShift: {
        transition: theme.transitions.create('margin', { //shifting out content 
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen
        }),
        marginLeft: 0
    },
    toolbar: {
        display: 'flex'
    },
    toolbarButton: {
        marginLeft: 'auto',
        backgroundColor: theme.palette.primary.contrastText
    },
    signInStack: {
        position: 'absolute', 
        top: '20%', 
        right:'150px',
        color:'#000'
    }
}

export const NavBar = () => {
    const navigate = useNavigate(); //instantiating our useNavigate() hook 
    const [ open, setOpen ] = useState(false); 


    const handleDrawerOpen = () => {
        setOpen(true)
    }

    const handleDrawerClose = () => {
        setOpen(false)
    }

    const navLinks = [
        {
            text: 'Home',
            icon: <HomeIcon/>,
            onClick: () => {navigate('/')}
        },
        {
            text: 'Sign In',
            icon: <LockOpenIcon />,
            onClick: () => {navigate('/auth')}
        },
        {
            text: 'Register',
            icon: <AppRegistrationIcon />,
            onClick: () => {navigate('/register')}
        },
        {
            text: 'My Properties',
            icon: <HolidayVillageIcon />,
            onClick: () => {navigate('/properties')}
        },
    ]

    return (
        <Box sx={{display: 'flex'}}>
            <CssBaseline />
            <AppBar 
                sx={ open ? menuStyles.appBarShift : menuStyles.appBar }
                position = 'fixed'
            >
                <Toolbar sx={ menuStyles.toolbar }>
                    <IconButton
                        color='inherit'
                        aria-label='open drawer'
                        onClick = { handleDrawerOpen }
                        edge = 'start'
                        sx = { open ? menuStyles.hide : menuStyles.menuButton }
                    >
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
                <Stack direction='row' justifyContent='space-between' alignItems='center' sx={ menuStyles.signInStack }>
                    <Typography variant='body2' sx={{color: 'inherit'}}>
                        User Email 
                    </Typography>
                    <Button 
                        variant = 'outlined'
                        color = 'secondary'
                        size = 'large'
                        sx = {{ marginLeft: '20px'}}
                        onClick = { () => {navigate('/auth')}}>Sign In</Button>
                    <Button 
                        variant = 'outlined'
                        color = 'secondary'
                        size = 'large'
                        sx = {{ marginLeft: '20px'}}
                        onClick = { () => {navigate('/register')}}>Register</Button>
                </Stack>
            </AppBar>
            <Drawer 
                sx = { open ? menuStyles.menu : menuStyles.hide }
                variant = 'persistent'
                anchor = 'left'
                open = {open}
            >
                <Box sx = { menuStyles.menuHeader }>
                    <IconButton onClick={handleDrawerClose}>
                        <MenuIcon />
                    </IconButton>
                </Box>
                <Divider />
                <List>
                    { navLinks.map((item) => {
                        // searching for the variables with the same name on item object
                        const { text, icon, onClick } = item; 
                        return (
                            <ListItemButton key={text} onClick={onClick}>
                                <ListItemText primary={text} />
                                { icon }
                            </ListItemButton>
                        )
                    })}
                </List>
            </Drawer>
        </Box>
    )

}