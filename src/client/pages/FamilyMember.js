import React, { useState, useEffect } from 'react';
import { Form, Input, Button, Error } from '../components/AuthForm';
import Header from '../components/Header';

export default function FamilyMember() {
	const [familyMember, setFamilyMember] = useState([]);
	// fetch family member to choose from
	useEffect(() => {
		let familyMember = [];
		setFamilyMember(familyMember);
		// code to run on component mount
	}, []);

	// function logOut() {
	// 	setAuthTokens();
	// }

	return (
		<div>
			<Header></Header>
			<Form>
				{/* render family member to choose from */}
				{/* can add delete update */}
				<Button onClick='onSignUp'>Sign up</Button>
			</Form>
		</div>
	);
}
