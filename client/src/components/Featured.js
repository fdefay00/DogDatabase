import React from 'react';
import { makeStyles, ButtonBase, Typography, Container } from '@material-ui/core';

const images = [
	{
		url:
			'https://i1.wp.com/bestlifeonline.com/wp-content/uploads/2019/03/Doberman-Pinscher.jpg?w=1200&ssl=1',
		title: 'View All Doberman',
		width: '33%'
	},
	{
		url:
			'https://i1.wp.com/bestlifeonline.com/wp-content/uploads/2018/02/German-Shepherd.jpg?w=1024&ssl=1',
		title: 'View All German-Sheperd',
		width: '33%'
	},
	{
		url:
			'https://i2.wp.com/bestlifeonline.com/wp-content/uploads/2016/03/shutterstock_1063153463.jpg?w=1024&ssl=1',
		title: 'View All Rottweiler',
		width: '34%'
	}
];

const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex',
		flexWrap: 'wrap',
		minWidth: 300,
		width: '100%',
		marginTop: '20px'
	},
	image: {
		position: 'relative',
		height: 200,
		[theme.breakpoints.down('xs')]: {
			width: '100% !important', // Overrides inline-style
			height: 100
		},
		'&:hover, &$focusVisible': {
			zIndex: 1,
			'& $imageBackdrop': {
				opacity: 0.15
			},
			'& $imageMarked': {
				opacity: 0
			},
			'& $imageTitle': {
				border: '4px solid currentColor'
			}
		}
	},
	focusVisible: {},
	imageButton: {
		position: 'absolute',
		left: 0,
		right: 0,
		top: 0,
		bottom: 0,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		color: theme.palette.common.white
	},
	imageSrc: {
		position: 'absolute',
		left: 0,
		right: 0,
		top: 0,
		bottom: 0,
		backgroundSize: 'cover',
		backgroundPosition: 'center 40%'
	},
	imageBackdrop: {
		position: 'absolute',
		left: 0,
		right: 0,
		top: 0,
		bottom: 0,
		backgroundColor: theme.palette.common.black,
		opacity: 0.4,
		transition: theme.transitions.create('opacity')
	},
	imageTitle: {
		position: 'relative',
		padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`
	},
	imageMarked: {
		height: 3,
		width: 18,
		backgroundColor: theme.palette.common.white,
		position: 'absolute',
		bottom: -2,
		left: 'calc(50% - 9px)',
		transition: theme.transitions.create('opacity')
	}
}));

export default function ButtonBases() {
	const classes = useStyles();

	return (
		<Container maxWidth="md">
			<div className={classes.root}>
				{images.map(image => (
					<ButtonBase
						focusRipple
						key={image.title}
						className={classes.image}
						focusVisibleClassName={classes.focusVisible}
						style={{
							width: image.width
						}}>
						<span
							className={classes.imageSrc}
							style={{
								backgroundImage: `url(${image.url})`
							}}
						/>
						<span className={classes.imageBackdrop} />
						<span className={classes.imageButton}>
							<Typography
								component="span"
								variant="subtitle1"
								color="inherit"
								className={classes.imageTitle}>
								{image.title}
								<span className={classes.imageMarked} />
							</Typography>
						</span>
					</ButtonBase>
				))}
			</div>
		</Container>
	);
}
