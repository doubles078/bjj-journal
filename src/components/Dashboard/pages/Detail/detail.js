import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import FormHelperText from "@material-ui/core/FormHelperText";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import DeleteIcon from "@material-ui/icons/Delete";

import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import { Redirect } from "react-router-dom";
import fire from "../../../../config/fire";

const styles = theme => ({
  root: {
    width: "auto",
    marginLeft: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2,
    [theme.breakpoints.up(600 + theme.spacing.unit * 2 * 2)]: {
      maxWidth: 600,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },

  error: {
    color: "red"
  },

  paper: {
    marginTop: 0,
    marginBottom: theme.spacing.unit * 3,
    padding: theme.spacing.unit * 2,
    [theme.breakpoints.up(600 + theme.spacing.unit * 3 * 2)]: {
      marginTop: theme.spacing.unit * 0,
      marginBottom: theme.spacing.unit * 6,
      padding: theme.spacing.unit * 3
    }
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
  },
  notes: {
    display: "flex"
  },
  button: {
    marginTop: theme.spacing.unit * 3
  },
  rightIcon: {
    marginLeft: theme.spacing.unit
  }
});

class DetailPage extends Component {
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
      date: "",
      time: "",
      sessionid: "",
      loading: true,
      redirect: false,
      error: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }

  componentDidMount() {
    const _this = this;
    const queryParam = new URLSearchParams(window.location.search).get("id");

    fire
      .database()
      .ref("users/" + this.state.userid + "/trainingSessions")
      .orderByChild("date")
      .on("value", data => {
        const dataKeys = Object.keys(data.val());

        dataKeys.map(key => {
          const currentSession = data.val()[key];

          if (currentSession.date === Number(queryParam)) {
            const currentDate = new Date(currentSession.date)
              .toISOString()
              .substr(0, 10);

            _this.setState({
              type: currentSession.type,
              style: currentSession.style,
              technique: currentSession.technique,
              notes: currentSession.notes,
              didwell: currentSession.didwell,
              workon: currentSession.workon,
              date: currentSession.date,
              datestring: currentDate,
              time: currentSession.time,
              sessionid: key,
              loading: false
            });
          }
        });
      });
  }

  handleChange(e) {
    e.preventDefault();

    if (e.currentTarget.name === "date") {
      const dateSplit = e.currentTarget.value.split("-");
      const dateCleaned = new Date(dateSplit[0], dateSplit[1], dateSplit[2]);
      const milliDate = dateCleaned.getTime();

      this.setState({
        [e.currentTarget.name]: milliDate,
        datestring: e.currentTarget.value,
        time: new Date().getTime()
      });

      return;
    }

    this.setState({
      [e.currentTarget.name]: e.currentTarget.value,
      time: new Date().getTime()
    });
  }

  firebaseUpdate = () => {
    fire
      .database()
      .ref(
        "users/" +
          this.state.userid +
          "/trainingSessions/" +
          this.state.sessionid
      )
      .update({
        type: this.state.type,
        style: this.state.style,
        technique: this.state.technique,
        notes: this.state.notes,
        didwell: this.state.didwell,
        workon: this.state.workon,
        date: this.state.date,
        time: this.state.time
      });
  };

  handleSubmit(e) {
    e.preventDefault();
    const { technique, notes, didwell, workon } = this.state;

    if (!technique || !notes || !didwell || !workon) {
      this.setState({ error: true });
      return;
    } else {
      this.setState({ error: false });
      this.firebaseSubmit();
    }
  }

  firebaseSubmit = () => {
    fire
      .database()
      .ref(
        "users/" +
          this.state.userid +
          "/trainingSessions/" +
          this.state.sessionid
      )
      .update({
        type: this.state.type,
        style: this.state.style,
        technique: this.state.technique,
        notes: this.state.notes,
        didwell: this.state.didwell,
        workon: this.state.workon,
        date: this.state.date,
        time: this.state.time
      });
  };

  handleRemove(e) {
    e.preventDefault();
    this.firebaseRemove();
    this.setRedirect();
  }

  firebaseRemove = () => {
    fire
      .database()
      .ref(
        "users/" +
          this.state.userid +
          "/trainingSessions/" +
          this.state.sessionid
      )
      .remove();
  };

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
    const {
      type,
      style,
      technique,
      notes,
      didwell,
      workon,
      datestring
    } = this.state;

    return (
      <Grid container className={classes.root}>
        {this.renderRedirect()}
        <Grid container spacing={8}>
          <Grid item xs={12}>
            <Typography variant="h4" gutterBottom>
              Session Details
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <form
                noValidate
                autoComplete="off"
                className={classes.form}
                onSubmit={this.handleSubmit}
              >
                <Grid item xs={12} sm={12}>
                  <TextField
                    onChange={this.handleChange}
                    id="date"
                    label="Date"
                    type="date"
                    name="date"
                    value={datestring}
                    className={classes.textField}
                    InputLabelProps={{
                      shrink: true
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={12}>
                  {this.state.error && (
                    <FormHelperText className={classes.error}>
                      Looks like you forgot to fill something out!
                    </FormHelperText>
                  )}
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
                    error={this.state.error && !this.state.technique}
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
                    error={this.state.error && !this.state.notes}
                    className={classes.notes}
                    id="notes"
                    name="notes"
                    value={notes}
                    rows="8"
                    label="Notes"
                    multiline
                    onChange={this.handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    error={this.state.error && !this.state.didwell}
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
                    error={this.state.error && !this.state.workon}
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
                    Update
                  </Button>

                  <Button
                    variant="contained"
                    color="default"
                    className={classes.button}
                    onClick={this.handleRemove}
                  >
                    Delete
                    <DeleteIcon className={classes.rightIcon} />
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

DetailPage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(DetailPage);
