import {connect} from 'react-redux';
import React from 'react';

import Header from './header';

import ProjectForm from './project-form';
import StoryForm from './story-form';
import ToolsForm from './tools-form';


function App() {
  return(

    <div className="app">
      	<Header />
    	<ProjectForm />
      	<StoryForm />
      	<ToolsForm />
    </div>
)}

// export default connect ()(App);

export default App;