import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TrainingCard from '../TrainingCard';
import NumberCard from '../NumberCard';
import Typography from '@material-ui/core/Typography';
import PracticeList from '../PracticeList';

const styles = theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    padding: theme.spacing.unit  * 2
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing.unit * 2,
  },
});


function Dashboard(props) {
  const { classes } = props;

  return (
    <Grid container className={classes.root}>
        <Grid item xs={12}>
          <h1>I am dashboard</h1>
        </Grid>

        <Grid container spacing={8}>
        <Grid item xs={12}>
            <Typography>
              Top 3 Things to Practice
            </Typography>
            <PracticeList />
          </Grid>

           <Grid item xs={12}>
            <Typography>
              Top 3 Things to Practice
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <NumberCard type={'Classes'}/>
          </Grid>
          <Grid item xs={6}>
            <NumberCard type={'Rolls'}/>
          </Grid>
          <Grid item xs={6}>
            <NumberCard type={'Open Mats'}/>
          </Grid>
          <Grid item xs={6}>
            <NumberCard type={'Classes this belt'}/>
          </Grid>
          <Grid item xs={12}>
            <Typography>
              Last Training Session
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <TrainingCard />
          </Grid>
        </Grid>
    </Grid>
  )};

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Dashboard);
