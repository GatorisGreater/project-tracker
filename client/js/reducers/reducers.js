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
	if (action.type === actions.POST_SUCCESS) {
		let project = action.project.name;
		let id = action.project._id;
		state = Object.assign({}, state, {currentProject: project
		}, {currentProjectId: id});
		return state;
	}
	if (action.type === actions.PUT_STORY_SUCCESS) {
		let story = action.story.story;
		state = Object.assign({}, state, {currentProjectStory: story
		});
		return state;
	}
	if (action.type === actions.PUT_TOOL_SUCCESS) {
		console.log(action);
		let tool = action.tool.tools.slice(-1)[0];
		state = Object.assign({}, state, {currentProjectTools: state.currentProjectTools.concat(tool)
		});
		return state;
	}
	if (action.type === actions.FETCH_SINGLE_SUCCESS) {
		console.log(action);
		let name = action.project.name;
		let story = action.project.story;
		let tools = action.project.tools;
		state = Object.assign({}, state, {selectedProject: name}, {selectedProjectStory: story}, {selectedProjectTools: tools
		});
		console.log(state);
		return state;
	}
	if (action.type === actions.FETCH_ALL_SUCCESS) {
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
	}	
	return state;
};

