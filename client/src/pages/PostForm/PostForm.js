import React, {Component} from 'react';
import { connect } from 'react-redux';
import {IconButton, Button, TextField, Grid, InputAdornment, FormControlLabel, FormControl, FormLabel, RadioGroup, Radio} from '@material-ui/core';
import {AddAPhoto, Visibility, VisibilityOff} from '@material-ui/icons';

import {
	change_author,
	change_description,
	change_item_preview,
	submit_new_post,
	handle_click_show_password,
	handle_password_change,
	handle_form_type_change
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
	handleClickShowPassword = () => {
		this.props.handle_click_show_password();
	}
	handlePasswordChange = (event) => {
		this.props.handle_password_change(event.target.value);
	}
	handleFormTypeChange = (event) => {
		this.props.handle_form_type_change(event.target.value);
	}

	render() {
		const landingUrl = "/";
		return (
			<div>
				<Header />
				<form style={{padding: "0 20%", paddingTop: "5%"}}>
					<FormControl component="fieldset">
						<FormLabel component="legend">Did you find/lose the item?</FormLabel>
						<RadioGroup
							aria-label="FormType"
							value={this.props.showQuestions ? "found" : "lost"}
							onChange={this.handleFormTypeChange}
						>
							<FormControlLabel value="found" control={<Radio style={{color: '#4054AC'}} />} label="Found" />
							<FormControlLabel value="lost" control={<Radio style={{color: '#4054AC'}} />} label="Lost" />
						</RadioGroup>
					</FormControl>
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
						style={{display: this.props.showQuestions ? 'none' : ""}}
					/>
					<TextField
						label="Questions"
						fullWidth
						variant="outlined"
						style={{display: this.props.showQuestions ? "" : 'none'}}
					/>
					<br/><br/>
					<TextField
						variant="outlined"
						fullWidth
						type={this.props.showPassword ? 'text' : 'password'}
						label="Password"
						value={this.props.password}
						onChange={this.handlePasswordChange}
						InputProps={{
							endAdornment: (
								<InputAdornment position="end">
									<IconButton
										aria-label="Toggle password visibility"
										onClick={this.handleClickShowPassword}
									>
										{this.props.showPassword ? <VisibilityOff /> : <Visibility />}
									</IconButton>
								</InputAdornment>
							),
						}}
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
	const { file, showPassword, password, showQuestions } = post;
	return {
		...ownProps,
		file,
		showPassword,
		password,
		showQuestions
	};
};

export const PostForm = connect(mapStateToProps, {
	change_author,
	change_description,
	change_item_preview,
	handle_click_show_password,
	handle_password_change,
	handle_form_type_change
})(PostFormComponent);
