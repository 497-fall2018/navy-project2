import React from 'react';
import { connect } from 'react-redux';
import {} from '../../ducks/post';
import './styles.css';
import {Header} from '../../components';
import { Typography } from '@material-ui/core';

class PostInfoComponent extends React.Component {

    render() {
        const item = this.props.lorf==="lost" ? this.props.lost.find(item => item._id===this.props.match.params.id) :  this.props.found.find(item => item._id===this.props.match.params.id)
        console.log(item);
        return (
            <div>
                <Header />
                <Typography>{item._id}</Typography>
                <Typography>{(new Date(item.created)).toLocaleString()}</Typography>
                <Typography>{item.description}</Typography>
                <Typography>{item.location}</Typography>
                <Typography>{item.name}</Typography>
                {item.photo && (
                    <div>
                        <img src={'/api/'+this.props.lorf+'/posts/photo/'+item._id} style={{width: '40%'}} alt={'/api/'+this.props.lorf+'/posts/photo/'+item._id}/>
                    </div>)}
                <Typography>{item.reward}</Typography>
            </div>
        );
    }
}

export {PostInfoComponent};

const mapStateToProps = (state, ownProps) => {
    const { post } = state;
    const { lost, found} = post;
    return {
        ...ownProps,
        lost,
        found
    };
};

export const PostInfo=connect(mapStateToProps,{})(PostInfoComponent);
