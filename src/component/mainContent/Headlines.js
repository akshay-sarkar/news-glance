import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import NewsCard from './NewsCard';
import data from '../util/dummyData';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

class Headlines extends Component {

  constructor(props) {
    super(props)

    this.state = {
      newsData: [],
      isLoading: false
    }
  }

  componentDidMount() {
    this.getArticles();

  }
  getArticles() {
    let arr = window.location.href.split('/');
    //console.log(arr[arr.length-1]);
    let key = '04738187122045d5a855405c5462fc0b';
    let country = 'in', category = arr[arr.length-1];
    if(category === 'Headlines'){
      category = ''
    }

    // fetch(`https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${key}&category=${category}`)
    //   .then(response => response.json())
    //   .then(data => {
    //     this.setState({ newsData: data.articles, isLoading: true });
    //     console.log(this.state.newsData);
    //   })
    //   .catch((error) => {
    //     console.log("Error occured while fetching data")
    //     console.log(error)
    //   });
    this.setState({ newsData: data.articles, isLoading: true });
    console.log(data.articles);
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        {
          this.state.isLoading ? (
            <div>
              <Grid container spacing={24} direction="row" justify="space-evenly" alignItems="flex-start">
                {this.state.newsData.map(article => (
                  <Grid item key={article.publishedAt} xs={12} sm={6} md={4} className={classes.paper}>
                    <NewsCard article={article}></NewsCard>
                  </Grid>
                ))}
              </Grid>
            </div>
          ) : "No News found"
        }
      </div>
    )
  }
}
Headlines.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(Headlines);