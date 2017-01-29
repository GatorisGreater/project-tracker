import React from 'react';
import {connect} from 'react-redux';

import * as actions from '../actions/actions';

class FooterForm extends React.Component {
	constructor(props) {
		super(props);
		this.submitGoal = this.submitGoal.bind(this);
	}

	submitGoal(event) {
		event.preventDefault();
		this.props.dispatch(actions.postGoals(this.refs.input.value));
		document.getElementById('form-text').value='';
	}

    componentDidMount() {
        this.props.dispatch(
            actions.fetchGoals()
        );
    }  	

	render() {

		const goalsDropDown = this.props.goalHistory.map((goal, index) => {
			return <option value={index} key={index}>{goal}</option>
		});

		return (
			<div className="footer">
				<form className="footer-form" onSubmit={this.submitGoal}>
					<p>{this.props.currentGoal}</p>
					<label htmlFor="form-text">Project Name</label>
					<input type="text" id="form-text" placeholder="Amazing App Name" ref="input" required />
					<input type="submit" name="submit step" value="Track Project"/>
				</form>
				<select className="footer-dropdown">
				  {goalsDropDown}
				</select>
			</div>
		)
	}
}

const mapStateToProps = (state, props) => {
	return {
		currentGoal: state.currentGoal,
		goalHistory: state.goalHistory
	}
}

export default connect(mapStateToProps)(FooterForm);
