import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ShareIcon from '@material-ui/icons/Share';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Tooltip from '@material-ui/core/Tooltip';

const styles = theme => ({
  card: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    transitionDuration: '0.3s',
    cursor: 'pointer',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    '&:hover': {
      transform: 'translateY(-5px)',
      boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
    }
  },
  cardActionArea: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
  media: {
    height: 200,
    objectFit: 'cover',
  },
  contentContainer: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
  },
  metaInfo: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '12px 16px 0',
    alignItems: 'center',
    color: theme.palette.type === 'dark' ? theme.palette.text.secondary : 'rgba(0, 0, 0, 0.6)',
  },
  author: {
    textAlign: 'right',
    flex: 1,
    fontSize: '0.75rem',
    fontWeight: 500,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    maxWidth: '45%',
  },
  date: {
    textAlign: 'left',
    flex: 1,
    fontSize: '0.75rem',
    fontWeight: 500,
  },
  cardContent: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: '8px 16px 16px',
  },
  title: {
    marginBottom: 12,
    lineHeight: 1.3,
    height: '3.9em',
    overflow: 'hidden',
    display: '-webkit-box',
    WebkitLineClamp: 3,
    WebkitBoxOrient: 'vertical',
  },
  description: {
    height: '4.5em',
    overflow: 'hidden',
    display: '-webkit-box',
    WebkitLineClamp: 3,
    WebkitBoxOrient: 'vertical',
  },
  shareButton: {
    padding: '4px',
    marginLeft: '8px',
    marginRight: '8px',
    color: theme.palette.type === 'dark' ? theme.palette.primary.light : theme.palette.primary.main,
  },
  shareIcon: {
    fontSize: '1.2rem'
  }
});


class NewsCard extends Component {
  state = {
    anchorEl: null,
  };

  openUrl = (url) => {
    // route to new page by changing window.location
    window.open(url, "_blank") //to open new page
  };

  handleShareClick = (event) => {
    // Stop propagation to prevent card click
    event.stopPropagation();

    // Check if Web Share API is available (mobile devices)
    if (navigator.share) {
      navigator.share({
        title: this.props.article.title,
        text: this.props.article.description,
        url: this.props.article.url,
      })
        .then(() => console.log('Successful share'))
        .catch((error) => console.log('Error sharing', error));
    } else {
      // For desktop, show menu
      this.setState({ anchorEl: event.currentTarget });
    }
  };

  handleShareClose = (event) => {
    if (event) {
      event.stopPropagation();
    }
    this.setState({ anchorEl: null });
  };

  copyToClipboard = (event) => {
    event.stopPropagation();
    navigator.clipboard.writeText(this.props.article.url)
      .then(() => {
        this.handleShareClose(event);
      })
      .catch(err => {
        console.error('Could not copy text: ', err);
      });
  };

  render() {
    const { article, classes } = this.props;

    // Format the date in a more readable way
    const formattedDate = article.publishedAt
      ? new Date(article.publishedAt).toLocaleDateString(undefined, {
          year: 'numeric',
          month: 'short',
          day: 'numeric'
        })
      : '';

    return (
      <Card className={classes.card}>
        <CardActionArea
          onClick={() => this.openUrl(article.url)}
          className={classes.cardActionArea}
        >
          <CardMedia
            component="img"
            alt={article.title}
            className={classes.media}
            image={article.urlToImage || 'https://via.placeholder.com/300x200?text=No+Image'}
            title={article.title}
          />

          <div className={classes.contentContainer}>
            <div className={classes.metaInfo}>
              <Typography variant="caption" className={classes.date}>
                {formattedDate}
              </Typography>

              <Tooltip title="Share">
                <IconButton
                  className={classes.shareButton}
                  onClick={this.handleShareClick}
                  size="small"
                >
                  <ShareIcon className={classes.shareIcon} />
                </IconButton>
              </Tooltip>

              <Typography variant="caption" className={classes.author}>
                {article.author ? article.author : ''}
              </Typography>
            </div>

            <CardContent className={classes.cardContent}>
              <Typography gutterBottom variant="h6" component="h2" className={classes.title}>
                {article.title}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p" className={classes.description}>
                {article.description || 'No description available'}
              </Typography>
            </CardContent>
          </div>
        </CardActionArea>

        <Menu
          id="share-menu"
          anchorEl={this.state.anchorEl}
          open={Boolean(this.state.anchorEl)}
          onClose={this.handleShareClose}
          onClick={(e) => e.stopPropagation()}
        >
          <MenuItem onClick={this.copyToClipboard}>Copy link</MenuItem>
          <MenuItem onClick={(e) => {
            e.stopPropagation();
            window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(article.url)}&text=${encodeURIComponent(article.title)}`, '_blank');
            this.handleShareClose(e);
          }}>Share on Twitter</MenuItem>
          <MenuItem onClick={(e) => {
            e.stopPropagation();
            window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(article.url)}`, '_blank');
            this.handleShareClose(e);
          }}>Share on Facebook</MenuItem>
        </Menu>
      </Card>
    )
  }
}

NewsCard.propTypes = {
  classes: PropTypes.object.isRequired,
  openUrl: PropTypes.func
};

export default withStyles(styles)(NewsCard);
