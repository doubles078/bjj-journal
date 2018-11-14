import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  },
  paper: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  }
});

function AllTimeStatsCard(props) {
  const { classes } = props;

  const rows = [
    {
      id: "Monday",
      totalclasses: 5,
      totalopenmats: 2,
      totalgi: 3,
      totalnogi: 100
    },
    {
      id: "Tuesday",
      totalclasses: 5,
      totalopenmats: 2,
      totalgi: 3,
      totalnogi: 100
    },
    {
      id: "Wednesday",
      totalclasses: 5,
      totalopenmats: 2,
      totalgi: 3,
      totalnogi: 100
    },
    {
      id: "Thursday",
      totalclasses: 5,
      totalopenmats: 2,
      totalgi: 3,
      totalnogi: 100
    },
    {
      id: "Friday",
      totalclasses: 5,
      totalopenmats: 2,
      totalgi: 3,
      totalnogi: 100
    },
    {
      id: "Saturday",
      totalclasses: 5,
      totalopenmats: 2,
      totalgi: 3,
      totalnogi: 100
    },
    {
      id: "Sunday",
      totalclasses: 5,
      totalopenmats: 2,
      totalgi: 3,
      totalnogi: 100
    },
    {
      id: "Total",
      totalclasses: 100,
      totalopenmats: 20,
      totalgi: 23,
      totalnogi: 3333
    }
  ];
  return (
    <div className={classes.root}>
      <Grid container spacing={16}>
        <Grid item xs={12}>
          <Typography variant="h4" component="h2">
            All Time Stats
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper} elevation={1}>
            <Grid container spacing={16}>
              <Grid item xs={12} className={classes.barContainer}>
                <Table className={classes.table}>
                  <TableHead>
                    <TableRow>
                      <TableCell>Total Classes</TableCell>
                      <TableCell numeric>Total Open Mats</TableCell>
                      <TableCell numeric>Total Gi</TableCell>
                      <TableCell numeric>Total No Gi</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map(row => {
                      return (
                        <TableRow key={row.id}>
                          <TableCell component="th" scope="row">
                            {row.id}
                          </TableCell>
                          <TableCell numeric>{row.totalopenmats}</TableCell>
                          <TableCell numeric>{row.totalgi}</TableCell>
                          <TableCell numeric>{row.totalnogi}</TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

AllTimeStatsCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AllTimeStatsCard);
