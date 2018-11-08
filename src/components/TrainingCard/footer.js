import React from "react";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

const styles = theme => ({
  button: {
    marginLeft: "auto"
  },
  text: {
    marginBottom: 12,
    textTransform: "capitalize"
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
    const { value } = this.state;
    const { classes, classormat, giornogi } = this.props;

    return (
      <CardActions value={value} onChange={this.handleChange}>
        <Typography className={classes.text} color="textSecondary">
          {classormat} | {giornogi}
        </Typography>
        <Button className={classes.button} color="primary" size="small">
          Read More
        </Button>
      </CardActions>
    );
  }
}

CardFooter.propTypes = {
  classes: PropTypes.object.isRequired,
  classormat: PropTypes.string,
  giornogi: PropTypes.string
};

export default withStyles(styles)(CardFooter);
