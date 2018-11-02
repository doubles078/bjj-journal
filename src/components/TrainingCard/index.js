import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Footer from "./footer";

const styles = theme => ({
  card: {
    maxWidth: "100%"
  },
  cardContain: {
    display: "flex",
    justifyContent: "space-around",
    backgroundColor: "#F5F5F5"
  },
  title: {
    color: "#FFF",
    fontWeight: "bold"
  }
});

const TrainingCard = ({ classes, technique, notes, date }) => {
  let convertedDate = new Date(date).toLocaleString().split(",")[0];

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h6">{technique}</Typography>
      </CardContent>
      <CardContent className={classes.cardContain}>
        <Typography component="p">Class</Typography>
        <Typography component="p">Gi</Typography>
        <Typography component="p">{convertedDate}</Typography>
      </CardContent>
      <Footer />
    </Card>
  );
};

TrainingCard.propTypes = {
  classes: PropTypes.object.isRequired,
  technique: PropTypes.string,
  notes: PropTypes.string
};

export default withStyles(styles)(TrainingCard);
