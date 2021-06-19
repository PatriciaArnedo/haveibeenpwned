import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    appBar: {
        background: '#FFFFFF',
    },
    logo: {
        height: 30.42,
    },
    toolbar: {
        height: 100,
    },
}))

const Header = () => {
    const classes = useStyles();
    return (

        <AppBar elevation={0} position="sticky" className={classes.appBar}>
            <Toolbar className={classes.toolbar} >
                <img className={classes.logo} src="https://i.imgur.com/JX2ISDI.png" alt="JupiterOne Company Logo" />
                <Typography variant="h6" className={classes.title}>

                </Typography>
            </Toolbar>
        </AppBar>

    )
}

export default Header
