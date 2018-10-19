import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
	card: {
		maxWidth: 345,
	},
	media: {
		height: 140,
	},
};

const InfoCard = () => {
	return (
		<Card className="info">
      <CardActionArea>
        <CardMedia
          className="info"
          image="https://cdn.mos.cms.futurecdn.net/df65adee6e59a7b4dbf9a41b68c8fe38-1200-80.jpg"
          title="iPhone X"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            iPhone X
          </Typography>
          <Typography component="p">
            It has a scrath on the back near the bottom and a clear OtterBox case.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Found?
        </Button>
      </CardActions>
    </Card>
	);
}

export default InfoCard;