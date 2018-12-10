import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";
import TrainingCard from "../../../../TrainingCard";

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),

    paddingBottom: theme.spacing.unit * 2
  },
  paper: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  }
});

function LastSessionCard(props) {
  const { classes, latestPost, loading } = props;
  return (
    <div className={classes.root}>
      <Grid container spacing={16}>
        <Grid item xs={12}>
          <Typography variant="h4" component="h2">
            Last Training Session
          </Typography>
        </Grid>
        <Grid item xs={12}>
          {loading && <CircularProgress className={classes.progress} />}
          {!loading && (
            <TrainingCard
              technique={latestPost.technique}
              date={latestPost.date}
              notes={latestPost.notes}
              type={latestPost.type}
              style={latestPost.style}
            />
          )}
        </Grid>
      </Grid>
    </div>
  );
}

LastSessionCard.propTypes = {
  classes: PropTypes.object.isRequired,
  latestPost: PropTypes.object
};

export default withStyles(styles)(LastSessionCard);
