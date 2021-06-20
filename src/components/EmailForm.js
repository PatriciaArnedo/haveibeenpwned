import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { borders } from '@material-ui/system';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(3),
        },

    },
    paper: {
        padding: 50
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
        //TODO Validate email adddress here maybe?
        props.onSubmit(email)
    }

    return (
        <Grid className={classes.root} container justify={'center'}>
            <Paper className={classes.paper}>
                <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                    <Grid container alignItems='center' direction={'column'} spacing={1}>
                        <Grid item>
                            <TextField
                                size='small'
                                id="outlined-basic"
                                label="Email"
                                value={email}
                                onChange={handleChange}
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item>
                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                size="normal"
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