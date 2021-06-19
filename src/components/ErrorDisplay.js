import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';

function ErrorDisplay(props) {
    return (
        <Snackbar 
            open={props.open} 
            autoHideDuration={10000} 
            onClose={props.onClose} 
            anchorOrigin={{vertical: 'top', horizontal: 'center'}}
        >
            <Alert onClose={() => props.onClose} severity="error">
            {props.msg}
            </Alert>
        </Snackbar>
    )
}

export default ErrorDisplay
