import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TrainingCard from "../../TrainingCard";
import fire from "../../../config/fire";

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
    const user = fire.auth().currentUser.uid;
    const _this = this;
    fire
      .database()
      .ref("users/" + user)
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
        {console.log(this.state)}
        <Grid item xs={12}>
          <h1>I Am Feed</h1>
        </Grid>
        <Grid container spacing={8}>
          <Grid item xs={12}>
            {!this.state.loading &&
              trainingSessionList.map(trainingSession => (
                <TrainingCard
                  key={trainingSession.time}
                  technique={trainingSession.technique}
                  notes={trainingSession.notes}
                  date={trainingSession.date}
                />
              ))}
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

Feed.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Feed);
