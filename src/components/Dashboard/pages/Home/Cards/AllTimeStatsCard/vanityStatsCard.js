import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import { VictoryPie, VictoryLabel, VictoryTheme } from "victory";

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
  const {
    classes,
    classCount,
    openMatCount,
    giCount,
    noGiCount,
    dayObjectList
  } = props;

  const totalGiNoGi = noGiCount + giCount;
  const giPercent = (giCount / totalGiNoGi).toFixed(1) * 100;
  const giPercentText = `${giPercent}% Gi`;

  const totalClassMat = noGiCount + giCount;
  const classPercent = (classCount / totalClassMat).toFixed(1) * 100;
  const classPercentText = `${classPercent}% Classes`;

  let pieChartDataforDays = [];
  let largestDay;
  let largestDayNumber = 0;

  dayObjectList.map((day, index, arr) => {
    //Skip the last day in the array because it holds total values
    if (index !== arr.length - 1) {
      if (day.totalClassAndMat !== 0) {
        pieChartDataforDays.push({ x: day.id, y: day.totalClassAndMat });

        if (day.totalClassAndMat > largestDayNumber) {
          console.log(day.totalClassAndMat);
          largestDay = day.id;
          largestDayNumber = day.totalClassAndMat;
        }
      }
    }
  });

  let largestDayPercent =
    (largestDayNumber / dayObjectList[7].totalClassAndMat).toFixed(1) * 100;
  const largestDayText = `${largestDayPercent}% ${largestDay}`;
  console.log(largestDayNumber);
  return (
    <div className={classes.root}>
      <Grid container spacing={16}>
        <Grid item xs={12}>
          <Grid container spacing={16}>
            <Grid item xs={4} className={classes.barContainer}>
              <VictoryPie
                theme={VictoryTheme.material}
                innerRadius={100}
                data={[{ x: "Gi", y: giCount }, { x: "Nogi", y: noGiCount }]}
              />
              <VictoryLabel
                textAnchor="middle"
                style={{ fontSize: 20 }}
                x={200}
                y={200}
                text={giPercentText}
              />
            </Grid>
            <Grid item xs={4} className={classes.barContainer}>
              <VictoryPie
                theme={VictoryTheme.material}
                innerRadius={100}
                data={[
                  { x: "Class", y: classCount },
                  { x: "Open Mat", y: openMatCount }
                ]}
              />
              <VictoryLabel
                textAnchor="middle"
                style={{ fontSize: 20 }}
                x={200}
                y={200}
                text={classPercentText}
              />
            </Grid>
            <Grid item xs={4} className={classes.barContainer}>
              <VictoryPie
                theme={VictoryTheme.material}
                innerRadius={100}
                data={pieChartDataforDays}
              />
              <VictoryLabel
                textAnchor="middle"
                style={{ fontSize: 20 }}
                x={200}
                y={200}
                text={largestDayText}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

VanityStatsCard.propTypes = {
  classes: PropTypes.object.isRequired,
  classCount: PropTypes.number,
  openMatCount: PropTypes.number,
  giCount: PropTypes.number,
  noGiCount: PropTypes.number,
  dayObjectList: PropTypes.object
};

export default withStyles(styles)(VanityStatsCard);
