import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { Divider } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		maxWidth: 752
	},
	demo: {
		backgroundColor: theme.palette.background.paper
	},
	title: {
		margin: '5px 0 5px 0',
		color: 'white',
		padding: '0'
	},
	listStyles: {
		paddingTop: 0
	},
	listItemText: {
		lineHeight: 0
	},
	paper: {
		padding: '0',
		color: theme.palette.text.secondary
	},
	centeringContainers: {
		margin: '0 auto'
	},
	applyOverflow: {
		maxHeight: '7rem',
		overflow: 'auto'
	},
	link: {
		'& > * + *': {
			marginLeft: theme.spacing(2)
		}
	}
}));

function generate(element) {
	return [ 0, 1, 2 ].map((value) =>
		React.cloneElement(element, {
			key: value
		})
	);
}

export default function AppLinks() {
	const classes = useStyles();
	const [ dense, setDense ] = React.useState(false);
	const [ secondary, setSecondary ] = React.useState(false);

	return (
		<Grid container xs={12} sm={6} direction='column' style={{ backgroundColor: '#D88373', padding: '1rem' }}>
			<Grid container>
				<Grid container item justify='center'>
					<Typography variant='subtitle2' style={{ fontSize: '16px' }} className={classes.title}>
						Artifact Repo Links
					</Typography>
				</Grid>
				<Grid item xs={9} className={(classes.centeringContainers, classes.applyOverflow)}>
					<Paper className={classes.paper}>
						<List>
							{generate(
								<ListItem className={classes.listStyles}>
									<ListItemText
										className={classes.listItemText}
										disableGutters
										primary='Single-line item'
										secondary={secondary ? 'Secondary text' : null}
									/>
								</ListItem>
							)}
						</List>
					</Paper>
				</Grid>
			</Grid>
			<Grid container>
				<Grid container item justify='center'>
					<Typography variant='subtitle2' style={{ fontSize: '16px' }} className={classes.title}>
						API Endpoints
					</Typography>
				</Grid>
				<Grid item xs={9} className={(classes.centeringContainers, classes.applyOverflow)}>
					<Paper className={classes.paper}>
						<List>
							{generate(
								<ListItem className={classes.listStyles}>
									<ListItemText
										className={classes.listItemText}
										disableGutters
										primary='Single-line item'
										secondary={secondary ? 'Secondary text' : null}
									/>
								</ListItem>
							)}
						</List>
					</Paper>
				</Grid>
			</Grid>
			<Grid container>
				<Grid container item justify='center' alignItems='center'>
					<Typography variant='subtitle2' style={{ fontSize: '16px' }} className={classes.title}>
						Scan Findings
					</Typography>
				</Grid>
				<Grid item xs={9} className={(classes.centeringContainers, classes.applyOverflow)}>
					<Paper className={classes.paper}>
						<List>
							{generate(
								<ListItem className={classes.listStyles}>
									<ListItemText
										className={classes.listItemText}
										disableGutters
										primary='Single-line item'
										secondary={secondary ? 'Secondary text' : null}
									/>
								</ListItem>
							)}
						</List>
					</Paper>
				</Grid>
			</Grid>
			​
			<Grid container>
				<Grid container item justify='center'>
					<Typography variant='subtitle2' style={{ fontSize: '16px' }} className={classes.title}>
						SD Elements/SSP
					</Typography>
				</Grid>
				<Grid
					item
					xs={9}
					className={(classes.centeringContainers, classes.applyOverflow)}
					style={{ paddingBottom: '0' }}
				>
					<Paper className={classes.paper}>
						<List>
							{generate(
								<ListItem className={classes.listStyles}>
									<ListItemText
										className={classes.listItemText}
										disableGutters
										primary='Single-line item'
										secondary={secondary ? 'Secondary text' : null}
									/>
								</ListItem>
							)}
						</List>
					</Paper>
				</Grid>
			</Grid>
			<Grid container>
				<Grid
					item
					xs={9}
					className={(classes.centeringContainers, classes.applyOverflow)}
					style={{ paddingTop: '0' }}
				>
					<Divider />
					<Paper className={classes.paper}>
						<List>
							{generate(
								<ListItem className={classes.listStyles}>
									<ListItemText
										className={classes.listItemText}
										disableGutters
										primary='Single-line item'
										secondary={secondary ? 'Secondary text' : null}
									/>
								</ListItem>
							)}
						</List>
					</Paper>
				</Grid>
			</Grid>
		</Grid>
	);
}
