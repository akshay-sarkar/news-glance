import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {
  Typography,
  IconButton,
  Tooltip,
  Menu,
  MenuItem
} from '@material-ui/core';
import {
  ChevronLeft,
  ChevronRight,
  Share as ShareIcon
} from '@material-ui/icons';

const styles = theme => ({
  carouselContainer: {
    position: 'relative',
    width: '100%',
    marginBottom: theme.spacing.unit * 4,
    overflow: 'hidden',
    borderRadius: '12px',
    boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
  },
  carouselWrapper: {
    display: 'flex',
    transition: 'transform 0.5s ease-in-out',
    height: '400px',
  },
  carouselSlide: {
    minWidth: '100%',
    position: 'relative',
    cursor: 'pointer',
    overflow: 'hidden',
  },
  slideImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.3s ease',
  },
  slideOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
    color: 'white',
    padding: theme.spacing.unit * 3,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  slideTitle: {
    fontSize: '1.8rem',
    fontWeight: 'bold',
    marginBottom: theme.spacing.unit,
    lineHeight: 1.2,
    textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.4rem',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '1.2rem',
    },
  },
  slideDescription: {
    fontSize: '1rem',
    opacity: 0.9,
    marginBottom: theme.spacing.unit * 2,
    display: '-webkit-box',
    WebkitLineClamp: 2,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.9rem',
      WebkitLineClamp: 1,
    },
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
  slideMeta: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: '0.9rem',
    opacity: 0.8,
  },
  slideDate: {
    fontWeight: 500,
  },
  slideAuthor: {
    fontWeight: 500,
  },
  shareButton: {
    color: 'white',
    marginLeft: theme.spacing.unit,
    '&:hover': {
      backgroundColor: 'rgba(255,255,255,0.1)',
    }
  },
  navButton: {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    backgroundColor: 'rgba(255,255,255,0.9)',
    color: theme.palette.text.primary,
    zIndex: 2,
    '&:hover': {
      backgroundColor: 'rgba(255,255,255,1)',
    },
    '&:disabled': {
      backgroundColor: 'rgba(255,255,255,0.3)',
      color: 'rgba(0,0,0,0.3)',
    },
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
  prevButton: {
    left: theme.spacing.unit * 2,
    [theme.breakpoints.down('sm')]: {
      left: theme.spacing.unit,
    },
  },
  nextButton: {
    right: theme.spacing.unit * 2,
    [theme.breakpoints.down('sm')]: {
      right: theme.spacing.unit,
    },
  },
  indicators: {
    position: 'absolute',
    bottom: theme.spacing.unit * 2,
    left: '50%',
    transform: 'translateX(-50%)',
    display: 'flex',
    gap: theme.spacing.unit,
    zIndex: 2,
  },
  indicator: {
    width: 12,
    height: 12,
    borderRadius: '50%',
    backgroundColor: 'rgba(255,255,255,0.5)',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    '&:hover': {
      backgroundColor: 'rgba(255,255,255,0.8)',
    }
  },
  activeIndicator: {
    backgroundColor: 'white',
    transform: 'scale(1.2)',
  },
  noImagePlaceholder: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.palette.type === 'dark' ? '#424242' : '#f5f5f5',
    color: theme.palette.text.secondary,
    fontSize: '1.2rem',
  }
});

class NewsCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSlide: 0,
      anchorEl: null,
      shareArticle: null,
      autoPlay: true,
      touchStart: 0,
      touchEnd: 0,
    };
    this.autoPlayInterval = null;
  }

  componentDidMount() {
    this.startAutoPlay();
  }

  componentWillUnmount() {
    this.stopAutoPlay();
  }

  startAutoPlay = () => {
    if (this.state.autoPlay && this.props.articles.length > 1) {
      this.autoPlayInterval = setInterval(() => {
        this.nextSlide();
      }, 5000); // Change slide every 5 seconds
    }
  }

  stopAutoPlay = () => {
    if (this.autoPlayInterval) {
      clearInterval(this.autoPlayInterval);
      this.autoPlayInterval = null;
    }
  }

  nextSlide = () => {
    const { articles } = this.props;
    this.setState(prevState => ({
      currentSlide: (prevState.currentSlide + 1) % articles.length
    }));
  }

  prevSlide = () => {
    const { articles } = this.props;
    this.setState(prevState => ({
      currentSlide: prevState.currentSlide === 0 ? articles.length - 1 : prevState.currentSlide - 1
    }));
  }

  goToSlide = (index) => {
    this.setState({ currentSlide: index });
  }

  handleSlideClick = (article) => {
    window.open(article.url, "_blank");
  }

  handleShareClick = (event, article) => {
    event.stopPropagation();

    if (navigator.share) {
      navigator.share({
        title: article.title,
        text: article.description,
        url: article.url,
      })
        .then(() => console.log('Successful share'))
        .catch((error) => console.log('Error sharing', error));
    } else {
      this.setState({
        anchorEl: event.currentTarget,
        shareArticle: article
      });
    }
  }

  handleShareClose = () => {
    this.setState({ anchorEl: null, shareArticle: null });
  }

  copyToClipboard = () => {
    const { shareArticle } = this.state;
    navigator.clipboard.writeText(shareArticle.url)
      .then(() => {
        this.handleShareClose();
      })
      .catch(err => {
        console.error('Could not copy text: ', err);
      });
  }

  formatDate = (dateString) => {
    if (!dateString) return '';
    return new Date(dateString).toLocaleDateString(undefined, {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  }

  handleTouchStart = (e) => {
    this.setState({ touchStart: e.targetTouches[0].clientX });
  }

  handleTouchMove = (e) => {
    this.setState({ touchEnd: e.targetTouches[0].clientX });
  }

  handleTouchEnd = () => {
    if (!this.state.touchStart || !this.state.touchEnd) return;

    const distance = this.state.touchStart - this.state.touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      this.nextSlide();
    }
    if (isRightSwipe) {
      this.prevSlide();
    }
  }

  render() {
    const { classes, articles } = this.props;
    const { currentSlide, anchorEl, shareArticle } = this.state;

    if (!articles || articles.length === 0) {
      return null;
    }

    return (
      <div
        className={classes.carouselContainer}
        onMouseEnter={this.stopAutoPlay}
        onMouseLeave={this.startAutoPlay}
      >
        <div
          className={classes.carouselWrapper}
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          onTouchStart={this.handleTouchStart}
          onTouchMove={this.handleTouchMove}
          onTouchEnd={this.handleTouchEnd}
        >
          {articles.map((article, index) => (
            <div
              key={article.publishedAt+index}
              className={classes.carouselSlide}
              onClick={() => this.handleSlideClick(article)}
            >
              {article.urlToImage ? (
                <img
                  src={article.urlToImage}
                  alt={article.title}
                  className={classes.slideImage}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
              ) : null}

              <div
                className={classes.noImagePlaceholder}
                style={{ display: article.urlToImage ? 'none' : 'flex' }}
              >
                No Image Available
              </div>

              <div className={classes.slideOverlay}>
                <Typography variant="h4" className={classes.slideTitle}>
                  {article.title}
                </Typography>

                <Typography variant="body1" className={classes.slideDescription}>
                  {article.description || 'No description available'}
                </Typography>

                <div className={classes.slideMeta}>
                  <div>
                    <span className={classes.slideDate}>
                      {this.formatDate(article.publishedAt)}
                    </span>
                    {article.author && (
                      <span className={classes.slideAuthor}>
                        {' • '}{article.author}
                      </span>
                    )}
                  </div>

                  <Tooltip title="Share">
                    <IconButton
                      className={classes.shareButton}
                      onClick={(e) => this.handleShareClick(e, article)}
                      size="small"
                    >
                      <ShareIcon />
                    </IconButton>
                  </Tooltip>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <IconButton
          className={`${classes.navButton} ${classes.prevButton}`}
          onClick={this.prevSlide}
          disabled={articles.length <= 1}
        >
          <ChevronLeft />
        </IconButton>

        <IconButton
          className={`${classes.navButton} ${classes.nextButton}`}
          onClick={this.nextSlide}
          disabled={articles.length <= 1}
        >
          <ChevronRight />
        </IconButton>

        {/* Indicators */}
        {articles.length > 1 && (
          <div className={classes.indicators}>
            {articles.map((_, index) => (
              <div
                key={index}
                className={`${classes.indicator} ${
                  index === currentSlide ? classes.activeIndicator : ''
                }`}
                onClick={() => this.goToSlide(index)}
              />
            ))}
          </div>
        )}

        {/* Share Menu */}
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleShareClose}
        >
          <MenuItem onClick={this.copyToClipboard}>Copy link</MenuItem>
          <MenuItem onClick={() => {
            window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareArticle?.url)}&text=${encodeURIComponent(shareArticle?.title)}`, '_blank');
            this.handleShareClose();
          }}>Share on Twitter</MenuItem>
          <MenuItem onClick={() => {
            window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareArticle?.url)}`, '_blank');
            this.handleShareClose();
          }}>Share on Facebook</MenuItem>
        </Menu>
      </div>
    );
  }
}

NewsCarousel.propTypes = {
  classes: PropTypes.object.isRequired,
  articles: PropTypes.array.isRequired,
};

export default withStyles(styles)(NewsCarousel);
