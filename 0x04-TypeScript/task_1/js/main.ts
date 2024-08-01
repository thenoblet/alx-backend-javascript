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

interface studentClassConstructor{
	firstName: string;
	lastName: string;
}

interface studentClassInterface{
	workOnHomework(): string;
	displayName(): string;
}

class studentClass implements studentClassInterface {
	firstName: string;
	lastName: string;

	constructor({ firstName, lastName }: studentClassConstructor) {
		this.firstName = firstName;
		this.lastName = lastName;
	}

	workOnHomework(): string {
		return "Currently working";
	}

	displayName(): string {
		return this.firstName;
	}
}