import 'isomorphic-fetch';

export const PUT_STORY_SUCCESS = 'PUT_STORY_SUCCESS';
export const putStorySuccess = (story) => ({
    type: PUT_STORY_SUCCESS,
    story
});

export const PUT_STORY_ERROR = 'PUT_STORY_ERROR';
export const putStoryError = (story, error) => ({
    type: PUT_STORY_ERROR,
    story,
    error
});

export const putStory = story => (dispatch, getState) => {
    const state = getState();
    const url = `/project-tracker/${state.currentProjectId}`
    return fetch(url, {method:'PUT', body:JSON.stringify({story}), 
        headers: {'Accept': 'application/json', 'Content-Type': 'application/json' },}).then(response => {
      if (!response.ok){
            const error = new Error(response.statusText)
            error.response = response
            throw error;
        }   
        return response.json();    
    })
    .then(data => {
       dispatch(putStorySuccess(data))
     })
     .catch(error =>
      dispatch(putStoryError(error))
    );
};

export const FETCH_ALL_SUCCESS = 'FETCH_ALL_SUCCESS';
export const fetchAllSuccess = (projects) => ({
    type: FETCH_ALL_SUCCESS,
    projects
});

export const FETCH_ALL_ERROR = 'FETCH_ALL_ERROR';
export const fetchAllError = (projects, error) => ({
    type: FETCH_ALL_ERROR,
    projects,
    error
});

export const fetchAllProjects = projects => dispatch => {
    const url = `/project-tracker`;
    return fetch(url).then(response => {
        if (!response.ok) {
            const error = new Error(response.statusText)
            error.response = response
            throw error;
        }
        return response.json();
    })
    .then(data => {
        dispatch(fetchAllSuccess(data));
    })
    .catch(error =>
        dispatch(fetchAllError(error))
    );
};


export const PUT_TOOL_SUCCESS = 'PUT_TOOL_SUCCESS';
export const putToolSuccess = (tool) => ({
	type: PUT_TOOL_SUCCESS,
	tool
});

export const PUT_TOOL_ERROR = 'PUT_TOOL_ERROR';
export const putToolError = (tool, error) => ({
	type: PUT_TOOL_ERROR,
	tool,
	error
});

export const putTool = tool => (dispatch, getState) => {
	const state = getState();
	const tools = state.currentProjectTools.concat(tool);
	console.log(tools);
    const url = `/project-tracker/${state.currentProjectId}`
    return fetch(url, {method:'PUT', body:JSON.stringify({tools}), 
        headers: {'Accept': 'application/json', 'Content-Type': 'application/json' },}).then(response => {
      if (!response.ok){
            const error = new Error(response.statusText)
            error.response = response
            throw error;
        }   
        return response.json();    
    })
    .then(data => {
       dispatch(putToolSuccess(data))
     })
     .catch(error =>
      dispatch(putToolError(error))
    );
};

export const POST_SUCCESS = 'POST_SUCCESS';
export const postSuccess = (project) => ({
	type: POST_SUCCESS,
	project
});

export const POST_ERROR = 'POST_ERROR';
export const postError = (project, error) => ({
	type: POST_ERROR,
	project,
	error
});

export const trackProject = project => dispatch => {
	return fetch('/project-tracker', {method: 'POST', body:JSON.stringify({project}),
			headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },}).then(response => {
		if (!response.ok) {
			const error = new Error(response.statusText)
			error.response = response
			throw error;
		}
		return response.json();
	})
	.then(data =>
		dispatch(postSuccess(data))
	)
	.catch(error =>
		dispatch(postError(error))
	);
};
