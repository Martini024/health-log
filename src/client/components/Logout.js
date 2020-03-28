import React from 'react';
import { Button } from './AuthForm';
import { useAuth } from '../context/auth';

export default function Logout() {
	const { setAuthTokens } = useAuth();
	function logOut() {
		setAuthTokens();
	}
	return <Button onClick={logOut}>Log out</Button>;
}
