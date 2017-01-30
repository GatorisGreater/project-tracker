import {connect} from 'react-redux';
import React from 'react';

import Header from './header';
import ProjectDropDown from './project-dropdown';

import ProjectForm from './project-form';
import StoryForm from './story-form';
import ToolsForm from './tools-form';


function App() {
  return(

    <div className="app">
      	<Header />
      	<ProjectDropDown />
    	<ProjectForm />
      	<StoryForm />
      	<ToolsForm />
    </div>
)}

// export default connect ()(App);

export default App;