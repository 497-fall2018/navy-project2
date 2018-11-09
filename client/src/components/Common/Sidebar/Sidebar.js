import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Radio } from '@material-ui/core';
import _ from 'lodash';
import Input from '@material-ui/core/Input';

import './styles.css';
import {
    change_location_search
} from '../../../ducks/post';

class SidebarComponent extends Component {
    state = {
        query: '',
    }

    handleInputChange = () => {
        this.setState({
            query: this.search.value
        })
    }

    handleLocationSearchChange = (event) => {
        this.props.change_location_search(event.target.value);
    };

    populateLocations = () => {
        return _.map((this.props.lorf === "lost") ? this.props.lost_locations : this.props.found_locations, (item, index)=> {
            return (
                <div className="locationRadio" key={index}>
                    <Radio
                        checked={this.props.location_search === item[0]}
                        onChange={this.handleLocationSearchChange}
                        value={item[0]}
                        name="location-picker"
                        color="primary"
                    />
                    {item[0]} ({item[1]})
                </div>
            )
        });
    }

    render() {
        return (
            <div className="sidebar">
                <div className="innerSidebar">
                    <form>
                        <Input
                            type="search"
                            fullWidth="true"
                            placeholder="Search for..."
                            ref={input => this.search = input}
                            onChange={this.handleInputChange}
                        />

                        <h3>Locations: </h3>
                        {this.populateLocations()}
                    </form>
                </div>
            </div>
        );
    }
}

export { SidebarComponent };

const mapStateToProps = (state, ownProps) => {
	const { post } = state;
	const { location_search, found_locations, lost_locations } = post;
	return {
		...ownProps,
        location_search,
        found_locations,
		lost_locations,
	};
};

export const Sidebar = connect(mapStateToProps, {
    change_location_search,
})(SidebarComponent);
