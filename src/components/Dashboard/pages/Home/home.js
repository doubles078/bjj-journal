import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import MonthRecapCard from "./Cards/monthRecapCard";
import AllTimeStatsCard from "./Cards/AllTimeStatsCard/allTimeStatsCard";
import GoalCard from "./Cards/goalCard";

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
      .on("value", snapshot => {
        const trainingSessions = snapshot.val().trainingSessions;
        const trainingKeys = Object.keys(trainingSessions);

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
        const currentMonth = new Date().getMonth();
        const currentMonthName = monthNames[currentMonth];
        let classCount = 0;
        let giCount = 0;
        let noGiCount = 0;
        let openMatCount = 0;
        let monthlyClassCount = 0;
        let monthlyGiCount = 0;
        let monthlyNoGiCount = 0;
        let monthlyOpenMatCount = 0;

        //This is broken
        const latest = trainingSessions[trainingKeys[trainingKeys.length - 1]];

        trainingKeys.forEach(key => {
          trainingSessions[key].style === "gi"
            ? (giCount += 1)
            : (noGiCount += 1);
          trainingSessions[key].type === "class"
            ? (classCount += 1)
            : (openMatCount += 1);
        });

        trainingKeys.forEach(key => {
          const sessionMonth = new Date(trainingSessions[key].date).getMonth();

          if (sessionMonth === currentMonth) {
            trainingSessions[key].style === "gi"
              ? (monthlyGiCount += 1)
              : (monthlyNoGiCount += 1);
            trainingSessions[key].type === "class"
              ? (monthlyClassCount += 1)
              : (monthlyOpenMatCount += 1);
          }
        });

        _this.setState({
          trainingSessions: snapshot.val().trainingSessions,
          latestPost: latest,
          goal: snapshot.val().profile.currentgoal,
          name: snapshot.val().profile.name,
          gym: snapshot.val().profile.gym,
          rank: snapshot.val().profile.rank,
          giCount: giCount,
          noGiCount: noGiCount,
          classCount: classCount,
          openMatCount: openMatCount,
          monthlyClassCount: monthlyClassCount,
          monthlyGiCount: monthlyGiCount,
          monthlyNoGiCount: monthlyNoGiCount,
          monthlyOpenMatCount: monthlyOpenMatCount,
          currentMonthName: currentMonthName,
          loading: false
        });
      });
  }

  render() {
    const { classes } = this.props;

    return (
      <Grid container className={classes.root}>
        {this.state.loading && <p>Im loading</p>}
        {!this.state.loading && (
          <Grid container spacing={16}>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <MonthRecapCard
                classCount={this.state.monthlyClassCount}
                openMatCount={this.state.monthlyOpenMatCount}
                giCount={this.state.monthlyGiCount}
                noGiCount={this.state.monthlyNoGiCount}
                currentMonthName={this.state.currentMonthName}
              />
              <Grid container spacing={16}>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                  <GoalCard goal={this.state.goal} />
                </Grid>
              </Grid>
              <Grid container spacing={16}>
                <Grid item xs={12}>
                  <AllTimeStatsCard
                    allPosts={this.state.trainingSessions}
                    classCount={this.state.classCount}
                    openMatCount={this.state.openMatCount}
                    giCount={this.state.giCount}
                    noGiCount={this.state.noGiCount}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        )}
      </Grid>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired,
  loading: PropTypes.bool
};

export default withStyles(styles)(Dashboard);
