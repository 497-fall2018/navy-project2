import React, {Component} from 'react';
import { connect } from 'react-redux';
import {IconButton, Button, TextField, Grid} from '@material-ui/core';
import {AddAPhoto} from '@material-ui/icons';

import {
	change_author,
	change_description,
	change_item_preview,
	submit_new_post,
} from '../../ducks/post';
import {
    Header
} from '../../components';
import './styles.css';

class PostFormComponent extends Component {
	handleNameChange = (event) => {
		this.props.change_author(event.target.value);
	}
	handleDescriptionChange = (event) => {
		this.props.change_description(event.target.value);
	}
	handleItemPreviewChange = (event) => {
		this.props.change_item_preview(URL.createObjectURL(event.target.files[0]));
	}
	handlePostFormSubmit = () => {
		this.props.submit_new_post(this.props.author,this.props.description);
	}

	render() {
		const landingUrl = "/";
		return (
			<div>
				<Header />
				<form style={{padding: "0 20%", paddingTop: "5%"}}>
					<TextField
						label="Item"
						fullWidth
						variant="outlined"
						onChange={this.handleNameChange}
					/><br/><br/>
					<TextField
						label="Location"
						fullWidth
						variant="outlined"
						onChange={this.handleNameChange}
					/><br/><br/>
					<TextField
						label="Email"
						fullWidth
						variant="outlined"
					/><br/><br/>
					<TextField
						label="Description"
						fullWidth
						variant="outlined"
						multiline
						rows="8"
					/><br/><br/>
					<TextField
						label="School"
						fullWidth
						variant="outlined"
					/><br/><br/>
					<TextField
						label="Reward"
						fullWidth
						variant="outlined"
					/><br/><br/>
					<input style={{display: 'none'}} accept="image/*" onChange={this.handleItemPreviewChange} id="icon-button-file" type="file"/>
					<img style={{border: '0px'}} src={this.props.file} alt={this.props.file} style={{width: "50%"}}/><br/>
					<Grid
						justify="space-between"
						container
					>
						<Grid item>
							<label htmlFor="icon-button-file">
								<IconButton color="primary" component="span">
									<AddAPhoto style={{ fontSize: 40}}/>
								</IconButton> <span/>
							</label>
						</Grid>
						<Grid item>
							<br/>
							<Button style={{background: '#4054AC', color: 'white'}}><a href={landingUrl} style={{color: "white"}}>Submit</a></Button>
							
						</Grid>
					</Grid>
					
				</form>
			</div>
		)
	}
}

export { PostFormComponent };

const mapStateToProps = (state, ownProps) => {
	const { post } = state;
	const { file } = post;
	return {
		...ownProps,
		file,
	};
};

export const PostForm = connect(mapStateToProps, {
	change_author,
	change_description,
	change_item_preview
})(PostFormComponent);