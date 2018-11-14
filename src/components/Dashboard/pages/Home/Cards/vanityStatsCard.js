import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import { VictoryPie, VictoryLabel } from "victory";

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

function VanityStatsCard(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={16}>
        <Grid item xs={12}>
          <Typography variant="h4" component="h2">
            Fun Stats
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper} elevation={1}>
            <Grid container spacing={16}>
              <Grid item xs={4} className={classes.barContainer}>
                <VictoryPie
                  innerRadius={100}
                  data={[{ x: "Gi", y: 6 }, { x: "Nogi", y: 2 }]}
                />
                <VictoryLabel
                  textAnchor="middle"
                  style={{ fontSize: 20 }}
                  x={200}
                  y={200}
                  text="75% Gi"
                />
              </Grid>
              <Grid item xs={4} className={classes.barContainer}>
                <VictoryPie
                  innerRadius={100}
                  data={[{ x: "Class", y: 7 }, { x: "Open Mat", y: 3 }]}
                />
                <VictoryLabel
                  textAnchor="middle"
                  style={{ fontSize: 20 }}
                  x={200}
                  y={200}
                  text="68% Class"
                />
              </Grid>
              <Grid item xs={4} className={classes.barContainer}>
                <VictoryPie
                  innerRadius={100}
                  data={[
                    { x: "Monday", y: 6 },
                    { x: "Tuesday", y: 2 },
                    { x: "Wednesday", y: 10 },
                    { x: "Thursday", y: 2 },
                    { x: "Friday", y: 5 },
                    { x: "Saturday", y: 2 },
                    { x: "Sunday", y: 2 }
                  ]}
                />
                <VictoryLabel
                  textAnchor="middle"
                  style={{ fontSize: 20 }}
                  x={200}
                  y={200}
                  text="43% Wednesday"
                />
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

VanityStatsCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(VanityStatsCard);
