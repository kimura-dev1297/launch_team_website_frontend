import React from 'react';
import MainUtilities from '../style/images/PCF Control Plane.jpg';
import { Typography } from '@material-ui/core';

function Production() {
	return (
		<div>
			<Typography>Staging</Typography>
			<img src={MainUtilities} alt='' />
			{/* <img src={stagingImage} alt='' /> */}
			<Typography>Production</Typography>
			{/* <img src={productionImage} alt='' /> */}
		</div>
	);
}

// and keep the prod flow as staging>prod

export default Production;
