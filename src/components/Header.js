import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    color: "#000000",
    fontSize: 26.5,
  },
  appBar: {
    background: "#FFFFFF",
    marginBottom: 30,
  },
  logo: {
    height: 30.42,
    marginRight: 10,
  },
  toolbar: {
    height: 100,
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar elevation={0} position="sticky" className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <img className={classes.logo} src="" alt="Logo" />
        <Typography variant="h6" className={classes.title}>
          haveibeenpwned?
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
