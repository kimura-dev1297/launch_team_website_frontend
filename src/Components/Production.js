import React from 'react';
import MainUtilities from '../images/S31 Services - PCF Control Plane.jpg';
// import productionImage from '../images/';
// import stagingImage from '../images/';

function Production() {
	return (
		<div>
			<h1>Staging</h1>
			<img src={MainUtilities} alt='' />
			{/* <img src={stagingImage} alt='' /> */}
			<h1>Production</h1>
			{/* <img src={productionImage} alt='' /> */}
		</div>
	);
}

// and keep the prod flow as staging>prod

export default Production;
