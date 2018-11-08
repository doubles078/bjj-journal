import React from "react";
import PropTypes from "prop-types";
import Avatar from "@material-ui/core/Avatar";
import UserIcon from "@material-ui/icons/PermIdentity";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Grid from "@material-ui/core/Grid";

const styles = theme => ({
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    maxWidth: 400,

    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme
      .spacing.unit * 3}px`
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main
  },
  listItem: {
    textTransform: "capitalize"
  }
});

function PaperSheet({ classes, name, gym, rank }) {
  return (
    <Grid container spacing={16}>
      <Grid item xs={12}>
        <Typography variant="h4" component="h2">
          Profile
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Paper className={classes.paper}>
          <Avatar className={classes.avatar}>
            <UserIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            {name}
          </Typography>

          <List>
            <ListItem>
              <ListItemText primary={gym} secondary="Gym" />
            </ListItem>
            <ListItem>
              <ListItemText
                className={classes.listItem}
                primary={rank + " Belt"}
                secondary="Rank"
              />
            </ListItem>
          </List>
        </Paper>
      </Grid>
    </Grid>
  );
}

PaperSheet.propTypes = {
  classes: PropTypes.object.isRequired,
  gym: PropTypes.string,
  rank: PropTypes.string
};

export default withStyles(styles)(PaperSheet);
