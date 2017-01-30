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
		this.props.dispatch(actions.fetchSingleProject(this.refs.input.value));
	}

	componentDidMount() {
		this.props.dispatch(actions.fetchAllProjects()
		);
	}

	render() {
		
		const projectDropDown = this.props.projectHistory.map((project, index) => {
			return <option value={index} key={index}>{project}</option>
		});


		return (
			<select className="project-dropdown" onChange={this.fetchSingleProject}>
			{projectDropDown}
			</select>
		)
	}
}

const mapStateToProps = (state, props) => {
	return {
		projectHistory: state.projectHistory
	}
}

export default connect(mapStateToProps)(ProjectDropDown);