import React, { Component } from 'react'
import PropTypes from "prop-types";
import { Toolbar, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { NavLink } from "react-router-dom";

const style = theme => ({
    toolbarSecondary: {
        justifyContent: 'space-between'
    },
    linkDecoration: {
        textDecoration: 'none',
        color: theme.palette.text.primary,
        margin: '0 10px',
        padding: '5px 10px',
        borderRadius: '4px',
        transition: 'background-color 0.3s ease',
        '&:hover': {
            backgroundColor: theme.palette.action.hover,
        }
    },
    activeLink: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
        '&:hover': {
            backgroundColor: theme.palette.primary.dark,
        }
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
                            <NavLink
                                to={section}
                                key={section}
                                className={({ isActive }) =>
                                    isActive ? `${classes.linkDecoration} ${classes.activeLink}` : classes.linkDecoration
                                }
                            >
                                <Typography color="inherit" noWrap>
                                    {section}
                                </Typography>
                            </NavLink>
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