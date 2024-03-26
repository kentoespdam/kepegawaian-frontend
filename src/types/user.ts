export type Prefs = {
	roles: string[];
};

export type User = {
	$id: string;
	$createdAt: string;
	$updatedAt: string;
	name: string;
	registration: string;
	status: boolean;
	passwordUpdate: string;
	email: string;
	phone: string;
	emailVerification: boolean;
	phoneVerification: boolean;
	prefs: Prefs;
};
