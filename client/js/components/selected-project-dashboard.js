import React from 'react';
import {connect} from 'react-redux';

import * as actions from '../actions/actions';

class SelectedProjectDashboard extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		
		const selectedToolsArray = this.props.selectedProjectTools.map((tool, index) => {
			return <li key={index}>{tool}</li>
		});

		return (
			<div className="selected-project-dashboard">
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
		selectedProject: state.selectedProject,
		selectedProjectStory: state.selectedProjectStory,
		selectedProjectTools: state.selectedProjectTools
	}
}

export default connect(mapStateToProps)(SelectedProjectDashboard);