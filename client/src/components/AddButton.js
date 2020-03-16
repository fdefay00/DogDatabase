import React from 'react';
import { makeStyles, Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles(theme => ({
	buttons: {
		display: 'flex',
		justifyContent: 'flex-end'
	},
	button: {
		marginTop: 20,
		marginRight: 20,
		marginLeft: theme.spacing(1)
	}
}));

export default function FloatingActionButtons() {
	const classes = useStyles();

	return (
		<div className={classes.buttons}>
			<Button
				variant="contained"
				color="primary"
				className={classes.button}
				startIcon={<AddIcon />}>
				Add
			</Button>
		</div>
	);
}
