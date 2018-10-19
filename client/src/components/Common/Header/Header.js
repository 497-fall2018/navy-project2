import React, {Component} from 'react';

import './styles.css';


class Header extends Component {

    render() {
        const landingUrl = "lostnfound.mmorderell.com";
        return (
        <div className="header">
            <span>Lost & Found</span>

            <div className="headerLinks">
                <a href={landingUrl} className="topRightLink">
                    Lost
                </a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <a href={landingUrl} className="topRightLink">
                    Found
                </a>
            </div>
        </div>);
    }
}

export {
    Header
};
