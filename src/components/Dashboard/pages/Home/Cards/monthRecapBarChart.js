import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import {
  VictoryBar,
  VictoryChart,
  VictoryAxis,
  VictoryTheme,
  VictoryStack
} from "victory";
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

function MonthRecapBarChart(props) {
  const { classes } = props;

  const classesTrained = [
    { weekInCurrentMonth: 1, daysTrainedInWeek: 3 },
    { weekInCurrentMonth: 2, daysTrainedInWeek: 2 },
    { weekInCurrentMonth: 3, daysTrainedInWeek: 4 },
    { weekInCurrentMonth: 4, daysTrainedInWeek: 2 }
  ];

  const openmatsTrained = [
    { weekInCurrentMonth: 1, daysTrainedInWeek: 2 },
    { weekInCurrentMonth: 2, daysTrainedInWeek: 1 },
    { weekInCurrentMonth: 3, daysTrainedInWeek: 1 },
    { weekInCurrentMonth: 4, daysTrainedInWeek: 2 }
  ];
  return (
    <div className={classes.root}>
      <Grid container spacing={16}>
        <Grid item xs={12}>
          <Paper className={classes.paper} elevation={1}>
            <Grid container spacing={16}>
              <Grid item xs={6} className={classes.barContainer}>
                <Typography variant="h5" component="h4">
                  Classes and Open Mats This Month
                </Typography>
                <VictoryChart
                  // domainPadding will add space to each side of VictoryBar to
                  // prevent it from overlapping the axis
                  domainPadding={20}
                  theme={VictoryTheme.material}
                  className={classes.barChart}
                >
                  <VictoryAxis
                    // tickValues specifies both the number of ticks and where
                    // they are placed on the axis

                    tickFormat={["Week 1", "Week 2", "Week 3", "Week 4"]}
                  />
                  <VictoryAxis
                    dependentAxis
                    // tickFormat specifies how ticks should be displayed
                    tickFormat={x => Number(x)}
                  />
                  <VictoryStack>
                    <VictoryBar
                      data={classesTrained}
                      x="weekInCurrentMonth"
                      y="daysTrainedInWeek"
                    />
                    <VictoryBar
                      data={openmatsTrained}
                      x="weekInCurrentMonth"
                      y="daysTrainedInWeek"
                    />
                  </VictoryStack>
                </VictoryChart>
              </Grid>
              <Grid item xs={6} className={classes.barContainer}>
                Put a calendar over here
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

MonthRecapBarChart.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MonthRecapBarChart);
