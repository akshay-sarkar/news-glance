import React, { Component } from 'react'
import PropTypes from "prop-types";
import { Toolbar, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import {Link} from "react-router-dom";

const style = theme => ({
    toolbarSecondary: {
        justifyContent: 'space-between'
    },
    linkDecoration: {
        textDecoration: 'none',
        color: 'black'
    },
    root: {
        width: "100%"
    },
    grow: {
        flexGrow: 1
    },
    inputRoot: {
        color: "inherit",
        width: "100%"
    },
    sectionDesktop: {
        display: "none",
        [theme.breakpoints.up("md")]: {
            display: "contents",
        }
    }
});

class CategoryMenu extends Component {
    state = {
        anchorEl: null,
        mobileMoreAnchorEl: null
    };

    render() {
        const { classes, sections } = this.props;
        return (
            <React.Fragment>
                <Toolbar variant="dense" className={classes.toolbarSecondary}>
                    <div className={classes.sectionDesktop}>
                        {sections.map(section => (
                            <Link to={section} className={classes.linkDecoration} key={section}>
                                <Typography color="inherit" noWrap key={section}>
                                    {section}
                                </Typography>
                            </Link>
                        ))}
                    </div>
                </Toolbar>
            </React.Fragment>
        )
    }
}

CategoryMenu.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(style)(CategoryMenu)