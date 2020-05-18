import React from 'react';
import Grid from '@material-ui/core/Grid';
// import AppLinks from './AppLinks';
import AppLinks2 from './AppLinks2';
import AppDescription from './AppDescription';

export default function AppDashboard({ logo, description, pm, email, phone }) {
	return (
		<Grid container style={{ backgroundColor: '#81d4fa' }}>
			<AppDescription logo={logo} description={description} pm={pm} email={email} phone={phone} />
			<AppLinks2 />
		</Grid>
	);
}
