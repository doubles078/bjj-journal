import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import { Redirect } from "react-router-dom";
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
  },
  avatar: {
    margin: `${theme.spacing.unit}px auto`,
    backgroundColor: theme.palette.secondary.main,
    textAlign: "center"
  },
  paper: {
    marginTop: theme.spacing.unit * 6,
    display: "flex",
    flexDirection: "column",
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme
      .spacing.unit * 3}px`
  },
  form: {
    width: "100%", // Fix IE11 issue.
    marginTop: theme.spacing.unit
  },
  formInputs: {
    width: "100%",
    marginTop: theme.spacing.unit * 2
  },
  submit: {
    marginTop: theme.spacing.unit * 3
  }
});

class AddTrainingSession extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userid: fire.auth().currentUser.uid,
      email: fire.auth().currentUser.email,
      type: "class",
      style: "gi",
      technique: "",
      notes: "",
      didwell: "",
      workon: "",
      date: Date.now(),
      time: new Date().getTime(),
      redirect: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    console.log(this.state);
    console.log(fire.auth().currentUser);
    if (this.state.redirect) return <Redirect to={"/dashboard"} />;
  }
  handleChange(e) {
    e.preventDefault();

    this.setState({
      [e.currentTarget.name]: e.currentTarget.value,
      time: new Date().getTime()
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    Object.keys(this.state).map(i => {
      if (this.state[i].length === 0) {
        console.log("Make sure you arent missing anything");
        return false;
      }
      return true;
    });
    fire
      .database()
      .ref("users/" + this.state.userid)
      .push({
        type: this.state.type,
        style: this.state.style,
        technique: this.state.technique,
        notes: this.state.notes,
        didwell: this.state.didwell,
        workon: this.state.workon,
        date: this.state.date,
        time: this.state.time
      });
    this.setRedirect();
    console.log("Submitted");
  }

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to={"/dashboard"} />;
    }
  };

  setRedirect = () => {
    this.setState({
      redirect: true
    });
  };

  render() {
    const { classes } = this.props;
    const { type, style, technique, notes, didwell, workon } = this.state;

    return (
      <Grid container className={classes.root}>
        {this.renderRedirect()}
        <Grid container spacing={8}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <form noValidate autoComplete="off" onSubmit={this.handleSubmit}>
                <Typography variant="h4" gutterBottom>
                  Add a training session
                </Typography>
                <Grid item xs={12} sm={12}>
                  <ToggleButtonGroup
                    value={type}
                    className={classes.formInputs}
                  >
                    <ToggleButton
                      onClick={this.handleChange}
                      name="type"
                      value="class"
                    >
                      Class
                    </ToggleButton>
                    <ToggleButton
                      onClick={this.handleChange}
                      name="type"
                      value="openmat"
                    >
                      Open Mat
                    </ToggleButton>
                    <ToggleButton
                      onClick={this.handleChange}
                      name="type"
                      value="roll"
                    >
                      Roll
                    </ToggleButton>
                  </ToggleButtonGroup>
                </Grid>
                <Grid item xs={12} sm={12}>
                  <ToggleButtonGroup
                    value={style}
                    className={classes.formInputs}
                  >
                    <ToggleButton
                      onClick={this.handleChange}
                      name="style"
                      value="gi"
                    >
                      Gi
                    </ToggleButton>
                    <ToggleButton
                      onClick={this.handleChange}
                      name="style"
                      value="nogi"
                    >
                      No Gi
                    </ToggleButton>
                  </ToggleButtonGroup>
                </Grid>
                <Grid item xs={12} sm={12}>
                  <TextField
                    className={classes.formInputs}
                    id="technique"
                    name="technique"
                    value={technique}
                    label="Main Technique or Focus"
                    fullWidth
                    autoComplete="technique"
                    onChange={this.handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    className={classes.formInputs}
                    id="notes"
                    name="notes"
                    value={notes}
                    label="Notes"
                    multiline
                    fullWidth
                    margin="normal"
                    onChange={this.handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    className={classes.formInputs}
                    id="didwell"
                    name="didwell"
                    value={didwell}
                    label="What I Did Well"
                    multiline
                    fullWidth
                    margin="normal"
                    onChange={this.handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    className={classes.formInputs}
                    id="workon"
                    name="workon"
                    value={workon}
                    label="What I Could Work On"
                    multiline
                    fullWidth
                    margin="normal"
                    onChange={this.handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    variant="contained"
                    className={classes.formInputs}
                    color="secondary"
                    type="submit"
                  >
                    Save
                  </Button>
                </Grid>
              </form>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

AddTrainingSession.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AddTrainingSession);
