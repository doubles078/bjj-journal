import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { VictoryPie } from "victory";
import { Typography } from "@material-ui/core";

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  },
  paper: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  },
  barChart: {},
  barContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    flexDirection: "column"
  }
});

function AllTimeRecapPieChartCard(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={16}>
        <Grid item xs={12}>
          <Typography variant="h4" component="h2">
            All Time Stats
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper} elevation={1}>
            <Grid container spacing={16}>
              <Grid item xs={6} className={classes.barContainer}>
                <Typography variant="h5" component="h4">
                  Gi vs No Gi
                </Typography>
                <VictoryPie data={[{ x: "Gi", y: 6 }, { x: "No Gi", y: 2 }]} />
              </Grid>
              <Grid item xs={6} className={classes.barContainer}>
                <Typography variant="h5" component="h4">
                  Gi vs No Gi
                </Typography>
                <VictoryPie data={[{ x: "Gi", y: 6 }, { x: "No Gi", y: 2 }]} />
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

AllTimeRecapPieChartCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AllTimeRecapPieChartCard);
