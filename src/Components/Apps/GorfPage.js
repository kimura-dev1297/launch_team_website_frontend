import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import logo from '../../style/images/Metroid logo.png';
import AppInfo from './AppInfo';
import AppInfoLayout from '../AppInfoLayout';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		margin: '3rem 0'
	}
}));

export default function GorfPage() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<AppInfoLayout logo={logo} description={AppInfo.description.gorf} poc={AppInfo.poc.gorf} />
		</div>
	);
}
