import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import NewsCard from './NewsCard';

const styles = theme => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing.unit * 2,
    paddingTop: theme.spacing.unit * 3,
  },
  paper: {
    padding: theme.spacing.unit,
    height: '100%',
    display: 'flex',
  },
  gridContainer: {
    marginTop: theme.spacing.unit,
  },
  loadingContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing.unit * 3,
    minHeight: '60vh',
  },
  progress: {
    margin: theme.spacing.unit * 2,
    color: theme.palette.type === 'dark' ? theme.palette.primary.light : theme.palette.primary.main,
  },
  loadingText: {
    marginTop: theme.spacing.unit * 2,
    color: theme.palette.text.secondary,
  },
  categoryTitle: {
    marginBottom: theme.spacing.unit * 3,
    color: theme.palette.text.primary,
    fontWeight: 500,
    textTransform: 'capitalize',
    borderBottom: `2px solid ${theme.palette.primary.main}`,
    paddingBottom: theme.spacing.unit,
    display: 'inline-block',
  },
  noArticlesMessage: {
    padding: theme.spacing.unit * 5,
    color: theme.palette.text.secondary,
  }
});

class Headlines extends Component {

  constructor(props) {
    super(props);
    this.state = {
      newsData: [],
      isLoading: false,
      currentPath: window.location.pathname // Store the current path
    }
  }

  componentDidMount() {
    // Get the current path when component mounts
    const currentPath = window.location.pathname;

    // Update the current path in state
    this.setState({ currentPath });

    // Call getArticles with the current path
    this.getArticles(currentPath);
  }

  componentDidUpdate(prevProps) {
    const currentPath = window.location.pathname;

    // Check if country edition has changed, refresh flag is set, or path has changed
    if (prevProps.context.state.countryEdition !== this.props.context.state.countryEdition ||
        this.props.context.state.refreshArticles ||
        currentPath !== this.state.currentPath) {

      // Reset the refresh flag if it was set
      if (this.props.context.state.refreshArticles) {
        this.props.context.resetRefreshArticles();
      }

      // Update the current path in state and reset loading state if path changed
      if (currentPath !== this.state.currentPath) {
        this.setState({
          currentPath,
          isLoading: false // Reset loading state when category changes
        });

        // Call getArticles with the new path directly
        this.getArticles(currentPath);
      } else {
        // For other changes (like country edition), use the current state path
        this.getArticles(this.state.currentPath);
      }
    }
  }
  getArticles(pathParam) {
    // Extract category from path (use provided path or current state)
    const path = pathParam || this.state.currentPath;
    let category = '';

    // If path is empty or just '/', use Headlines as default
    if (path === '/' || path === '') {
      category = 'Headlines';
    } else {
      // Remove leading slash and get the category
      category = path.substring(1);
    }

    console.log('Fetching articles for category:', category);

    let key = '04738187122045d5a855405c5462fc0b';
    let country = this.props.context.state.countryEdition;

    // If category is Headlines, don't send it in the API request
    // NewsAPI expects empty category for general headlines
    const categoryParam = category.toLowerCase() === 'headlines' ? '' : category.toLowerCase();

    const apiUrl = `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${key}&category=${categoryParam}`;
    console.log('API URL:', apiUrl);

    fetch(apiUrl)
      .then(response => {
        console.log('Response status:', response.status);
        return response.json();
      })
      .then(data => {
        console.log('API response:', data);
        this.setState({
          newsData: data.articles || [],
          isLoading: true
        });
        console.log('Articles loaded for category:', category, 'Count:', data.articles?.length || 0);
      })
      .catch((error) => {
        console.log("Error occurred while fetching data")
        console.log(error)
        // Set loading to true but with empty data to show "No articles found"
        this.setState({ newsData: [], isLoading: true });
      });
  }

  render() {
    const { classes } = this.props;
    const { isLoading, newsData, currentPath } = this.state;

    // Extract category name from path for display
    let categoryName = 'Headlines';
    if (currentPath && currentPath !== '/') {
      categoryName = currentPath.substring(1);
    }

    return (
      <div className={classes.root}>
        <Typography variant="h4" className={classes.categoryTitle}>
          {categoryName}
        </Typography>

        {isLoading ? (
          <div>
            {newsData.length > 0 ? (
              <Grid
                container
                spacing={24}
                className={classes.gridContainer}
                direction="row"
                justifyContent="flex-start"
                alignItems="stretch"
              >
                {newsData.map(article => (
                  <Grid
                    item
                    key={article.publishedAt || Math.random()}
                    xs={12}
                    sm={6}
                    md={4}
                    lg={3}
                    className={classes.paper}
                  >
                    <NewsCard article={article} />
                  </Grid>
                ))}
              </Grid>
            ) : (
              <div className={classes.loadingContainer}>
                <Typography variant="h5" align="center" className={classes.noArticlesMessage}>
                  No articles found for {categoryName}
                </Typography>
              </div>
            )}
          </div>
        ) : (
          <div className={classes.loadingContainer}>
            <CircularProgress className={classes.progress} size={60} thickness={4} />
            <Typography variant="h6" className={classes.loadingText}>
              Loading {categoryName} articles...
            </Typography>
          </div>
        )}
      </div>
    )
  }
}
Headlines.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(Headlines);