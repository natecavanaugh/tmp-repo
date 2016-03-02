import React from 'react';
import shell from 'shell';

export default class ExternalLink extends React.Component {
	handleOnClick(event) {
		event.preventDefault();

		shell.openExternal(event.currentTarget.getAttribute('href'));
	}

	render() {
		var props = this.props;

		var title = props.children || props.title;

		return <a {...props} onClick={this.handleOnClick}>{title}</a>;
	}
}