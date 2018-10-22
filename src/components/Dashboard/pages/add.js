import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import Paper from "@material-ui/core/Paper";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";

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

function AddTrainingSession(props) {
  const { classes } = props;

  return (
    <Grid container className={classes.root}>
      <Grid container spacing={8}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Typography variant="h4" gutterBottom>
              Add a training session
            </Typography>
            <Grid item xs={12} sm={12}>
              <ToggleButtonGroup value="1" className={classes.formInputs}>
                <ToggleButton value="1">Class</ToggleButton>
                <ToggleButton>Open Mat</ToggleButton>
                <ToggleButton>Roll</ToggleButton>
              </ToggleButtonGroup>
            </Grid>
            <Grid item xs={12} sm={12}>
              <ToggleButtonGroup value="1" className={classes.formInputs}>
                <ToggleButton>Gi</ToggleButton>
                <ToggleButton value="1">No Gi</ToggleButton>
              </ToggleButtonGroup>
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                className={classes.formInputs}
                id="technique"
                name="technique"
                label="Main Technique or Focus"
                fullWidth
                autoComplete="technique"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                className={classes.formInputs}
                id="notes"
                label="Notes"
                multiline
                fullWidth
                margin="normal"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                className={classes.formInputs}
                id="didwell"
                label="What I Did Well"
                multiline
                fullWidth
                margin="normal"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                className={classes.formInputs}
                id="workon"
                label="What I Could Work On"
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
        </Grid>
      </Grid>
    </Grid>
  );
}

AddTrainingSession.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AddTrainingSession);
