import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import FormCreate from './FormCreate';

function getModalStyle() {
	const top = 50;
	const left = 50;

	return {
		top: `${top}%`,
		left: `${left}%`,
		transform: `translate(-${top}%, -${left}%)`
	};
}

const useStyles = makeStyles(theme => ({
	paper: {
		position: 'absolute',
		display: 'flex',
		marginLeft: 'auto',
		backgroundColor: theme.palette.background.paper,
		border: '1px solid #fff',
		boxShadow: theme.shadows[5],
		padding: theme.spacing(2, 4, 3)
	}
}));

export default function FormModal(props) {
	const classes = useStyles();
	// getModalStyle is not a pure function, we roll the style only on the first render
	const [modalStyle] = React.useState(getModalStyle);

	return (
		<div>
			<Modal
				aria-labelledby="simple-modal-title"
				aria-describedby="simple-modal-description"
				open={props.open}
				onClose={props.handleClose}>
				<div style={modalStyle} className={classes.paper}>
					<FormCreate />
					{/* <FormModal /> */}
				</div>
			</Modal>
		</div>
	);
}
