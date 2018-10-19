import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
    Header,
    Sidebar,
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
                <br/>
                <Sidebar />
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
