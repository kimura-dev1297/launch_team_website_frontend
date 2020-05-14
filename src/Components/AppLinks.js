import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { Divider } from '@material-ui/core';
import Link from '@material-ui/core/Link';
import appInfo from './Apps/appInfo';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		maxWidth: 752
	},
	demo: {
		backgroundColor: theme.palette.background.paper
	},
	title: {
		margin: theme.spacing(1, 0, 1),
		color: 'white'
	},
	listStyles: {
		paddingTop: 0
		// paddingBottom: 0
	},
	listItemText: {
		lineHeight: 0
	},
	link: {
		'& > * + *': {
			marginLeft: theme.spacing(2)
		}
	}
}));

function generate(element) {
	return [ 0, 1, 2, 3 ].map((value) =>
		React.cloneElement(element, {
			key: value
		})
	);
}

export default function AppLinks() {
	const classes = useStyles();
	const [ dense, setDense ] = React.useState(false);
	const [ secondary, setSecondary ] = React.useState(false);

	const vegatables = appInfo.vegatables;

	// const preventDefault = (event) => event.preventDefault() ;

	return (
		<Grid
			container
			item
			xs={12}
			sm={6}
			direction='column'
			justify='center'
			alignItems='center'
			style={{ backgroundColor: '#D88373' }}
		>
			<div className={classes.root}>
				<Grid container item justify='center' item spacing={2}>
					<Grid item>
						<Typography variant='subtitle2' className={classes.title}>
							Artifact Repo Links
						</Typography>
					</Grid>

					<Grid item xs={12} style={{ backgroundColor: '#313715' }}>
						<div className={classes.demo}>
							<List dense={dense}>
								{generate(
									<ListItem className={classes.listStyles}>
										<Link
											href='#'
											component='a'
											variant='body2'
											onClick={(event) => {
												event.preventDefault();
												console.info("I'm a button.");
											}}
										/>
										Single Item Link
									</ListItem>
								)}
							</List>
						</div>
					</Grid>

					<Grid item xs={12} style={{ backgroundColor: '#313715', marginTop: '1rem' }}>
						<Typography variant='subtitle2' className={classes.title}>
							Scan findings
						</Typography>
						<div className={classes.demo}>
							<List dense={dense}>
								{generate(
									<ListItem className={classes.listStyles}>
										<Link
											href='#'
											component='a'
											variant='body2'
											onClick={(event) => {
												event.preventDefault();
												console.info("I'm a button.");
											}}
										>
											Single Item Link
										</Link>
									</ListItem>
								)}
							</List>
						</div>
					</Grid>
					{/* End of Container */}
				</Grid>

				{/* Bottom Section */}

				<Grid container item spacing={2} style={{ backgroundColor: '#313715' }}>
					<Grid item>
						<Typography variant='subtitle2' className={classes.title}>
							SD Elements/SSP
						</Typography>
					</Grid>
					<Grid item xs={12} style={{ paddingBottom: '0' }}>
						<div className={classes.demo}>
							<List dense={dense}>
								{generate(
									<ListItem className={classes.listStyles}>
										<Link
											href='#'
											component='a'
											variant='body2'
											onClick={(event) => {
												event.preventDefault();
												console.info("I'm a button.");
											}}
										>
											Single Item Link
										</Link>
									</ListItem>
								)}
							</List>
						</div>
					</Grid>

					<Grid item xs={12} style={{ paddingTop: '0' }}>
						<Divider />

						<div className={classes.demo}>
							<List dense={dense}>
								{generate(
									<ListItem className={classes.listStyles}>
										<Link
											href='#'
											component='a'
											variant='body2'
											onClick={(event) => {
												event.preventDefault();
												console.info("I'm a button.");
											}}
										>
											Single Item Link
										</Link>
									</ListItem>
								)}
							</List>
						</div>
					</Grid>
				</Grid>
			</div>
		</Grid>
	);
}
