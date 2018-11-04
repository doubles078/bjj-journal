import React, { Component } from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import SettingsIcon from "@material-ui/icons/Settings";
import fire from "../../config/fire";

const styles = theme => ({
  layout: {
    width: "auto",
    display: "block", // Fix IE11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: "auto",
      marginRight: "auto"
    }
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

class ProfileSettingsForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userid: fire.auth().currentUser.uid,
      email: fire.auth().currentUser.email,
      name: "",
      gym: "",
      rank: "white",
      currentgoal: "",
      date: Date.now(),
      time: new Date().getTime(),
      error: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.firebaseSubmit = this.firebaseSubmit.bind(this);
  }

  componentDidMount() {
    const user = fire.auth().currentUser.uid;
    const _this = this;
    fire
      .database()
      .ref("users/" + user + "/profile")
      .once("value", function(snapshot) {
        _this.setState({
          name: snapshot.val().name,
          gym: snapshot.val().gym,
          rank: snapshot.val().rank,
          currentgoal: snapshot.val().currentgoal,
          loading: false
        });
      });
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
    const { email } = this.state;

    if (!email) {
      this.setState({ error: true });
      return;
    } else {
      this.setState({ error: false });
      this.firebaseSubmit();
    }
  }

  firebaseSubmit() {
    fire
      .database()
      .ref("users/" + this.state.userid + "/profile")
      .set({
        name: this.state.name,
        gym: this.state.gym,
        rank: this.state.rank,
        currentgoal: this.state.currentgoal,
        date: this.state.date,
        time: this.state.time
      });

    if (fire.auth().currentUser.email !== this.state.email) {
      fire.auth().currentUser.updateEmail(this.state.email);
    }
  }

  render() {
    const { classes } = this.props;
    const { name, email, gym, rank, currentgoal } = this.state;

    return (
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Avatar className={classes.avatar}>
            <SettingsIcon />
          </Avatar>
          <Typography align="center" variant="h6" gutterBottom>
            Profile Settings
          </Typography>
          <form
            noValidate
            autoComplete="off"
            className={classes.form}
            onSubmit={this.handleSubmit}
          >
            <Grid item xs={12} sm={12}>
              <TextField
                error={this.state.error && !this.state.technique}
                className={classes.formInputs}
                id="name"
                name="name"
                value={name}
                label="Name"
                fullWidth
                autoComplete="name"
                onChange={this.handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                error={this.state.error && !this.state.email}
                className={classes.formInputs}
                required
                id="email"
                name="email"
                value={email}
                label="Email"
                fullWidth
                autoComplete="email"
                onChange={this.handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                className={classes.formInputs}
                required
                id="gym"
                value={gym}
                name="gym"
                label="Gym"
                fullWidth
                autoComplete="gym"
                onChange={this.handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <FormControl className={classes.formInputs}>
                <InputLabel htmlFor="rank">Rank</InputLabel>
                <Select
                  native
                  fullWidth
                  value={rank}
                  name="rank"
                  inputProps={{
                    name: "rank",
                    id: "rank"
                  }}
                  onChange={this.handleChange}
                >
                  <option value="white">White Belt</option>
                  <option value="blue">Blue Belt</option>
                  <option value="purple">Purple Belt</option>
                  <option value="brown">Brown Belt</option>
                  <option value="black">Black Belt</option>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <TextField
                className={classes.formInputs}
                id="currentgoal"
                name="currentgoal"
                value={currentgoal}
                rows={3}
                label="Current Jiu Jitsu Goal"
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
      </main>
    );
  }
}

ProfileSettingsForm.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ProfileSettingsForm);
