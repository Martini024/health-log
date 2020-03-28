import React, { useState, useEffect } from 'react';
import { Form, Input, Button, Error } from '../components/AuthForm';
import Header from '../components/Header';

export default function HealthLog() {
	const [familyMember, setFamilyMember] = useState([]);
	// fetch family member to choose from
	useEffect(() => {
		let familyMember = [];
		setFamilyMember(familyMember);
		// code to run on component mount
	}, []);

	return (
		<div>
			<Header></Header>
			<Form>
				{/* render family member to choose from */}
				{/* describe symptom */}
				{/* describe self treatment done */}
				{/* submit request */}
				{/* <Button onClick='onSignUp'>Sign up</Button> */}
			</Form>
		</div>
	);
}
