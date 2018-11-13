import React from 'react'; 
import ReactDOM from 'react-dom'; 
import { connect } from 'react-redux'; 
import {} from '../../ducks/post'; 
import './styles.css'; 
import {Header} from '../../components';
import { Typography } from '@material-ui/core';
 
class PostInfoComponent extends React.Component { 
    
    render() { 
        const item = this.props.lorf=="lost" ? this.props.lost.find(item => item._id==this.props.match.params.id) :  this.props.found.find(item => item._id==this.props.match.params.id)
        console.log(item);
        return ( 
            <div>
                <Header />
                <Typography>{item._id}</Typography>
                <Typography>{item.created}</Typography>
                <Typography>{item.description}</Typography>
                <Typography>{item.location}</Typography>
                <Typography>{item.name}</Typography>
                <Typography>{item.photo}</Typography>
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