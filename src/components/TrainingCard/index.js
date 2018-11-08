import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Footer from "./footer";

const styles = theme => ({
  card: {
    borderTop: "10px solid " + theme.palette.primary.main,
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
    marginBottom: 12,
    textTransform: "capitalize"
  }
});

const TrainingCard = ({ classes, technique, notes, date, type, style }) => {
  let convertedDate = new Date(date).toLocaleString().split(",")[0];
  const truncate = (string, n) => {
    return string.length > n ? string.substr(0, n - 1) + "..." : string;
  };

  let truncNotes = truncate(notes, 90);
  let truncTitle = truncate(technique, 60);

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.date} color="textSecondary">
          {convertedDate}
        </Typography>
        <Typography variant="h6">{truncTitle}</Typography>

        <Typography component="p">{truncNotes}</Typography>
      </CardContent>
      <Footer giornogi={style} classormat={type} />
    </Card>
  );
};

TrainingCard.propTypes = {
  classes: PropTypes.object.isRequired,
  technique: PropTypes.string,
  notes: PropTypes.string,
  date: PropTypes.number,
  type: PropTypes.string,
  style: PropTypes.string
};

export default withStyles(styles)(TrainingCard);
