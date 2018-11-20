import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TrainingCard from "../../../TrainingCard";

const styles = () => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden"
  },
  gridList: {
    width: 500,
    height: 450
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)"
  }
});

function TitlebarGridList(props) {
  const { classes } = props;

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <h1>Session Details</h1>
      </Grid>
      <Grid container spacing={8}>
        <Grid item xs={12}>
          <TrainingCard />
        </Grid>
      </Grid>
    </Grid>
  );
}

TitlebarGridList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TitlebarGridList);
