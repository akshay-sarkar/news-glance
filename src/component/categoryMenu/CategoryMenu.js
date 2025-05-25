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
        padding: '8px 16px',
        borderRadius: '20px',
        transition: 'all 0.3s ease',
        fontWeight: 500,
        fontSize: '0.95rem',
        position: 'relative',
        '&:hover': {
            backgroundColor: theme.palette.action.hover,
            transform: 'translateY(-1px)',
        }
    },
    activeLink: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
        fontWeight: 600,
        boxShadow: theme.palette.type === 'dark'
            ? '0 2px 8px rgba(144, 202, 249, 0.3)'
            : '0 2px 8px rgba(25, 118, 210, 0.3)',
        '&:hover': {
            backgroundColor: theme.palette.primary.dark,
            transform: 'translateY(-1px)',
            boxShadow: theme.palette.type === 'dark'
                ? '0 4px 12px rgba(144, 202, 249, 0.4)'
                : '0 4px 12px rgba(25, 118, 210, 0.4)',
        },
        '&::before': {
            content: '""',
            position: 'absolute',
            bottom: '-2px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '6px',
            height: '6px',
            borderRadius: '50%',
            backgroundColor: theme.palette.primary.contrastText,
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