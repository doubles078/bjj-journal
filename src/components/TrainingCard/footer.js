import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    padding: 0
  },
  button: {
    color: "#FFF",
    width: "100%"
  }
});

class CardFooter extends React.Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <CardActions
        value={value}
        onChange={this.handleChange}
        showLabels
        className={classes.root}
      >
        <Button color="primary" className={classes.button}>
          Read More
        </Button>
      </CardActions>
    );
  }
}

CardFooter.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CardFooter);
