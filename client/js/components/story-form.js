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

		const toolArray = this.props.currentProjectTools.map((tool, index) => {
			return <li key={index}>{tool}</li>
		});

		return (
			<form className="story-form" onSubmit={this.submitStory}>
				<label htmlFor="story-text">User Experience: </label>
				<input type="text" id="story-text" placeholder="Describe the User Experience Here" ref="input" />
				<input type="submit" name="submit story details" value="Add Story"/>
				<p>{toolArray}</p>
			</form>
		)
	}
}

const mapStateToProps = (state, props) => {
	return {
		currentProjectTools: state.currentProjectTools
	}
}

export default connect (mapStateToProps)(StoryForm);