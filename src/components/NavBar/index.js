import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import logo from "../../assets/logo.png";
import { AuthContext } from "../../App";
import ProfileButton from "./profileButton";
import LoginButton from "./loginButton";

const styles = {
  root: {
    flexGrow: 1,
    zIndex: 10000
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  imgLogo: {
    width: "40px"
  }
};

function ButtonAppBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Link to="/">
            <IconButton
              className={classes.menuButton}
              color="inherit"
              aria-label="Menu"
            >
              <img className={classes.imgLogo} src={logo} alt="Logo" />
            </IconButton>
          </Link>
          <AuthContext.Consumer>
            {user =>
              user ? (
                <ProfileButton />
              ) : (
                <LoginButton text="Login" url="/signin" />
              )
            }
          </AuthContext.Consumer>
        </Toolbar>
      </AppBar>
    </div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ButtonAppBar);
