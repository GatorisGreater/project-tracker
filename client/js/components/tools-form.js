import React from 'react';
import {connect} from 'react-redux';

import * as actions from '../actions/actions';

class ToolsForm extends React.Component {
	constructor(props) {
		super(props);
		this.submitTool = this.submitTool.bind(this);
	}

	submitTool(event) {
		event.preventDefault();
		this.props.dispatch(actions.putTool(this.refs.input.value));
		document.getElementById('tool-text').value='';
	}


	render() {

		const toolArray = this.props.currentProjectTools.map((tool, index) => {
			return <li key={index}>{tool}</li>
		});

		return (
			<form className="tool-form" onSubmit={this.submitTool}>
				<label htmlFor="tool-text">Tools Implemented: </label>
				<input type="text" id="tool-text" placeholder="Languages/Tools Used" ref="input" />
				<input type="submit" name="submit tool details" value="Add Tool"/>
				<p>{toolArray}</p>
			</form>
		)
	}
}

const mapStateToProps = (state, props) => {
	return {
		currentProjectTools: state.currentProjectTools
	}
}

export default connect (mapStateToProps)(ToolsForm);
