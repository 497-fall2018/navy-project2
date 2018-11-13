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
            <Link to="lost" className="logo">LstnFnd</Link>

            <div className="headerLinks">
                <Link to="/lost" className={(this.props.lorf === "lost") ? "topRightSelected":"topRightNotSelected"}>
                    Lost
                </Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Link to="/found" className={(this.props.lorf === "found") ? "topRightSelected":"topRightNotSelected"}>
                    Found
                </Link>
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
