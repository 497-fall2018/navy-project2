import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
    Header,
<<<<<<< HEAD
    Sidebar,
    Posts
=======
    PostList,
>>>>>>> 3f79547a11a14b1bd2e16a305a65726d407a3b70
} from '../../components';
import {
} from '../../ducks/post';
import './styles.css';

class HomeComponent extends Component {


    render() {
        return (
            <div>
                <Header />
<<<<<<< HEAD
                <br/>
                <Sidebar />
=======
                <PostList />
>>>>>>> 3f79547a11a14b1bd2e16a305a65726d407a3b70
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
