import React from 'react';
import Grid from '@material-ui/core/Grid';
import AppLinks from './AppLinks';
import AppDescription from './AppDescription';

export default function AppDashboard({ logo, description, poc }) {
	return (
		<Grid container style={{ backgroundColor: '#81d4fa' }}>
			<AppDescription logo={logo} description={description} poc={poc} />
			<Grid
				container
				item
				xs={12}
				sm={6}
				direction='column'
				justify='center'
				alignItems='center'
				style={{ backgroundColor: 'blue' }}
			>
				<AppLinks />
			</Grid>
		</Grid>
	);
}
