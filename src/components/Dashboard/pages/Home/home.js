import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";
import TrainingCard from "../../../TrainingCard";
import MonthRecapCard from "./Cards/monthRecapCard";
import ProfileCard from "./Cards/profileCard";
import TotalRecapCard from "./Cards/totalRecapCard";

import fire from "../../../../config/fire";

const styles = theme => ({
  root: {
    display: "flex",
    justifyContent: "center",
    padding: theme.spacing.unit * 2
  },
  paper: {
    height: 140,
    width: 100
  },
  control: {
    padding: theme.spacing.unit * 2
  }
});

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userid: fire.auth().currentUser.uid,
      loading: true
    };
  }

  componentDidMount() {
    const _this = this;
    const userid = this.state.userid;

    fire
      .database()
      .ref("users/" + userid)
      .once("value")
      .then(function(snapshot) {
        const trainingSessions = snapshot.val().trainingSessions;
        const trainingKeys = Object.keys(trainingSessions);

        const latest = trainingKeys.reduce(
          (acc, loc) =>
            trainingSessions[acc].date < trainingSessions[loc].date ? acc : loc
        );

        _this.setState({
          latestPost: trainingSessions[latest],
          goal: snapshot.val().profile.currentgoal,
          loading: false
        });
      });
  }

  render() {
    const { classes } = this.props;

    return (
      <Grid container className={classes.root}>
        <Grid item xs={12}>
          <Typography variant="overline">Current Goal</Typography>
          <Typography variant="h5">{this.state.goal}</Typography>
        </Grid>
        <Grid container spacing={16}>
          <Grid item xs={12} sm={6}>
            <MonthRecapCard classNumber={5} openMatNumber={8} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <ProfileCard />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TotalRecapCard />
          </Grid>

          <Grid item xs={12} sm={6}>
            <Typography>Last Training Session</Typography>

            {this.state.loading && (
              <CircularProgress className={classes.progress} />
            )}
            {!this.state.loading && (
              <TrainingCard
                technique={this.state.latestPost.technique}
                date={this.state.latestPost.date}
                notes={this.state.latestPost.notes}
              />
            )}
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired,
  loading: PropTypes.bool
};

export default withStyles(styles)(Dashboard);
