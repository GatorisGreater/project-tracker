import * as actions from '../actions/actions';

const initialState = {
	currentProject: '',
	currentProjectId: '',
	currentProjectStory: '',	
	currentProjectTools: [],
	projectNameHistory: [],
	projectIdHistory: [],
	selectedProject: '',
	selectedProjectStory: '',	
	selectedProjectTools: [],
};

export const projectReducer = (state, action) => {
	state = state || initialState;
	switch(action.type) {
	case actions.BACK_TO_LANDING :
	  state = Object.assign({}, state, initialState);
	  return state;
	  break;	
	case actions.POST_SUCCESS :
	  let project = action.project.name;
	  let id = action.project._id;
	  state = Object.assign({}, state, {currentProject: project
	  }, {currentProjectId: id});
	  return state;
	  break;
	case actions.PUT_STORY_SUCCESS :
	  let story = action.story.story;
	  state = Object.assign({}, state, {currentProjectStory: story
      });
	  return state;
	  break;
	case actions.PUT_TOOL_SUCCESS : 
	  console.log(action);
	  let tool = action.tool.tools.slice(-1)[0];
	  state = Object.assign({}, state, {currentProjectTools: state.currentProjectTools.concat(tool)
	  });
	  return state;
	  break;
	case actions.FETCH_SINGLE_SUCCESS :
	  console.log(action);
	  let name = action.project.name;
	  let fetchedStory = action.project.story;
	  let tools = action.project.tools;
	  state = Object.assign({}, state, {selectedProject: name}, {selectedProjectStory: fetchedStory}, {selectedProjectTools: tools
	  });
	  console.log(state);
	  return state;
	  break;
	case actions.FETCH_ALL_SUCCESS :
	  let projectNamesArray = [];
	  let projectIdArray = [];
	  for (var i = 0; i < action.projects.length; i++) {
	  projectNamesArray[i] = action.projects[i].name;
	  projectIdArray[i] = action.projects[i]._id;
	  }
	  state = Object.assign({}, state, {projectNameHistory: state.projectNameHistory.concat(projectNamesArray)
	  }, {projectIdHistory: state.projectIdHistory.concat(projectIdArray)
	  });
	  return state;
	  break;
	default :
	  return state;
	}
};
