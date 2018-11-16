import React from "react";
import PropTypes from "prop-types";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import UserIcon from "@material-ui/icons/PermIdentity";

const styles = theme => ({
  paper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme
      .spacing.unit * 3}px`
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main
  }
});

function GoalCard({ classes, goal }) {
  return (
    <Grid container spacing={16}>
      <Grid item xs={12}>
        <Typography variant="h4" component="h2">
          My Goal
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Paper className={classes.paper}>
          <Avatar className={classes.avatar}>
            <UserIcon />
          </Avatar>
          <Typography component="p" variant="h5">
            {goal}
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
}

GoalCard.propTypes = {
  classes: PropTypes.object.isRequired,
  goal: PropTypes.string
};

export default withStyles(styles)(GoalCard);
