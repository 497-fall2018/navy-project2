import React from 'react';
import {Post} from '../Post';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';


const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  control: {
    padding: theme.spacing.unit * 2,
  },
});

class PostList extends React.Component {
  state = {
    spacing: '16',
  };

  handleChange = key => (event, value) => {
    this.setState({
      [key]: value,
    });
  };

  render() {
    const { classes } = this.props;
    const { spacing } = this.state;

    return (
        <div className="postlist">
          <Grid container className={classes.root} spacing={16}>
            <Grid item xs={12}>
              <Grid container className={classes.demo} justify="center" spacing={Number(spacing)}>
                {[0, 1, 2, 3, 4, 5, 6].map(value => (
                  <Grid key={value} item>
                    <Post name="Phone" location="tech" date="today" description="The iPhone is a line of smartphones produced by Apple Inc. While the feature list of an iPhone is continually changing with each new model, it is best known for its touch screen that allows quick response to single or multiple finger strokes. It runs on the iOS mobile operating system."
                     ></Post>
                  </Grid>
                ))}
              </Grid>
            </Grid>
            <Grid item xs={12}>
            </Grid>
          </Grid>
        </div>
    );
  }
}

PostList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PostList);
