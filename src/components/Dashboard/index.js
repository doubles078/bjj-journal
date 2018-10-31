import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import Divider from "@material-ui/core/Divider";
import ListData from "./components/drawer";

import DashboardAppBar from "./components/appbar";
import Home from "./pages/home";
import MyFeed from "./pages/feed";
import Add from "./pages/add";
import fire from "../../config/fire";

const drawerWidth = 240;

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: 440,
    zIndex: 1,
    minHeight: "100vh",
    overflow: "hidden",
    position: "relative",
    display: "flex",
    width: "100%"
  },
  appBar: {
    position: "absolute",
    marginLeft: drawerWidth,
    [theme.breakpoints.up("md")]: {
      width: `calc(100% - ${drawerWidth}px)`
    }
  },
  navIconHide: {
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    [theme.breakpoints.up("md")]: {
      position: "relative"
    }
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    overflow: "scroll",
    padding: theme.spacing.unit * 3
  }
});

class ResponsiveDrawer extends React.Component {
  state = {
    userid: fire.auth().currentUser.uid,
    mobileOpen: false,
    latestPost: "",
    loading: true
  };

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };

  componentDidMount() {
    const _this = this;
    const userid = this.state.userid;
    fire
      .database()
      .ref("users/" + userid)
      .orderByChild("time")
      .limitToLast(1)
      .once("value")
      .then(function(snapshot) {
        _this.setState({ latestPost: snapshot.val(), loading: false });
      });
  }

  render() {
    const { classes, theme } = this.props;

    const drawer = (
      <div>
        <div className={classes.toolbar} />
        <Divider />
        <ListData />
        <Divider />
      </div>
    );

    let currentpage;

    switch (this.props.currentpage) {
      case "myfeed":
        currentpage = <MyFeed />;
        break;
      case "add":
        currentpage = <Add />;
        break;
      default:
        currentpage = (
          <Home
            latestPost={this.state.latestPost}
            loading={this.state.loading}
          />
        );
        break;
    }

    return (
      <div className={classes.root}>
        <DashboardAppBar toggle={this.handleDrawerToggle} />
        <Hidden mdUp>
          <Drawer
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={this.state.mobileOpen}
            onClose={this.handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper
            }}
            ModalProps={{
              keepMounted: true // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden smDown implementation="css">
          <Drawer
            variant="permanent"
            open
            classes={{
              paper: classes.drawerPaper
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          {currentpage}
        </main>
      </div>
    );
  }
}

ResponsiveDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(ResponsiveDrawer);
