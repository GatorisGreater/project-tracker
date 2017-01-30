import 'isomorphic-fetch';

export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const fetchSuccess = (projects) => ({
    type: FETCH_SUCCESS,
    projects
});

export const FETCH_ERROR = 'FETCH_ERROR';
export const fetchError = (projects, error) => ({
    type: FETCH_ERROR,
    projects,
    error
});

export const fetchProjects = projects => dispatch => {
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
        dispatch(fetchSuccess(data));
    })
    .catch(error =>
        dispatch(fetchError(error))
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
        	console.log(response);
      if (!response.ok){
            const error = new Error(response.statusText)
            error.response = response
            throw error;
        }   
        return response.json();    
    })
    .then(data => {
    	console.log(data);
    	// console.log(step);
     //  	data.step = step;
      	console.log(data);
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
		console.log(response);
		if (!response.ok) {
			const error = new Error(response.statusText)
			error.response = response
			throw error;
		}
		return response;
	})
	.then(response => response.json())
	.then(data =>
		dispatch(postSuccess(data))
	)
	.catch(error =>
		dispatch(postError(error))
	);
};
