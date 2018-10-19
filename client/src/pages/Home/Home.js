import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
    Header,
    Sidebar,
    PostList,
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
                <div className="bodyContainer">
                    <Sidebar />
                    <PostList />
                </div>
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
