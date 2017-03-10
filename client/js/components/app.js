import {connect} from 'react-redux';
import React from 'react';

import Header from './header';
import SelectedProjectDashboard from './selected-project-dashboard';
import CurrentProjectDashboard from './current-project-dashboard';
import ProjectDropDown from './project-dropdown';

import ProjectForm from './project-form';
import StoryForm from './story-form';
import ToolsForm from './tools-form';
import HomeButton from './home-button';


function App(props) {

  if (!props.selectedProject && !props.currentProject) {

  	return(
		    <div className="app">
		      	<Header />
		      	<h3>Look Up Previous Project</h3>		      	
		      	<ProjectDropDown />
		      	<h3>Record New Project</h3>
		    	<ProjectForm />
	    </div>
		)
  }

  else if (props.currentProject) {

  	return(
		    <div className="app">
		      	<Header />
		    	<CurrentProjectDashboard />
		      	<StoryForm />
		      	<ToolsForm />
		      	<HomeButton />
		    </div>
		)
  	}
  
	else { 

		return(

	    <div className="app">
	      	<Header />
	      	<ProjectDropDown />
	      	<SelectedProjectDashboard />
	      	<HomeButton />
	    </div>
	)
	}	
}

const mapStateToProps = (state, props) => {
	return {
		selectedProject: state.selectedProject,
		currentProject: state.currentProject
	}
}

export default connect (mapStateToProps)(App);
