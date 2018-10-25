import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    minWidth: 275,
    maxWidth: 340
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};


class Post extends React.Component {

  render(){
    return (
      <Card className={styles.card}>
        <CardContent>
          <Typography variant="h5">
            {this.props.name}
          </Typography>
          <Typography  color="textSecondary">
            {this.props.location}
          </Typography>
          <Typography color="textSecondary">
            {this.props.date}
          </Typography>
          <Typography component="p">
            {this.props.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    );
  }
}

Post.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Post);
