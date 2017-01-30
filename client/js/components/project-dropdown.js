import React from 'react';
import {connect} from 'react-redux';

import * as actions from '../actions/actions';

class ProjectDropDown extends React.Component {
	constructor(props) {
		super(props);
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
			<select className="project-dropdown">
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