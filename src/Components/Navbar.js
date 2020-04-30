import React from 'react';
import '../App.css';
import CloudOnePage from './CloudOnePage';
import AboutPage from './AboutPage';
import { Link } from 'react-router-dom';

function Navbar() {
	const navStyle = {
		color: 'white'
	};

	return (
		<nav>
			<ul className='nav-links'>
				<h3>LOGO</h3>
				<Link style={navStyle} to='/about'>
					<li>About</li>
				</Link>
				<Link style={navStyle} to='/cloudOne'>
					<li>CloudOne</li>
				</Link>
			</ul>
		</nav>
	);
}

export default Navbar;
