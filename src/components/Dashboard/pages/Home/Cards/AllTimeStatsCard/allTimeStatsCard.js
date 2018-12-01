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

import VanityStatsCard from "./vanityStatsCard";

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
  const {
    classes,
    allPosts,
    classCount,
    openMatCount,
    giCount,
    noGiCount
  } = props;
  const allPostsKeys = Object.keys(allPosts);

  let dayObjectList = [
    {
      id: "Monday",
      totalclasses: 0,
      totalopenmats: 0,
      totalClassAndMat: 0,
      totalgi: 0,
      totalnogi: 0
    },
    {
      id: "Tuesday",
      totalclasses: 0,
      totalClassAndMat: 0,
      totalopenmats: 0,
      totalgi: 0,
      totalnogi: 0
    },
    {
      id: "Wednesday",
      totalclasses: 0,
      totalClassAndMat: 0,
      totalopenmats: 0,
      totalgi: 0,
      totalnogi: 0
    },
    {
      id: "Thursday",
      totalclasses: 0,
      totalClassAndMat: 0,
      totalopenmats: 0,
      totalgi: 0,
      totalnogi: 0
    },
    {
      id: "Friday",
      totalclasses: 0,
      totalClassAndMat: 0,
      totalopenmats: 0,
      totalgi: 0,
      totalnogi: 0
    },
    {
      id: "Saturday",
      totalclasses: 0,
      totalClassAndMat: 0,
      totalopenmats: 0,
      totalgi: 0,
      totalnogi: 0
    },
    {
      id: "Sunday",
      totalclasses: 0,
      totalClassAndMat: 0,
      totalopenmats: 0,
      totalgi: 0,
      totalnogi: 0
    },
    {
      id: "Total",
      totalclasses: 0,
      totalClassAndMat: 0,
      totalopenmats: 0,
      totalgi: 0,
      totalnogi: 0
    }
  ];

  allPostsKeys.forEach(key => {
    let postDate = new Date(allPosts[key].date).getDay();

    if (allPosts[key].type === "class") {
      dayObjectList[postDate].totalclasses += 1;
      dayObjectList[7].totalclasses += 1;
    } else {
      dayObjectList[postDate].totalopenmats += 1;
      dayObjectList[7].totalopenmats += 1;
    }

    if (allPosts[key].style === "gi") {
      dayObjectList[postDate].totalgi += 1;
      dayObjectList[7].totalgi += 1;
    } else {
      dayObjectList[postDate].totalnogi += 1;
      dayObjectList[7].totalnogi += 1;
    }

    dayObjectList[postDate].totalClassAndMat += 1;
    dayObjectList[7].totalClassAndMat += 1;
  });

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
                      <TableCell>Day</TableCell>
                      <TableCell numeric>Total Classes</TableCell>
                      <TableCell numeric>Total Open Mats</TableCell>
                      <TableCell numeric>Total Gi</TableCell>
                      <TableCell numeric>Total No Gi</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {dayObjectList.map(row => {
                      return (
                        <TableRow key={row.id}>
                          <TableCell component="th" scope="row">
                            {row.id}
                          </TableCell>
                          <TableCell numeric>{row.totalclasses}</TableCell>
                          <TableCell numeric>{row.totalopenmats}</TableCell>
                          <TableCell numeric>{row.totalgi}</TableCell>
                          <TableCell numeric>{row.totalnogi}</TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>

                <VanityStatsCard
                  classCount={classCount}
                  openMatCount={openMatCount}
                  giCount={giCount}
                  noGiCount={noGiCount}
                  dayObjectList={dayObjectList}
                />
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

AllTimeStatsCard.propTypes = {
  classes: PropTypes.object.isRequired,
  allPosts: PropTypes.object
};

export default withStyles(styles)(AllTimeStatsCard);
