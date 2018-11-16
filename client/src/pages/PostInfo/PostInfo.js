import React from 'react';
import { connect } from 'react-redux';
import {
    toggle_modal,
    handle_delete_post,
    handle_form_change
} from '../../ducks/post';
import './styles.css';
import { Header } from '../../components';
import { Typography, Button, TextField, Paper, Grid } from '@material-ui/core';
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
        const item = this.props.lorf === "lost" ? this.props.lost.find(item => item._id === this.props.match.params.id) : this.props.found.find(item => item._id === this.props.match.params.id)
        console.log(item);
        console.log(this.props.error_message);
        return (
            <div>
                <Header />
                <br></br>
                <br></br>
                <Grid container spacing={24} id="grid">
                    <Grid item xs={12}>
                        <Paper className={{padding: 24 * 2,textAlign: 'center',}}>
                            {item.photo && (
                            <div>
                            <img src={`/api/${this.props.lorf}/posts/photo/${item._id}`} id={"item_img"} alt={'/api/'+this.props.lorf+'/posts/photo/'+item._id}/>
                            </div>)}
                        </Paper>
                    </Grid>
                    <Grid item xs={12}>
                        <Paper className={{padding: 24 * 2,textAlign: 'center',}}>
                            <div id="text-content">
                                <Typography id="title">{item.name}</Typography>
                                <Typography><b>Posted:</b> {(new Date(item.created)).toLocaleString()}</Typography>
                                <Typography><b>Description:</b> {item.description}</Typography>
                                <Typography><b>Location:</b> {item.location}</Typography>
                                <Typography><b>Reward:</b> ${item.reward}</Typography>
                            </div>
                        </Paper>
                    </Grid>
                    <div id="delete_div">
                        <div>Posted this item? You can delete it here.</div>
                        <Button onClick={this.toggleModal}>
                            <Delete />
                        </Button>
                    </div>
                </Grid>
                
                  
               
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

export { PostInfoComponent };

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

export const PostInfo = connect(mapStateToProps, {
    toggle_modal,
    handle_delete_post,
    handle_form_change
})(PostInfoComponent);