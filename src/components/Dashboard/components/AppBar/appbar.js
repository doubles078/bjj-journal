import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ProfileButton from "../../../NavBar/profileButton";

const drawerWidth = 240;

const styles = theme => ({
  appBar: {
    position: "absolute",
    marginLeft: drawerWidth,
    [theme.breakpoints.up("lg")]: {
      width: `calc(100% - ${drawerWidth}px)`
    }
  },
  navIconHide: {
    [theme.breakpoints.up("lg")]: {
      display: "none"
    }
  },
  toolbar: theme.mixins.toolbar
});

const DashboardAppBar = ({ classes, toggle, currentpageContext }) => {
  return (
    <React.Fragment>
      <AppBar className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="Open drawer"
            onClick={toggle}
            className={classes.navIconHide}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" noWrap>
            {currentpageContext}
          </Typography>
          <ProfileButton />
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

DashboardAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  location: PropTypes.string
};

export default withStyles(styles, { withTheme: true })(DashboardAppBar);
