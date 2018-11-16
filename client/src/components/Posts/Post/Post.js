import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { CardMedia } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import { Link } from 'react-router-dom';

const styles = {
  card: {
    minWidth: 275,
    maxWidth: 340
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 0,
  },
  media: {
    height: 200,
  },
  orangeAvatar: {
    marginTop: 10,
    color: '#fff',
    backgroundColor: '#6f96e0',
    float: "right",
    position: "relative",
    top: "5px",
    fontSize: "1rem"
  },
  foundQuestion: {
    color: 'navy',
    marginTop: '0.5rem',
  }
};

class Post extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <Card className={classes.card}>

        <CardContent>
          {this.props.image &&
            (<div>
              <img src={'/api/'+this.props.lorf+'/posts/photo/'+this.props.id} style={{width: '100%'}} alt={'/api/'+this.props.lorf+'/posts/photo/'+this.props.id}/>
            </div>)}
          <Typography variant="h5">
            {this.props.name}
          </Typography>
          <Typography  color="textSecondary">
            {this.props.location}
          </Typography>
          <Typography color="textSecondary">
            {(new Date(this.props.created)).toLocaleString()}
          </Typography>
          <Typography component="p">
            {this.props.description}
          </Typography>
          {(this.props.lorf==="lost") ?
            <Avatar className={classes.orangeAvatar} >
              ${this.props.reward}
            </Avatar>
          :
            <Typography component="p" className={classes.foundQuestion}>
              <b>Q: </b>{this.props.question}
            </Typography>
          }
        </CardContent>
        <CardActions >
          <Button size="small" component={Link} to={(this.props.lorf==="lost") ?"lostitem/"+`${this.props.id}` : "founditem/"+`${this.props.id}`} id={this.props.id}>
            More Info
          </Button>
        </CardActions>
      </Card>
    );
  }
}

Post.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Post);