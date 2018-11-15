import React from 'react';
import { connect } from 'react-redux';
import {
    toggle_modal,
    handle_delete_post,
    handle_form_change
} from '../../ducks/post';
import './styles.css';
import { Header } from '../../components';
import { Typography, Button, TextField } from '@material-ui/core';
import { Delete } from '@material-ui/icons';
import Modal from 'react-responsive-modal';

class PostInfoComponent extends React.Component {
    handleFormChange = (name) => (event) => {
        this.props.handle_form_change(name, event.target.value);
    }
    toggleModal = () => {
        this.props.toggle_modal();
    }
    handleDeletePost = (formType, id) => {
        this.props.handle_delete_post(formType, id, this.props.password);
    }

    render() {
        const item = this.props.lorf==="lost" ? this.props.lost.find(item => item._id===this.props.match.params.id) :  this.props.found.find(item => item._id===this.props.match.params.id)
        console.log(item);
        console.log(this.props.error_message);
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
                        <img src={'/api/'+this.props.lorf+'/posts/photo/'+item._id} style={{width: '200px'}} alt={'/api/'+this.props.lorf+'/posts/photo/'+item._id}/>
                    </div>)}
                <Typography>{item.reward}</Typography>
                  
                <Button onClick={this.toggleModal}>
                    <Delete />
                </Button>
                <Modal
                  open={this.props.modal_open}
                  onClose={this.toggleModal}
                  center
                  classNames={{ overlay: 'custom-overlay', modal: 'custom-modal' }}
                >
                    <h2 style={{fontFamily:'monospace'}}>Delete Post</h2>
                    <TextField required
                      label="Password"
                      margin="normal"
                      autoFocus={true}
                      onChange={this.handleFormChange("password")}
                    />
                    <p>{this.props.error_message}</p>
                    <br/><br/><br/>
                    <Button variant="contained" color="primary" onClick={() => {this.handleDeletePost(this.props.lorf, item._id);}}>
                        Delete
                    </Button>
                    <Button onClick={this.toggleModal} style={{color: '#4054AC'}}>Cancel</Button>
                </Modal>
            </div>
        );
    }
}

export {PostInfoComponent};

const mapStateToProps = (state, ownProps) => {
    const { post } = state;
    const { lost, found, modal_open, error_message, password } = post;
    return {
        ...ownProps,
        lost,
        found,
        modal_open,
        error_message,
        password
    };
};

export const PostInfo=connect(mapStateToProps,{
    toggle_modal,
    handle_delete_post,
    handle_form_change
})(PostInfoComponent);
