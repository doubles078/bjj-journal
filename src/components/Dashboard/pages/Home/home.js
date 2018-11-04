import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TrainingCard from "../../../TrainingCard";
import NumberCard from "../../../NumberCard";
import Typography from "@material-ui/core/Typography";
import PracticeList from "../../../PracticeList";

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
          loading: false
        });
      });

    // I Need to do all this stuff after the promise above resolves
    // const trainingSessionKeys = Object.keys(this.state.data.trainingSessions);
    // var latestPost;

    // trainingSessionKeys.map(trainingSession => {
    //   if (this.state.data.trainingSessions[trainingSession].date > latestPost) {
    //     latestPost = this.state.data.trainingSessions[trainingSession];
    //     console.log(latestPost);
    //   }
    // });
  }

  render() {
    const { classes } = this.props;

    return (
      <Grid container className={classes.root}>
        <Grid item xs={12}>
          <h1>I am dashboard</h1>
        </Grid>
        <Grid container spacing={8}>
          <Grid item xs={12}>
            <Typography>Top 3 Things to Practice</Typography>
            <PracticeList />
          </Grid>

          <Grid item xs={12}>
            <Typography>Top 3 Things to Practice</Typography>
          </Grid>
          <Grid item xs={6}>
            <NumberCard type={"Classes"} />
          </Grid>
          <Grid item xs={6}>
            <NumberCard type={"Rolls"} />
          </Grid>
          <Grid item xs={6}>
            <NumberCard type={"Open Mats"} />
          </Grid>
          <Grid item xs={6}>
            <NumberCard type={"Classes this belt"} />
          </Grid>
          <Grid item xs={12}>
            <Typography>Last Training Session</Typography>
          </Grid>
          <Grid item xs={12}>
            {this.state.loading && "IM LOADING"}
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
