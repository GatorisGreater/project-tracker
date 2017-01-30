import * as actions from '../actions/actions';

const initialState = {
	currentProject: '',
	currentProjectId: '',
	currentProjectTools: [],
	currentProjectStory: '',
	projectHistory: []
};

export const projectReducer = (state, action) => {
	state = state || initialState;
	if (action.type === actions.POST_SUCCESS) {
		console.log(action);
		let project = action.project.name;
		let id = action.project._id;
		state = Object.assign({}, state, {currentProject: project
		}, {currentProjectId: id});
		return state;
	}
	if (action.type === actions.PUT_STORY_SUCCESS) {
		console.log(action);
		let story = action.project.story;
		// let id = action.project._id;
		state = Object.assign({}, state, {currentProjectStory: story
		}, {currentProjectId: id});
		return state;
	}
	if (action.type === actions.PUT_TOOL_SUCCESS) {
		console.log(action);
		let tool = action.step.steps.slice(-1)[0];
		state = Object.assign({}, state, {currentProjectTools: state.currentProjectTools.concat(tool)
		});
		return state;
	}
	if (action.type === actions.FETCH_SUCCESS) {
	 	let projectsArray = [];
	 	for (var i = 0; i < action.projects.length; i++) {
	 		projectsArray[i] = action.projects[i].name;
	 	}
		state = Object.assign({}, state, {projectHistory: state.projectHistory.concat(projectsArray)
		});
		return state;
	}	
	return state;
};

