import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

function Content() {
	const [dogs, setDogs] = useState([]);

	useEffect(() => {
		fetch('/api/dogs')
			.then(res => res.json())
			.then(dogs => setDogs(dogs));
	});

	const useStyles = makeStyles({
		table: {
			minWidth: 650
		}
	});
	const classes = useStyles();

	return (
		<TableContainer component={Paper}>
			<Table className={classes.table} aria-label="simple table">
				<TableHead>
					<TableRow>
						<TableCell>Name</TableCell>
						<TableCell align="center">Gender</TableCell>
						<TableCell align="center">Breed</TableCell>
						{/* <TableCell align="center">Height</TableCell> */}
						<TableCell align="right">Weight</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{dogs.map(dog => (
						<TableRow key={dog._id}>
							<TableCell component="th" scope="row">
								{dog.name}
							</TableCell>
							<TableCell align="center">{dog.gender}</TableCell>
							<TableCell align="center">{dog.breed}</TableCell>
							{/* <TableCell align="right">{dog.height}</TableCell> */}
							<TableCell align="right">{dog.weight}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
	// }
}

export default Content;
