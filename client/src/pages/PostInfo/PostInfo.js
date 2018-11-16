import React from 'react';
import { connect } from 'react-redux';
import {
    toggle_modal,
    toggle_update_modal,
    handle_delete_post,
    handle_form_change,
    handle_update_post
} from '../../ducks/post';
import './styles.css';
import { Header } from '../../components';
import { Typography, Button, TextField } from '@material-ui/core';
import { Delete, Edit } from '@material-ui/icons';
import Modal from 'react-responsive-modal';
import { Redirect } from "react-router-dom";

class PostInfoComponent extends React.Component {
    handleFormChange = (name) => (event) => {
        this.props.handle_form_change(name, event.target.value);
    }
    toggleModal = () => {
        this.props.toggle_modal();
    }
    toggleUpdateModal = () => {
        this.props.toggle_update_modal();
    }
    handleDeletePost = (id) => {
        this.props.handle_delete_post(this.props.lorf, id, this.props.password);
    }
    handleUpdatePost = (item) => {
        this.props.handle_update_post(this.props.lorf, item, this.props.password);
    }

    render() {
        const item = this.props.lorf==="lost" ? this.props.lost.find(item => item._id===this.props.match.params.id) :  this.props.found.find(item => item._id===this.props.match.params.id)

        if (this.props.redirect) {
            return (<Redirect to='/postform' />);
        }

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
                  
                <Button onClick={this.toggleUpdateModal}>
                    <Edit />
                </Button>
                <Modal
                  open={this.props.update_modal_open}
                  onClose={this.toggleUpdateModal}
                  center
                  classNames={{ overlay: 'custom-overlay', modal: 'custom-modal' }}
                >
                    <h2 style={{fontFamily:'monospace'}}>Please enter the password</h2>
                    <TextField required
                      label="Password"
                      margin="normal"
                      autoFocus={true}
                      helperText={this.props.error_message}
                      onChange={this.handleFormChange("password")}
                    />
                    <br/><br/><br/>
                    <Button variant="contained" color="primary" onClick={() => {this.handleUpdatePost(item);}}>
                        Next
                    </Button>
                    <Button onClick={this.toggleUpdateModal} style={{color: '#4054AC'}}>Cancel</Button>
                </Modal>

                <Button onClick={this.toggleModal}>
                    <Delete />
                </Button>
                <Modal
                  open={this.props.modal_open}
                  onClose={this.toggleModal}
                  center
                  classNames={{ overlay: 'custom-overlay', modal: 'custom-modal' }}
                >
                    <h2 style={{fontFamily:'monospace'}}>Please enter the password</h2>
                    <TextField required
                      label="Password"
                      margin="normal"
                      autoFocus={true}
                      helperText={this.props.error_message}
                      onChange={this.handleFormChange("password")}
                    />
                    <br/><br/><br/>
                    <Button variant="contained" color="primary" onClick={() => {this.handleDeletePost(item._id);}}>
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
    const { lost, found, modal_open, update_modal_open, error_message, password, redirect } = post;
    return {
        ...ownProps,
        lost,
        found,
        modal_open,
        update_modal_open,
        error_message,
        password,
        redirect
    };
};

export const PostInfo=connect(mapStateToProps,{
    toggle_modal,
    toggle_update_modal,
    handle_delete_post,
    handle_form_change,
    handle_update_post
})(PostInfoComponent);
