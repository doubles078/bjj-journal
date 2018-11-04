import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TrainingCard from "../../../TrainingCard";
import fire from "../../../../config/fire";

const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden"
  },
  gridList: {
    width: 500,
    height: 450
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)"
  }
});

class Feed extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: "",
      loading: true
    };
  }

  componentDidMount() {
    const userid = fire.auth().currentUser.uid;
    const _this = this;
    fire
      .database()
      .ref("users/" + userid + "/trainingSessions")
      .once("value", function(snapshot) {
        _this.setState({ data: snapshot.val(), loading: false });
      });
  }

  render() {
    const { classes } = this.props;
    const { data } = this.state;
    let trainingSessionList = [];

    for (let key in data) {
      trainingSessionList.push(data[key]);
    }

    return (
      <Grid container className={classes.root}>
        <Grid item xs={12}>
          <h1>My Feed</h1>
        </Grid>
        <Grid container spacing={16}>
          {!this.state.loading &&
            trainingSessionList.map(trainingSession => (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                lg={3}
                key={trainingSession.time}
              >
                <TrainingCard
                  technique={trainingSession.technique}
                  notes={trainingSession.notes}
                  date={trainingSession.date}
                />
              </Grid>
            ))}
        </Grid>
      </Grid>
    );
  }
}

Feed.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Feed);
