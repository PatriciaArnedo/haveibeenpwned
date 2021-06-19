import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
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
        <div className="email-form">
            <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit}>
            <Grid container>
                <Grid item>
                    <TextField
                        id="outlined-basic"
                        label="Email"
                        value={email}
                        onChange={handleChange}
                        variant="outlined"
                    />
                </Grid>
                <Grid item>
                    <Button type="submit">Submit</Button>
                </Grid>
            </Grid>
            </form>
            
        </div>
    )
}

export default EmailForm