import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import { Card, Logo, Form, Input, Button, Error } from '../components/AuthForm';
import { useAuth } from '../context/auth';

export default function Login(props) {
	const [isLoggedIn, setLoggedIn] = useState(false);
	const [isError, setIsError] = useState(false);
	const [phone, setPhone] = useState('');
	const [password, setPassword] = useState('');
	const { setAuthTokens } = useAuth();

	function onLogin() {
		// axios
		// 	.post('https://www.healthlog.com/auth/login', {
		// 		phone,
		// 		password
		// 	})
		// 	.then(result => {
		// 		if (result.status === 200) {
		// 			setAuthTokens(result.data);
		// 			setLoggedIn(true);
		// 		} else {
		// 			alert('The username or password provided were incorrect!');
		// 		}
		// 	})
		// 	.catch(e => {
		// 		alert('The username or password provided were incorrect!');
		// 	});
		setAuthTokens(123);
		setLoggedIn(true);
	}

	return !isLoggedIn ? (
		<Card>
			{/* <Logo src={logoImg} /> */}
			<Form>
				<Input
					type='tel'
					value={phone}
					onChange={e => {
						setPhone(e.target.value);
					}}
					placeholder='Phone'
				/>
				<Input
					type='password'
					value={password}
					onChange={e => {
						setPassword(e.target.value);
					}}
					placeholder='Password'
				/>
				<Button onClick={onLogin}>Login</Button>
			</Form>
			<Link to='/signup'>Don't have an account?</Link>
			{isError && (
				<Error>The username or password provided were incorrect!</Error>
			)}
		</Card>
	) : (
		<Redirect to='/health-log' />
	);
}
