import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/Inbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import AddIcon from "@material-ui/icons/Add";

const styles = theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  },
  link: {
    textDecoration: "none"
  }
});

const ListData = ({ classes }) => {
  return (
    <div className={classes.root}>
      <List component="nav">
        <Link to="/dashboard" className={classes.link}>
          <ListItem button>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText name="dashboard" primary="Dashboard" />
          </ListItem>
        </Link>

        <Link to="/myfeed" className={classes.link}>
          <ListItem button>
            <ListItemIcon>
              <DraftsIcon />
            </ListItemIcon>
            <ListItemText primary="My Feed" />
          </ListItem>
        </Link>

        <Link to="/add" className={classes.link}>
          <ListItem button>
            <ListItemIcon>
              <AddIcon />
            </ListItemIcon>
            <ListItemText primary="Add a Session" />
          </ListItem>
        </Link>
      </List>
    </div>
  );
};

ListData.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ListData);
