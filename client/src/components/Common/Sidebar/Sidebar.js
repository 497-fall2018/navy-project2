import React, {Component} from 'react';

import './styles.css';


class Sidebar extends Component {
    state = {
        query: '',
    }

    handleInputChange = () => {
        this.setState({
            query: this.search.value
        })
    }
    
    render() {
        const landingUrl = "lostnfound.mmorderell.com";
        return (
            <div className="sidebar">
                <div className="innerSidebar">
                    <form>
                        <input
                            placeholder="Search for..."
                            ref={input => this.search = input}
                            onChange={this.handleInputChange}
                        />  
                    </form>
                    
                    <form>
                        <br/>
                        <input type="radio"/> Tech (25)<br/>
                        <input type="radio"/> Norris (15)<br/>
                        <input type="radio"/> Plex (4)<br/>
                        <input type="radio"/> Sheridan Rd (1)<br/>
                        <input type="radio"/> Hinman (1)<br/>
                        <input type="radio"/> Annenberg (1)<br/>
                        <input type="radio"/> SPAC (1)<br/>
                    </form>

                </div>
            </div>
        );
    }
}

export {
    Sidebar
};
