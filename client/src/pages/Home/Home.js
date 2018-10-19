import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Add} from '@material-ui/icons';
import {Button} from '@material-ui/core';
import { Route } from 'react-router-dom';

import {
    Header,
    Posts
} from '../../components';
import {
} from '../../ducks/post';
import './styles.css';

class HomeComponent extends Component {


    render() {
        return (
            <div>
                <Header />
                <Route render={({ history}) => (
                    <Button variant="fab" style={{background: '#4054AC', color: 'white'}} aria-label="Add" onClick={() => {history.push('/postform')}}>
                        <Add/>
                    </Button>
                )}/>
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
