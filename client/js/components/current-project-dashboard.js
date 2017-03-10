import React from 'react';
import {connect} from 'react-redux';

import * as actions from '../actions/actions';

class CurrentProjectDashboard extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		
		const currentToolsArray = this.props.currentProjectTools.map((tool, index) => {
			return <li key={index}>{tool}</li>
		});

		return (
			<div className="current-project-dashboard">
				<ul className="current-project">
				<p>{this.props.currentProject}</p>
				<p>{this.props.currentProjectStory}</p>
				<p>{currentToolsArray}</p>
				</ul>
			</div>
		)
	}
}

const mapStateToProps = (state, props) => {
	return {
		currentProject: state.currentProject,
		currentProjectStory: state.currentProjectStory,
		currentProjectTools: state.currentProjectTools
	}
}

export default connect(mapStateToProps)(CurrentProjectDashboard);