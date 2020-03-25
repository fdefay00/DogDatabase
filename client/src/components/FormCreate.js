import React from 'react';
import TextField from '@material-ui/core/TextField';
import DateFnsUtils from '@date-io/date-fns';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import clsx from 'clsx';
import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';

const genders = [
	{
		value: 'Male',
		label: 'Male'
	},
	{
		value: 'Female',
		label: 'Female'
	}
];

const useStyles = makeStyles(theme => ({
	root: {
		'& .MuiTextField-root': {
			margin: theme.spacing(1),
			width: '25ch'
		}
	},
	withoutLabel: {
		marginTop: theme.spacing(3)
	},
	textField: {
		width: '25ch'
	}
}));

export default function FormPropsTextFields() {
	const classes = useStyles();

	const [gender, setGender] = React.useState();
	const [weight, setWeight] = React.useState();
	const [selectedDate, setSelectedDate] = React.useState(new Date());

	const handleWeightChange = event => {
		setWeight(event.target.value);
	};
	const handleGenderChange = event => {
		setGender(event.target.value);
	};

	const handleDateChange = date => {
		setSelectedDate(date);
	};

	return (
		<form className={classes.root} noValidate autoComplete="off">
			<div>
				<Grid container justify="space-around">
					<TextField required id="standard-required" label="Name" />
					<FormControl className={clsx(classes.margin, classes.withoutLabel, classes.textField)}>
						<Input
							label="Weight"
							id="standard-adornment-weight"
							value={weight}
							onChange={handleWeightChange}
							endAdornment={<InputAdornment position="end">Kg</InputAdornment>}
							aria-describedby="standard-weight-helper-text"
							inputProps={{
								'aria-label': 'weight'
							}}
						/>
						<FormHelperText id="standard-weight-helper-text">Weight</FormHelperText>
					</FormControl>

					<MuiPickersUtilsProvider utils={DateFnsUtils}>
						<KeyboardDatePicker
							disableToolbar
							variant="inline"
							format="MM/dd/yyyy"
							margin="normal"
							id="date-picker-inline"
							label="Date of Birth"
							value={selectedDate}
							onChange={handleDateChange}
							KeyboardButtonProps={{
								'aria-label': 'change date'
							}}
						/>
					</MuiPickersUtilsProvider>

					<TextField
						// id="standard-select"
						select
						label="Gender"
						value={gender}
						onChange={handleGenderChange}
						helperText="Select a Gender">
						{genders.map(option => (
							<MenuItem key={option.value} value={option.value}>
								{option.label}
							</MenuItem>
						))}
					</TextField>
				</Grid>
			</div>
		</form>
	);
}
