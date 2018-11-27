import React from "react";
import PropTypes from "prop-types";
import Avatar from "@material-ui/core/Avatar";
import UserIcon from "@material-ui/icons/PermIdentity";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import classNames from "classnames";

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingBottom: theme.spacing.unit * 2
  },
  card: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    borderRadius: "0",
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  },
  classesColor: {
    backgroundColor: "#2196F3"
  },
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    maxWidth: 400
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main
  },
  beltRank: {
    textTransform: "capitalize",
    backgroundColor: theme.palette.primary.main,
    color: "#fff",
    display: "flex",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: theme.spacing.unit,
    paddingBottom: theme.spacing.unit
  },
  titles: {
    display: "flex",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center"
  }
});

function PaperSheet({ classes, name, gym, rank }) {
  return (
    <Grid container className={classes.root} spacing={16}>
      <Grid item xs={12}>
        <Typography variant="h4" component="h2">
          Profile
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Paper className={classes.paper}>
          <Avatar className={classes.avatar}>
            <UserIcon />
          </Avatar>
          <Typography component="h5" variant="h5">
            {name}
          </Typography>
          <Typography component="h4" variant="h6" className={classes.titles}>
            {gym}
          </Typography>

          <Typography component="h4" variant="h6" className={classes.beltRank}>
            {rank + " Belt"}
          </Typography>

          <Grid container>
            <Grid item xs={6}>
              <Card className={classes.card}>
                <Typography variant="h5" component="h4" color="black">
                  2
                </Typography>
                <Typography component="p" color="black">
                  Classes
                </Typography>
              </Card>
            </Grid>
            <Grid item xs={6}>
              <Card className={classes.card}>
                <Typography variant="h5" component="h4" color="black">
                  2
                </Typography>
                <Typography component="p" color="black">
                  Total Trained
                </Typography>
              </Card>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
}

PaperSheet.propTypes = {
  classes: PropTypes.object.isRequired,
  gym: PropTypes.string,
  rank: PropTypes.string
};

export default withStyles(styles)(PaperSheet);
