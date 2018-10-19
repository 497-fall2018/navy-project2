import React, {Component} from 'react';
import { connect } from 'react-redux';
import { MenuItem, Select } from '@material-ui/core';
import './styles.css';
import {
    handle_school_change,
} from '../../../ducks/post';

class HeaderComponent extends Component {
    handleSchoolChange = (event) => {
        this.props.handle_school_change(event.target.value);
    }
    render() {
        const landingUrl = "";
        return (
        <div className="header">
            <span>Lost & Found</span>

            <div className="headerLinks">
                <Select
                    value={this.props.school}
                    onChange={this.handleSchoolChange}
                    inputProps={{
                      name: 'School',
                    }}
                    style={{"color":"white", "fontWeight":"600"}}
                >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={"Northwestern University"}>Northwestern University</MenuItem>
                    <MenuItem value={"University of Chicago"}>University of Chicago</MenuItem>
                    <MenuItem value={"University of Illinois at Urbana-Champagne"}>University of Illinois at Urbana-Champagne</MenuItem>
                </Select>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <a href={landingUrl} className="topRightLink">
                    Lost
                </a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <a href={landingUrl} className="topRightLink">
                    Found
                </a>
            </div>
        </div>);
    }
}

export {
    HeaderComponent
};


const mapStateToProps = (state, ownProps) => {
    const { post } = state;
    const { school } = post;
    return {
        ...ownProps,
        school
    };
};

export const Header = connect(mapStateToProps, {
    handle_school_change,
})(HeaderComponent);
