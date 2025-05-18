import React, { Component } from 'react';
import { FormControl, Input, Select, MenuItem, FormHelperText } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 150
    },
    select: {
        '&:before': {
            borderColor: theme.palette.type === 'dark'
                ? theme.palette.primary.light
                : theme.palette.primary.main
        },
        '&:after': {
            borderColor: theme.palette.type === 'dark'
                ? theme.palette.primary.light
                : theme.palette.primary.main
        },
        color: theme.palette.text.primary,
        '& svg': {
            color: theme.palette.text.primary,
        }
    },
    colorText: {
        color: theme.palette.text.secondary,
        fontWeight: 500,
        fontSize: '0.9rem'
    },
    menuItem: {
        '&:hover': {
            backgroundColor: theme.palette.action.hover,
        },
        '&.Mui-selected': {
            backgroundColor: theme.palette.type === 'dark'
                ? theme.palette.primary.dark
                : theme.palette.primary.light,
            '&:hover': {
                backgroundColor: theme.palette.type === 'dark'
                    ? theme.palette.primary.main
                    : theme.palette.primary.light,
            }
        }
    }
});

class CountryEdition extends Component {

    state = {
        country: 'us',
        name: 'hai',
        labelWidth: 0,
    };

    handleChange = (context, event ) => {
        this.setState({ [event.target.name]: event.target.value });
        context.changeCountryEdition(event.target.value);
    };
    render() {
        const { context, classes } = this.props;

        return (
            <form className={classes.root} autoComplete="off">
                <FormControl className={classes.formControl}>
                    <Select
                        value={this.state.country}
                        onChange={this.handleChange.bind(this, context)}
                        input={<Input name="country" id="country-helper" className={classes.select}/>}
                        MenuProps={{
                            PaperProps: {
                                style: {
                                    maxHeight: 300,
                                },
                            },
                        }}
                        >
                        <MenuItem value="us" className={classes.menuItem}>US Edition</MenuItem>
                        <MenuItem value="in" className={classes.menuItem}>India Edition</MenuItem>
                        <MenuItem value="au" className={classes.menuItem}>Australia Edition</MenuItem>
                        <MenuItem value="gb" className={classes.menuItem}>UK Edition</MenuItem>
                        <MenuItem value="ca" className={classes.menuItem}>Canada Edition</MenuItem>
                    </Select>
                    <FormHelperText className={classes.colorText}>Country Edition</FormHelperText>
                </FormControl>
            </form>
        )
    }
}

export default withStyles(styles)(CountryEdition)