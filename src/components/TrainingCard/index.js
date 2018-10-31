import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import red from "@material-ui/core/colors/red";
import Footer from "./footer";

const styles = theme => ({
  card: {
    maxWidth: "100%"
  },
  header: {
    backgroundColor: theme.palette.primary.main
  },
  title: {
    color: "#FFF",
    fontWeight: "bold"
  },
  subheader: {
    color: "#FFF"
  },
  avatar: {
    backgroundColor: red[500]
  }
});

const TrainingCard = ({ classes, technique, notes, date }) => {
  let convertedDate = new Date(date).toLocaleString().split(",")[0];

  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar aria-label="Avatar" className={classes.avatar}>
            D
          </Avatar>
        }
        className={classes.header}
        classes={{ title: classes.title, subheader: classes.subheader }}
        title={technique}
        subheader={convertedDate}
      />
      <CardContent>
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
