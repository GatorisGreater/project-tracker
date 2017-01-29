import React from 'react';
import {connect} from 'react-redux';

import * as actions from '../actions/actions';

class ListForm extends React.Component {
	constructor(props) {
		super(props);
		this.submitStep = this.submitStep.bind(this);
	}

	submitStep(event) {
		event.preventDefault();
		this.props.dispatch(actions.putStep(this.refs.input.value));
		document.getElementById('list-text').value='';
	}


	render() {

		const stepsArray = this.props.currentGoalSteps.map((step, index) => {
			return <li key={index}>{step}</li>
		});

		return (
			<form className="list-form" onSubmit={this.submitStep}>
				<label htmlFor="list-text">Project Details</label>
				<input type="text" id="list-text" placeholder="Who It's For, Languages/Tools Used, Functionality" ref="input" />
				<input type="submit" name="submit project details" value="Add Detail"/>
				<p>{stepsArray}</p>
			</form>
		)
	}
}

const mapStateToProps = (state, props) => {
	return {
		currentGoalSteps: state.currentGoalSteps
	}
}

export default connect (mapStateToProps)(ListForm);
