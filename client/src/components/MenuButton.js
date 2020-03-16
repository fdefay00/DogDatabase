import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1
	},
	menuButton: {
		marginRight: theme.spacing(2),
		[theme.breakpoints.up('sm')]: {
			display: 'none'
		}
	}
}));

function MenuButton(props) {
	const classes = useStyles();

	return (
		<IconButton
			edge="start"
			color="inherit"
			className={classes.menuButton}
			aria-label="open drawer"
			onClick={props.handleDrawerToggle}>
			<MenuIcon />
		</IconButton>
	);
}

export default MenuButton;
