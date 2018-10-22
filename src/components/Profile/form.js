import React from "react";
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

function ProfileSettingsForm({ classes }) {
  return (
    <main className={classes.layout}>
      <Paper className={classes.paper}>
        <Avatar className={classes.avatar}>
          <SettingsIcon />
        </Avatar>
        <Typography align="center" variant="h6" gutterBottom>
          Profile Settings
        </Typography>
        <Grid item xs={12} sm={12}>
          <TextField
            className={classes.formInputs}
            id="name"
            label="Name"
            fullWidth
            autoComplete="name"
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            className={classes.formInputs}
            required
            id="email"
            name="email"
            label="Email"
            fullWidth
            autoComplete="emafil"
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <FormControl className={classes.formInputs}>
            <InputLabel htmlFor="rank">Rank</InputLabel>
            <Select
              native
              fullWidth
              inputProps={{
                name: "Rank",
                id: "rank"
              }}
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
            id="goal"
            label="Current Jiu Jitsu Goal"
            multiline
            fullWidth
            margin="normal"
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            className={classes.formInputs}
            color="secondary"
          >
            Save
          </Button>
        </Grid>
      </Paper>
    </main>
  );
}

ProfileSettingsForm.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ProfileSettingsForm);
