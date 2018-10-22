import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  loginButton: {
    marginLeft: "auto"
  }
};

function LoginButton({ classes, url, text }) {
  return (
    <Button className={classes.loginButton} color="inherit">
      <Link to={url}>{text}</Link>
    </Button>
  );
}

LoginButton.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(LoginButton);
