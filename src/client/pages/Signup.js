import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import logoImg from '../img/logo.jpg';
import { Card, Logo, Form, Input, Button } from '../components/AuthForm';

export default function Signup() {
	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');
	const [familyRep, setFamilyRep] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');

	function onSignUp() {
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
		// 			setIsError(true);
		// 		}
		// 	})
		// 	.catch(e => {
		// 		setIsError(true);
		// 	});
	}

	return (
		<Card>
			{/* <Logo src={logoImg} /> */}
			<Form>
				<Input
					type='email'
					value={email}
					onChange={e => {
						setEmail(e.target.value);
					}}
					placeholder='Email'
				/>
				<Input
					type='tel'
					value={phone}
					onChange={e => {
						setPhone(e.target.value);
					}}
					placeholder='Phone'
				/>
				<Input
					type='text'
					value={familyRep}
					onChange={e => {
						setFamilyRep(e.target.value);
					}}
					placeholder='Family Rep'
				/>
				<Input
					type='password'
					value={password}
					onChange={e => {
						setPassword(e.target.value);
					}}
					placeholder='Password'
				/>
				<Input
					type='password'
					value={confirmPassword}
					onChange={e => {
						setConfirmPassword(e.target.value);
					}}
					placeholder='Confirm Password'
				/>
				<Button onClick='onSignUp'>Sign up</Button>
			</Form>
			<Link to='/'>Already have an account?</Link>
		</Card>
	);
}
