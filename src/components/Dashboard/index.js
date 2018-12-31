import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import ListData from "./components/Drawer";
import DashboardAppBar from "./components/AppBar";
import Home from "./pages/Home";
import MyFeed from "./pages/Feed";
import DetailPage from "./pages/Detail";
import Add from "./pages/Add";
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
  drawerContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    paddingLeft: "24px",
    paddingTop: "10px"
  },
  pageContainer: {
    margin: "auto"
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
    overflowY: "scroll",
    padding: theme.spacing.unit * 3
  }
});

class DashboardContainer extends Component {
  state = {
    userid: fire.auth().currentUser.uid,
    mobileOpen: false,
    latestPost: "",
    loading: true
  };

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };

  render() {
    const { classes, theme } = this.props;
    let currentpage;
    let currentpageContext;

    switch (this.props.currentpage) {
      case "myfeed":
        currentpage = <MyFeed />;
        currentpageContext = "My Feed";
        break;
      case "add":
        currentpage = <Add />;
        currentpageContext = "Add a Session";
        break;
      case "detailpage":
        currentpage = <DetailPage />;
        currentpageContext = "Detail page";
        break;
      default:
        currentpageContext = "Dashboard";
        currentpage = <Home />;
        break;
    }

    const drawer = (
      <div>
        <div className={classes.drawerContainer}>
          <Typography component="h2" variant="h5" gutterBottom>
            Little Fighter Dude
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            BETA
          </Typography>
        </div>
        <Divider />
        <ListData />
      </div>
    );

    return (
      <div className={classes.root}>
        <DashboardAppBar
          toggle={this.handleDrawerToggle}
          currentpageContext={currentpageContext}
        />
        <Hidden lgUp>
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
        <Hidden mdDown implementation="css">
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
          <div className={classes.pageContainer}>{currentpage}</div>
        </main>
      </div>
    );
  }
}

DashboardContainer.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(DashboardContainer);
