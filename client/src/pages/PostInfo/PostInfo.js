import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import InfoCard from '../../components/Posts';
import {} from '../../ducks/post';
import './styles.css';

class InfoPage extends React.Component {
    render() {
        return (
            <InfoCard/>
        );
    }
}

export default InfoPage;

const mapStateToProps = (state, ownProps) => {
    // const { } = state;
    // const { } = ;
    return {
        ...ownProps,

    };
};

export const Info = connect(mapStateToProps, {})(InfoPage);