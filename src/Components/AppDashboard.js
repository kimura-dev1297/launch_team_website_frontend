import React from 'react';
import Grid from '@material-ui/core/Grid';
import AppLinks from './AppLinks';
import AppDescription from './AppDescription';

export default function AppDashboard({ logo, description, poc }) {
	return (
		<Grid container style={{ backgroundColor: '#81d4fa' }}>
			<AppDescription logo={logo} description={description} poc={poc} />
			<AppLinks />
		</Grid>
	);
}
