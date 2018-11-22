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
            borderColor: '#fff'
        },
        '&:after': {
            borderColor: '#fff'
        },
        color: '#fff',
        [theme.breakpoints.up("md")]: {
            '&:before': {
                borderColor: '#000'
            },
            '&:after': {
                borderColor: '#000'
            },
            color: '#000'
        }
    },
    colorText: {
        color: '#fff',
        [theme.breakpoints.up("md")]: {
            color: '#000'
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
                    {/* <InputLabel htmlFor="country-helper">Country</InputLabel> */}
                    <Select
                        value={this.state.country}
                        onChange={this.handleChange.bind(this, context)}
                        input={<Input name="country" id="country-helper" className={classes.select}/>}
                        inputProps={{
                            classes: {
                                icon: classes.colorText,
                            },
                        }}
                        >
                        <MenuItem value="us">US Edition</MenuItem>
                        <MenuItem value="in">India Edition</MenuItem>
                        <MenuItem value="au">Australia Edition</MenuItem>
                        {/* <MenuItem value="cn">China Edition</MenuItem> */}
                    </Select>
                    <FormHelperText  className={classes.colorText}>Country Edition</FormHelperText>
                </FormControl>
            </form>
        )
    }
}

export default withStyles(styles)(CountryEdition)