import React, { useState, useEffect } from 'react';
import controlPaneImage from '../images/S31 Services - PCF Control Plane.jpg';
import devImage from '../images/S31 Services - Dev.jpg';
import nonProdImage from '../images/S31 Services - Non-Prod.jpg';

function CloudOnePage() {
	return (
		<div>
			<h1>Cloud One</h1>
			<img src={controlPaneImage} alt='main controls' />
			<img src={devImage} alt='development environment' />
			<img src={nonProdImage} alt='Non Prod environment' />
		</div>
	);
}

export default CloudOnePage;
