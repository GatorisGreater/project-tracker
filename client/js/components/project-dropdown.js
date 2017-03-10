import React from 'react';
import {connect} from 'react-redux';

import * as actions from '../actions/actions';

class ProjectDropDown extends React.Component {
	constructor(props) {
		super(props);
		this.fetchSingleProject = this.fetchSingleProject.bind(this);
	}

	fetchSingleProject(event) {
		event.preventDefault();
		this.props.dispatch(actions.fetchSingleProject(event.currentTarget.value));
	}

	render() {
		
		const projectDropDown = this.props.projectNameHistory.map((project, index) => {
			return <option value={index} key={index}>{project}</option>
		});

		return (
			<div className="project-dashboard">
				<select className="project-dropdown" onChange={this.fetchSingleProject}>
				{projectDropDown}
				</select>
			</div>
		)
	}
}

const mapStateToProps = (state, props) => {
	return {
		projectNameHistory: state.projectNameHistory,
	}
}

export default connect(mapStateToProps)(ProjectDropDown);