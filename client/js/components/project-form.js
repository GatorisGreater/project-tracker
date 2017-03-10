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

		const toolArray = this.props.currentProjectTools.map((tool, index) => {
			return <li key={index}>{tool}</li>
		});		

		return (
			
				<form className="project-form" onSubmit={this.trackProject}>
					<p>{this.props.currentProject}</p>
					<p>{this.props.currentProjectStory}</p>
					<p>{toolArray}</p>
					<label htmlFor="project-name">Project Name: </label>
					<input type="text" id="project-name" placeholder="Amazing App Name" ref="input" required />
					<input type="submit" name="submit project" value="Track Project"/>
				</form>
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

export default connect(mapStateToProps)(ProjectForm);
