import React, { Component } from 'react';
import { connect } from 'react-redux';

import {} from '../../components';
import {} from '../../ducks/post';
import './item.css';

class ItemComponent extends Component {

    constructor() {
        super();
        this.pollInterval = null;
    }
    componentDidMount() {
        this.props.load_posts();
        if (!this.pollInterval) {
            this.pollInterval = setInterval(() => this.props.load_posts(), 2000);
        }
    }

    componentWillUnmount() {
        if (this.pollInterval) clearInterval(this.pollInterval);
        this.pollInterval = null;
    }

    render() {
        return (
            <div>
                <ModalBox />
                <div className="container">
                    <div className="comments">
                      <PostList />
                    </div>
                </div>

            </div>
        );

    }
}

export { HomeComponent };

const mapStateToProps = (state, ownProps) => {
    const { post } = state;
    const { data, description, error, modal_open, author, file, pollInterval, updateId } = post;
    return {
        ...ownProps,
        author,
        data,
        description,
        error,
        file,
        modal_open,
        pollInterval,
        updateId,
    };
};

export const Home = connect(mapStateToProps, {
    load_posts,
})(HomeComponent);