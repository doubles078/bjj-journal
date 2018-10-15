import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import fire from '../../config/fire';

const styles = {
    LogoutButton: {
        marginLeft: 'auto'
      },
}

class LogoutButton extends Component {
    constructor(props){
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        fire.auth().signOut();
        console.log("Logged out")
    }
    
    render(){
        const { classes } = this.props;
        
        return (         
            <Button 
                className={classes.LogoutButton} 
                onClick={this.handleClick} 
                color="inherit">
                {this.props.text}
            </Button>    
    )}
}

LogoutButton.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LogoutButton);