import React, {Component} from 'react';

import './styles.css';


class Header extends Component {

    render() {
        const landingUrl = "lostnfound.mmorderell.com";
        return (
        <div className="header">
            <div className="innerHeader">
                <h2>Lost & Found</h2>
                <div className={window.innerWidth > 425 ? "topRight" : "hideTopRight"}>
                    <a href={landingUrl} className="topRightLink">
                        Lost
                    </a>
                    <a href={landingUrl} className="topRightLink">
                        Found
                    </a>
                </div>
            </div>
        </div>);
    }
}

export {
    Header
};
