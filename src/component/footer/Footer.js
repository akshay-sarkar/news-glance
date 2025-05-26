import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing.unit * 8,
    padding: `${theme.spacing.unit * 6}px 0`,
  },
});

function Footer(props) {
  const { classes } = props;
  return (
    <footer className={classes.footer}>
      <Typography variant="h6" align="center" gutterBottom>
        News Glance
      </Typography>
      <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
        Stay informed, effortlessly.
      </Typography>
    </footer>
  );
}

export default withStyles(styles)(Footer);
