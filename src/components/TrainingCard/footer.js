import React from "react";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";

class CardFooter extends React.Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { value } = this.state;

    return (
      <CardActions value={value} onChange={this.handleChange}>
        <Button color="primary" size="small">
          Read More
        </Button>
      </CardActions>
    );
  }
}

export default CardFooter;
