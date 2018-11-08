import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import Cyan from "@material-ui/core/colors/cyan";
import Pink from "@material-ui/core/colors/pink";
import Amber from "@material-ui/core/colors/amber";

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingBottom: theme.spacing.unit * 2
  },
  card: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "3rem",
    minWidth: "125px"
  }
});

function MonthRecapCard({
  classes,
  classCount,
  openMatCount,
  giCount,
  noGiCount
}) {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  const month = new Date().getMonth();
  const currentMonthName = monthNames[month];
  return (
    <div className={classes.root}>
      <Grid container spacing={16}>
        <Grid item xs={12}>
          <Typography variant="h4" component="h2">
            {currentMonthName} Summary
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={3}>
          <Card className={classes.card}>
            <Typography variant="h4" component="h4">
              {classCount}
            </Typography>
            <Typography variant="h6" component="h4">
              Classes
            </Typography>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={3}>
          <Card className={classes.card}>
            <Typography variant="h4" component="h4">
              {openMatCount}
            </Typography>
            <Typography variant="h6" component="h4">
              Open Mat
            </Typography>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={3}>
          <Card className={classes.card}>
            <Typography variant="h4" component="h4">
              {giCount}
            </Typography>
            <Typography variant="h6" component="h4">
              Gi
            </Typography>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={3}>
          <Card className={classes.card}>
            <Typography variant="h4" component="h4">
              {noGiCount}
            </Typography>
            <Typography variant="h6" component="h4">
              No Gi
            </Typography>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

MonthRecapCard.propTypes = {
  classes: PropTypes.object.isRequired,
  classCount: PropTypes.number,
  openMatCount: PropTypes.number,
  giCount: PropTypes.number,
  noGiCount: PropTypes.number
};

export default withStyles(styles)(MonthRecapCard);
