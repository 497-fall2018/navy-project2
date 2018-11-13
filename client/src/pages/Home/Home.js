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
    load_found_posts,
    load_lost_posts,
} from '../../ducks/post';
import './styles.css';

class HomeComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: null,
            searched: null,
        }

    }

    setChecked = (c) => {this.setState({checked: c})}
    setSearched = (s) => {this.setState({searched: s})}

    componentDidMount() {
        if (this.props.lorf === "lost") {
            this.props.load_lost_posts();
            this.props.load_found_posts();
        }
        else {
            this.props.load_found_posts();
            this.props.load_lost_posts();
        }
    }

    render() {
        const landingUrl = "postform";
        return (
            <div>
                <Header lorf={this.props.lorf}/>
                <Button variant="fab" style={{background: '#4054AC', color: 'white', position: 'absolute', top: '4vh', right: '2vw'}} aria-label="Add">
                    <a href={landingUrl} style={{color: "white"}}><Add/></a>
                </Button>
                <div className="bodyContainer">
                    <Sidebar 
                        lorf={this.props.lorf} 
                        setChecked = {this.setChecked}
                        setSearched = {this.setSearched}
                    />
                    <PostList 
                        lorf={this.props.lorf}
                        checked={this.state.checked}
                        searched = {this.state.searched}
                    />
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
    load_found_posts,
    load_lost_posts,
})(HomeComponent);
