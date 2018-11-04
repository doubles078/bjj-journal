import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Footer from "./footer";

const styles = theme => ({
  card: {
    maxWidth: "100%",
    minWidth: 275
  },
  cardContain: {
    display: "flex",
    justifyContent: "space-around"
  },
  title: {
    color: "#FFF",
    fontWeight: "bold"
  },
  date: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});

const TrainingCard = ({ classes, technique, notes, date }) => {
  let convertedDate = new Date(date).toLocaleString().split(",")[0];

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.date} color="textSecondary">
          {convertedDate}
        </Typography>
        <Typography variant="h6">{technique}</Typography>
        <Typography className={classes.pos} color="textSecondary">
          Class | No Gi
        </Typography>
        <Typography component="p">{notes}</Typography>
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
