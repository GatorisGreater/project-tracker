import React from 'react';
import {connect} from 'react-redux';

import * as actions from '../actions/actions';

class HomeButton extends React.Component {
	constructor(props) {
		super(props);
		this.returnHome = this.returnHome.bind(this);
	}

	returnHome(event) {
		event.preventDefault();
		console.log(event);
		this.props.dispatch(actions.backToLanding());
	}

	render() {

		return (
			<form>
			<button className="home-button" type="submit" onSubmit={this.returnHome}>Home
			</button>
			</form>
		)
	}
}

export default connect ()(HomeButton);