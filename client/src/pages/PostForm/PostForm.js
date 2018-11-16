import React, {Component} from 'react';
import { connect } from 'react-redux';
import { IconButton, Button, TextField, Grid, InputAdornment, FormControlLabel, FormControl, FormLabel, RadioGroup, Radio } from '@material-ui/core';
import { AddAPhoto, Visibility, VisibilityOff } from '@material-ui/icons';
import { Link } from "react-router-dom";

import {
	change_description,
	change_email,
	change_form_type,
	change_item_preview,
	change_location_form,
	change_name,
	change_password,
	change_question,
	change_reward,
	handle_click_show_password,
	submit_new_found_post,
	submit_new_lost_post,
	handle_image_change
} from '../../ducks/post';
import {
    Header
} from '../../components';
import './styles.css';

class PostFormComponent extends Component {
	handleFormTypeChange = (event) => {
		this.props.change_form_type(event.target.value);
	}
	handleNameChange = (event) => {
		this.props.change_name(event.target.value);
	}
	handleLocationChange = (event) => {
		this.props.change_location_form(event.target.value);
	}
	handleEmailChange = (event) => {
		this.props.change_email(event.target.value);
	}
	handleDescriptionChange = (event) => {
		this.props.change_description(event.target.value);
	}
	handleQuestionChange = (event) => {
		this.props.change_question(event.target.value);
	}
	handleRewardChange = (event) => {
		this.props.change_reward(event.target.value);
	}
	handlePasswordChange = (event) => {
		this.props.change_password(event.target.value);
	}

	handleImageChange = (event) => {
		this.props.change_item_preview(URL.createObjectURL(event.target.files[0]));
		this.props.handle_image_change(event.target.files[0]);
	}

	handlePostFormSubmit = () => {
		if (this.props.form_type === "lost") {
			this.props.submit_new_lost_post(this.props.name, this.props.location, this.props.email, this.props.description, this.props.reward, this.props.password, this.props.image, () => {this.props.history.push('/');});
		}
		else {
			this.props.submit_new_found_post(this.props.name,this.props.location, this.props.email, this.props.description, this.props.question, this.props.password, this.props.image, () => {this.props.history.push('/');});
		}


	}
	handleClickShowPassword = () => {
		this.props.handle_click_show_password();
	}

	render() {
		return (
			<div>
				<Header />
				<form>
					<FormControl component="fieldset">
						<FormLabel component="legend">Did you find/lose the item?</FormLabel>
						<RadioGroup
							aria-label="FormType"
							value={this.props.form_type}
							onChange={this.handleFormTypeChange}
						>
							<FormControlLabel value="found" control={<Radio style={{color: '#4054AC'}} />} label="Found" />
							<FormControlLabel value="lost" control={<Radio style={{color: '#4054AC'}} />} label="Lost" />
						</RadioGroup>
					</FormControl>
					<br/><br/>
					<TextField
						required
						label="Item"
						fullWidth
						variant="outlined"
						value={this.props.name}
						onChange={this.handleNameChange}
					/><br/><br/><br/>
					<TextField
						required
						label="Location"
						fullWidth
						variant="outlined"
						helperText={"Location where " + (this.props.form_type === "found" ? "you found it" :  "you probably lost it")}
						value={this.props.location}
						onChange={this.handleLocationChange}
					/><br/><br/>
					<TextField
						required
						label="Email"
						fullWidth
						variant="outlined"
						value={this.props.email}
						onChange={this.handleEmailChange}
					/><br/><br/><br/>
					<TextField
						required
						label="Description"
						fullWidth
						variant="outlined"
						value={this.props.description}
						onChange={this.handleDescriptionChange}
						multiline
						rows="8"
					/><br/><br/><br/>
					<TextField
						required
						label="Reward"
						fullWidth
						variant="outlined"
						value={this.props.reward}
						onChange={this.handleRewardChange}
						style={{display: this.props.form_type === "found" ? 'none' : ""}}
					/>
					<TextField
						required
						label="Questions"
						fullWidth
						variant="outlined"
						value={this.props.question}
						onChange={this.handleQuestionChange}
						helperText="Questions for identification of the owner"
						style={{display: this.props.form_type === "found" ? "" : 'none'}}
					/>
					<br/><br/>
					<TextField
						required
						variant="outlined"
						fullWidth
						type={this.props.showPassword ? 'text' : 'password'}
						label="Password"
						value={this.props.password}
						onChange={this.handlePasswordChange}
						helperText="Password will be required when you delete this post later"
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
					<input style={{display: 'none'}} accept="image/*" onChange={this.handleImageChange} id="icon-button-file" type="file"/>
					<Grid style={{border: "0.5px solid rgba(0, 0, 0, 0.2)", borderRadius: '4px', boxShadow: '0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12)'}}>
						<Grid item style={{minHeight: "100px"}}>
							<img src={this.props.file} alt={this.props.file} style={{border: '0px', width: "50%", padding: "2% 3%"}}/><br/>
						</Grid>
						<Grid item>
							<label htmlFor="icon-button-file">
								<IconButton color="primary" component="span">
									<AddAPhoto style={{ fontSize: 40}}/>
								</IconButton> <span/>
							</label>
						</Grid>
					</Grid>
					<br/><br/>
					<Button variant="contained" color="primary" onClick={()=>this.handlePostFormSubmit()} disabled={this.props.name==="" ||
						this.props.location==="" || this.props.description==="" || this.props.email==="" ||
						(this.props.reward==="" && this.props.question==="") || this.props.password==="" }>
						Submit
					</Button>
					<Link to='/lost'>
						<Button style={{background: '#4054AC', color: 'white'}}>Cancel</Button>
					</Link>
				</form>
			</div>
		)
	}
}

export { PostFormComponent };

const mapStateToProps = (state, ownProps) => {
	const { post } = state;
	const { description, email, file, form_type, location, name, password, question, reward, showPassword, image } = post;
	return {
		...ownProps,
		description,
		email,
		file,
		form_type,
		location,
		name,
		password,
		question,
		reward,
		showPassword,
		image
	};
};

export const PostForm = connect(mapStateToProps, {
	change_description,
	change_email,
	change_form_type,
	change_item_preview,
	change_location_form,
	change_name,
	change_password,
	change_question,
	change_reward,
	handle_click_show_password,
	submit_new_found_post,
	submit_new_lost_post,
	handle_image_change
})(PostFormComponent);
