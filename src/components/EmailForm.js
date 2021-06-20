import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(3),
        },

    },
    paper: {
        paddingLeft: 80,
        paddingRight: 80,
        paddingBottom: 50,
        paddingTop: 50,
    },
    textField: {
        width: '35ch'
    }
}))


const EmailForm = (props) => {

    const [email, setEmail] = useState("")
    const handleChange = (event) => {
        setEmail(event.target.value);
    }

    const classes = useStyles();

    const handleSubmit = (event) => {
        event.preventDefault()
        props.onSubmit(email)
    }

    return (
        <Grid className={classes.root} container justify={'center'}>
            <Paper className={classes.paper}>
                <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                    <Grid container alignItems='center' direction={'row'} spacing={1}>
                        <Grid item>
                            <TextField
                                size='small'
                                id="outlined-basic"
                                label="Email"
                                value={email}
                                onChange={handleChange}
                                variant="outlined"
                                className={classes.textField}
                            />
                        </Grid>
                        <Grid item>
                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                            >
                                Submit
                            </Button>
                        </Grid>
                    </Grid>
                </form>

            </Paper>
        </Grid>
    )
}

export default EmailForm