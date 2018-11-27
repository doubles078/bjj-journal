import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import classNames from "classnames";

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
    minWidth: "90px",
    color: "#fff"
  },
  classesColor: {
    backgroundColor: "#2196F3"
  },
  openmatColor: {
    backgroundColor: "#4CAF50"
  },
  giColor: {
    backgroundColor: "#673AB7"
  },
  nogiColor: {
    backgroundColor: "#607D8B"
  }
});

function MonthRecapCard({
  classes,
  classCount,
  openMatCount,
  giCount,
  noGiCount,
  currentMonthName
}) {
  return (
    <div className={classes.root}>
      <Grid container spacing={16}>
        <Grid item xs={12}>
          <Typography variant="h4" component="h2">
            {currentMonthName} Summary
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={3}>
          <Card className={classNames(classes.card, classes.classesColor)}>
            <Typography variant="h4" component="h5" color="inherit">
              {classCount}
            </Typography>
            <Typography variant="h6" component="h4" color="inherit">
              Classes
            </Typography>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={3}>
          <Card className={classNames(classes.card, classes.openmatColor)}>
            <Typography variant="h4" component="h5" color="inherit">
              {openMatCount}
            </Typography>
            <Typography variant="h6" component="h4" color="inherit">
              Open Mat
            </Typography>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={3}>
          <Card className={classNames(classes.card, classes.giColor)}>
            <Typography variant="h4" component="h5" color="inherit">
              {giCount}
            </Typography>
            <Typography variant="h6" component="h4" color="inherit">
              Gi
            </Typography>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={3}>
          <Card className={classNames(classes.card, classes.nogiColor)}>
            <Typography variant="h4" component="h5" color="inherit">
              {noGiCount}
            </Typography>
            <Typography variant="h6" component="h4" color="inherit">
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
