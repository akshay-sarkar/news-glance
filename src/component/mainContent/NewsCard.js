import React, { Component } from 'react';
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
    maxWidth: '345vw',
    transitionDuration: '0.3s',
    height: 'auto'
  },
  media: {
    // ⚠️ object-fit is not supported by IE 11.
    objectFit: 'cover',
    marginTop:'30'
  },
};


class NewsCard extends Component {

  openUrl = (url) => {
    // route to new page by changing window.location
    window.open(url, "_blank") //to open new page
  };

  render() {
    const { article, classes } = this.props;
    return (
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt={article.title}
            className={classes.media}
            height="150"
            image={article.urlToImage}
            title={article.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {article.title}
            </Typography>
            <Typography component="p">
              {article.description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          {/* <Button size="small" color="primary">
            Share
        </Button> */}
          <Button size="small" color="primary" onClick={() => this.openUrl(article.url)}>
            Learn More
        </Button>
        </CardActions>
      </Card>
    )
  }
}

NewsCard.propTypes = {
  classes: PropTypes.object.isRequired,
  openUrl: PropTypes.func
};

export default withStyles(styles)(NewsCard);
