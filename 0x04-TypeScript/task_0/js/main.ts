interface Student {
	firstName: string;
	lastName: string;
	age: number;
	location: string;
}

let firstStudent: Student = {
	firstName: "John",
	lastName: "Bosco",
	age: 28,
	location: "San Francisco"
};

let secondStudent: Student = {
	firstName: "Nancy",
	lastName: "Blaq",
	age: 26,
	location: "Seattle"
};

let studentsList: Array<Student> = [firstStudent, secondStudent];

const table = document.createElement('table');
const thead = document.createElement('thead');
const headerRow = document.createElement('tr');

const headerFirstName = document.createElement('th');
headerFirstName.textContent = 'First Name';

const headerLocation = document.createElement('th');
headerLocation.textContent = 'Location';

headerRow.appendChild(headerFirstName);
headerRow.appendChild(headerLocation);
thead.appendChild(headerRow);
table.appendChild(thead);

const tbody = document.createElement('tbody');

studentsList.forEach((student) => {
	const row = document.createElement('tr');
	const firstNameCell = document.createElement('td');
	const locationCell = document.createElement('td');
  
	firstNameCell.textContent = student.firstName;
	locationCell.textContent = student.location;
  
	row.appendChild(firstNameCell);
	row.appendChild(locationCell);
	tbody.appendChild(row);
  });

table.appendChild(tbody);
document.body.appendChild(table);