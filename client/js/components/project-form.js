import React from 'react';
import {connect} from 'react-redux';

import * as actions from '../actions/actions';

class ProjectForm extends React.Component {
	constructor(props) {
		super(props);
		this.trackProject = this.trackProject.bind(this);
	}

	trackProject(event) {
		event.preventDefault();
		this.props.dispatch(actions.trackProject(this.refs.input.value));
		document.getElementById('project-name').value='';
	}

    componentDidMount() {
        this.props.dispatch(
            actions.fetchAllProjects()
        );
    }  	

	render() {

		const projectDropDown = this.props.projectHistory.map((project, index) => {
			return <option value={index} key={index}>{project}</option>
		});

		return (
			<div className="project">
				<select className="project-dropdown">
				  {projectDropDown}
				</select>				
				<form className="project-form" onSubmit={this.trackProject}>
					<p>{this.props.currentProject}</p>
					<label htmlFor="project-name">Project Name: </label>
					<input type="text" id="project-name" placeholder="Amazing App Name" ref="input" required />
					<input type="submit" name="submit project" value="Track Project"/>
				</form>
			</div>
		)
	}
}

const mapStateToProps = (state, props) => {
	return {
		currentProject: state.currentProject,
		projectHistory: state.projectHistory
	}
}

export default connect(mapStateToProps)(ProjectForm);
