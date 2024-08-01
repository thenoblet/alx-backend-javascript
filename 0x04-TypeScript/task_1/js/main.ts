interface Teacher {
	readonly firstName: string;
	readonly lastName: string;
	fullTimeEmployee: boolean;
	yearsOfExperience?: number;
	location: string;
	[key: string]: any;
}

interface Director extends Teacher {
	numberOfReports: number;
}

interface printTeacherFunction{
	(firstName: string, lastName: string): string;
}

let printTeacher: printTeacherFunction = (firstName, lastName): string => {
	return `${firstName.charAt(0)}. ${lastName}`;
}