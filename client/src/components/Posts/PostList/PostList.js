import React from 'react';
import {Post} from '../Post';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import phoneimage from './phone.jpeg'


const styles = theme => ({
  root: {
    flexGrow: 1,
  },
});

class PostList extends React.Component {
  state = {
    spacing: '16',
  };

  // handleChange = key => (event, value) => {
  //   this.setState({
  //     [key]: value,
  //   });
  // };

  render() {
    const { classes } = this.props;
    const { spacing } = this.state;

    return (
        <div className="postlist" style={{padding:16}}>
          <Grid container spacing={16} >
            <Grid item xs={12}>
              <Grid container className={classes.demo} justify="flex-start" spacing={Number(spacing)}>
                {[0, 1, 2, 3, 4, 5, 6].map(value => (
                  <Grid key={value} item>
                    <Post name="iPhone 5S" location="tech" date="today" description="Last seen in LG51. Black rubber case."
                          image={phoneimage} spec="$10"
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
