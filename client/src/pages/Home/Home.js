import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Add} from '@material-ui/icons';
import {Button} from '@material-ui/core';

import {
    Header,
    Posts
} from '../../components';
import {
} from '../../ducks/post';
import './styles.css';

class HomeComponent extends Component {


    render() {
        const landingUrl = "postform";
        return (
            <div>
                <Header />
                <Button variant="fab" style={{background: '#4054AC', color: 'white', marginLeft: '80%'}} aria-label="Add">
                    <a href={landingUrl} style={{color: "white"}}><Add/></a>
                </Button>
            </div>
        );

    }
}

export { HomeComponent };

const mapStateToProps = (state, ownProps) => {
    // const { } = state;
    // const { } = ;
    return {
        ...ownProps,

    };
};

export const Home = connect(mapStateToProps, {

})(HomeComponent);
