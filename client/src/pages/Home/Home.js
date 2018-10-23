import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Add} from '@material-ui/icons';
import {Button} from '@material-ui/core';

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
        const landingUrl = "postform";
        return (
            <div>
                <Header />
                <Button variant="fab" style={{background: '#4054AC', color: 'white', position: 'absolute', top: '4vh', right: '2vw'}} aria-label="Add">
                    <a href={landingUrl} style={{color: "white"}}><Add/></a>
                </Button>
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
