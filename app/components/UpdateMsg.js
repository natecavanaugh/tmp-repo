import React, {Component} from 'react';
import _ from 'lodash';
import Icon from './Icon';
import { Alert, Button } from 'react-bootstrap';

export default class UpdateMsg extends Component {
	handleDownload = (e) => {
		this.props.downloadNewVersion();
	}

	handleDismiss = (e) => {
		this.props.remindMeLater();
	}

	render() {
		var props = this.props;

		var {currentVersion, newVersion} = props;

		currentVersion = _.trimStart(currentVersion, 'v');
		newVersion = _.trimStart(newVersion, 'v');

		return <div className="update-notification">
				<h1 className="sr-only">{'Github Pulls Update'}</h1>
				<Alert bsStyle="info" className="update-available" {...props}>
					<div className="app-column container-fluid-1280">
						<span className="download-icon">
							<Icon name={this.props.icon} />
						</span>
						<strong className="lead">{props.message}</strong>
						<div className="alert-content">
							<span className="alert-msg">{'Version '}<span className="new-version">{newVersion}</span>{' is now available. You currently have version'} <span className="current-version">{currentVersion}</span>{'.'}</span>
							<span className="btn-row">
								<Button bsSize="sm" bsStyle="success" className="download-new-version" onClick={this.handleDownload}>{'Download & Install Now'}</Button>
								<Button bsSize="sm" bsStyle="link" className="remind-me-later" onClick={this.handleDismiss}>{'Remind Me Later'}</Button>
							</span>
						</div>
					</div>
				</Alert>
			</div>;
	}
}

UpdateMsg.defaultProps = {
	icon: 'download',
	message: 'A new version of Github Pulls is available!'
};