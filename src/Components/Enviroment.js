import React from 'react';

function Enviroment(title, image1, image2) {
	return (
		<div>
			<h1>{title}</h1>
			<img src={image1} alt='' />
			<img src={image2} alt='' />
		</div>
	);
}

export default Enviroment;
