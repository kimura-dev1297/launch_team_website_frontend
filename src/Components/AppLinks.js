import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
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
		margin: theme.spacing(1, 0, 1)
	},
	listStyles: {
		paddingTop: 0,
		paddingBottom: 0
	},
	listItemText: {
		lineHeight: 0
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
		<div className={classes.root}>
			<Grid container spacing={2}>
				<Grid item xs={12}>
					<Typography variant='subtitle2' className={classes.title}>
						Artifact Repo Links
					</Typography>
					<div className={classes.demo}>
						<List dense={dense}>
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
					</div>
				</Grid>
				<Grid item xs={12} md={6}>
					<Typography variant='subtitle2' className={classes.title}>
						Scan findings
					</Typography>
					<div className={classes.demo}>
						<List dense={dense}>
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
					</div>
				</Grid>
			</Grid>
			<Grid container direction='column'>
				<Grid item xs={12}>
					<Typography variant='subtitle2' className={classes.title}>
						SD Elements/SSP
					</Typography>
					<div className={classes.demo}>
						<List dense={dense}>
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
					</div>
				</Grid>

				<Grid item xs={12}>
					{/* <Typography variant='subtitle2' className={classes.title}>
						SSP
					</Typography> */}
					<Divider />
					<div className={classes.demo}>
						<List dense={dense}>
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
					</div>
				</Grid>
			</Grid>
		</div>
	);
}
