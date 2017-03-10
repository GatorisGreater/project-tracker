import React from 'react';
import {connect} from 'react-redux';

import * as actions from '../actions/actions';

class StoryForm extends React.Component {
	constructor(props) {
		super(props);
		this.submitStory = this.submitStory.bind(this);
	}

	submitStory(event) {
		event.preventDefault();
		this.props.dispatch(actions.putStory(this.refs.input.value));
		document.getElementById('story-text').value='';
	}


	render() {

		return (
			<form className="story-form" onSubmit={this.submitStory}>
				<label htmlFor="story-text">User Experience: </label>
				<input type="text" id="story-text" placeholder="The User Experience As You See It" ref="input" />
				<input type="submit" name="submit story details" value="Add Story"/>
			</form>
		)
	}
}

export default connect ()(StoryForm);