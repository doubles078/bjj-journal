import React from "react";
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
import Add from "./pages/Add";

import fire from "../../config/fire";

const drawerWidth = 240;

const styles = theme => ({
  drawerContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    paddingLeft: "24px",
    paddingTop: "10px"
  },
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
      default:
        currentpageContext = "Dashboard";
        currentpage = (
          <Home
            latestPost={this.state.latestPost}
            loading={this.state.loading}
          />
        );
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
