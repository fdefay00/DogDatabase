import React from 'react';
import { makeStyles, Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import FormModal from './FormModal';

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
	const [openForm, setOpen] = React.useState(false);

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<div className={classes.buttons}>
			<Button
				onClick={handleOpen}
				variant="contained"
				color="primary"
				className={classes.button}
				startIcon={<AddIcon />}>
				Add
			</Button>
			<FormModal open={openForm} handleClose={handleClose} />
		</div>
	);
}
