import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  },
  card: {
    display: "flex",
    flexDirection: "column"
  }
});

function MonthRecapCard({ classes, classNumber, openMatNumber }) {
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
    <div>
      <Paper className={classes.root} elevation={1}>
        <Typography variant="h5" component="h3">
          {currentMonthName}
        </Typography>
        <Grid container spacing={16}>
          <Grid item xs={6}>
            <Card className={classes.card}>
              <Typography>{classNumber}</Typography>
              <Typography>Classes</Typography>
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Card className={classes.card}>
              <Typography>{openMatNumber}</Typography>
              <Typography>Open Mats</Typography>
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Card className={classes.card}>Gi</Card>
          </Grid>
          <Grid item xs={6}>
            <Card>No Gi</Card>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

MonthRecapCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MonthRecapCard);
