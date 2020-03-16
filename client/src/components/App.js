import React from 'react';
import Header from './Header';
import Footer from './Footer';
import AddButton from './AddButton';
// import Featured from './Featured';
// import Drawer from './Drawer';

// const FilterArea = () => <h2>FilterArea aka sideBar</h2>;

class App extends React.Component {
	render() {
		return (
			<div className="App">
				<Header />
				{/* <Drawer /> */} {/* <FilterArea /> */}
				{/* <Featured /> */}
				<AddButton />
				<Footer />
			</div>
		);
	}
}

export default App;
