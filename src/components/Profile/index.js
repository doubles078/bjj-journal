import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Form from "./form";
import Navbar from "../NavBar";

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#FAFAFA",
    minHeight: "100vh"
  }
});

class Profile extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Navbar />
        <Grid container>
          <Grid item xs={12}>
            <Grid
              container
              className={classes.demo}
              alignItems="center"
              direction="row"
              justify="center"
            >
              <Grid item>
                <Form />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

Profile.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Profile);
