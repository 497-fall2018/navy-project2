import React, {Component} from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import Input from '@material-ui/core/Input';
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
                        <Input
                            type="search"
                            fullWidth="true"
                            placeholder="Search for..."
                            ref={input => this.search = input}
                            onChange={this.handleInputChange}
                        />  
                    </form>
                    
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

                </div>
            </div>
        );
    }
}

export {
    Sidebar
};
