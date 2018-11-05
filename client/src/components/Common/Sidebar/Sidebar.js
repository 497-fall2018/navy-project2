import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Radio } from '@material-ui/core';
import _ from 'lodash';

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
        return _.map(this.props.locations, (item, index)=> {
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
<<<<<<< HEAD
                        <Input
=======
                        <input
>>>>>>> e8e931861a97bbc3ab5d3f920adde7f2dc093309
                            type="search"
                            fullWidth="true"
                            placeholder="Search for..."
                            ref={input => this.search = input}
                            onChange={this.handleInputChange}
                        />
                    </form>
<<<<<<< HEAD
                    
                    <form>
                        {/* <RadioGroup> */}
                            <Radio/> Tech (25)<br/>
                            <Radio type="radio"/> Norris (15)<br/>
                            <Radio type="radio"/> Plex (4)<br/>
                            <Radio type="radio"/> Sheridan Rd (1)<br/>
                            <Radio type="radio"/> Hinman (1)<br/>
                            <Radio type="radio"/> Annenberg (1)<br/>
                            <Radio type="radio"/> SPAC (1)<br/>
                        {/* </RadioGroup> */}
                    </form>

=======
                    {this.populateLocations()}
>>>>>>> e8e931861a97bbc3ab5d3f920adde7f2dc093309
                </div>
            </div>
        );
    }
}

export { SidebarComponent };

const mapStateToProps = (state, ownProps) => {
	const { post } = state;
	const { location_search, locations } = post;
	return {
		...ownProps,
        location_search,
		locations,
	};
};

export const Sidebar = connect(mapStateToProps, {
    change_location_search,
})(SidebarComponent);
