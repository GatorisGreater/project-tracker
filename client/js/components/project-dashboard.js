import React from 'react';
import {connect} from 'react-redux';

import * as actions from '../actions/actions';

class ProjectDashboard extends React.Component {
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

		const selectedToolsArray = this.props.selectedProjectTools.map((tool, index) => {
			return <li key={index}>{tool}</li>
		});

		return (
			<div className="project-dashboard">
				<select className="project-dropdown" onChange={this.fetchSingleProject}>
				{projectDropDown}
				</select>
				<ul className="selected-project">
				<p>{this.props.selectedProject}</p>
				<p>{this.props.selectedProjectStory}</p>
				<p>{selectedToolsArray}</p>
				</ul>
			</div>
		)
	}
}

const mapStateToProps = (state, props) => {
	return {
		projectNameHistory: state.projectNameHistory,
		selectedProject: state.selectedProject,
		selectedProjectStory: state.selectedProjectStory,
		selectedProjectTools: state.selectedProjectTools
	}
}

export default connect(mapStateToProps)(ProjectDashboard);