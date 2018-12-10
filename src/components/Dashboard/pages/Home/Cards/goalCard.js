import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import StarIcon from "@material-ui/icons/Star";

const styles = theme => ({
  root: {
    ...theme.mixins.gutters()
  },
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
    <div className={classes.root}>
      <Grid container spacing={16}>
        <Grid item xs={12}>
          <Typography variant="h4" component="h2">
            Training Goal
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Avatar className={classes.avatar}>
              <StarIcon />
            </Avatar>
            <Typography component="p" variant="h5">
              {!goal && (
                <p>
                  Click <Link to="/profile">here</Link> to set a goal for your
                  training.
                </p>
              )}
              {goal && goal}
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

GoalCard.propTypes = {
  classes: PropTypes.object.isRequired,
  goal: PropTypes.string
};

export default withStyles(styles)(GoalCard);
