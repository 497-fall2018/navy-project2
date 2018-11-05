import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './styles.css';
import {
} from '../../../ducks/post';

class HeaderComponent extends Component {
    handleSchoolChange = (event) => {
        this.props.handle_school_change(event.target.value);
    }
    render() {
        const landingUrl = "";
        return (
        <div className="header">
            <Link to="" className="logo">LstnFnd</Link>

            <div className="headerLinks">
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
    // const { post } = state;
    // const {  } = post;
    return {
        ...ownProps,
    };
};

export const Header = connect(mapStateToProps, {
})(HeaderComponent);
