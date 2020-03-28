import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Login from './pages/Login';
import Signup from './pages/Signup';
import HealthLog from './pages/HealthLog';
import FamilyMember from './pages/FamilyMember';
import { AuthContext } from './context/auth';

function App() {
	const existingTokens = JSON.parse(
		localStorage.getItem('tokens') !== 'undefined'
			? localStorage.getItem('tokens')
			: null
	);
	const [authTokens, setAuthTokens] = useState(existingTokens);
	const setTokens = data => {
		localStorage.setItem('tokens', JSON.stringify(data));
		setAuthTokens(data);
	};
	return (
		<AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
			<Router>
				<Switch>
					<Route exact path='/' component={Login} />
					<Route path='/signup' component={Signup} />
					<PrivateRoute path='/health-log' component={HealthLog} />
					<PrivateRoute
						path='/family-member'
						component={FamilyMember}
					/>
				</Switch>
			</Router>
		</AuthContext.Provider>
	);
}

export default App;
