interface TeacherDirectorCommons {
	workFromHome(): string;
	getCoffeeBreak(): string;
  }
  
  interface DirectorInterface extends TeacherDirectorCommons {
	workDirectorTasks(): string;
  }
  
  interface TeacherInterface extends TeacherDirectorCommons {
	workTeacherTasks(): string;
  }
  
  class Director implements DirectorInterface {
	workFromHome(): string {
	  return 'Working from home';
	}
  
	getCoffeeBreak() {
	  return 'Getting a coffee break';
	}
  
	workDirectorTasks(): string {
	  return 'Getting to director tasks';
	}
  }
  
  class Teacher implements TeacherInterface {
	workFromHome(): string {
	  return 'Cannot work from home';
	}
  
	getCoffeeBreak(): string {
	  return 'Cannot have a break';
	}
  
	workTeacherTasks(): string {
	  return 'Getting to work';
	}
  }
  
  function createEmployee(salary: number | string): Teacher | Director {
	if (typeof salary === 'number' && salary < 500) {
	  return new Teacher();
	} else {
	  return new Director();
	}
  }
  
  type Subjects = 'Math' | 'History';
  
  function teachClass(todayClass: Subjects): string {
	if (todayClass === 'Math') {
	  return 'Teaching Math';
	} else if (todayClass === 'History') {
	  return 'Teaching History';
	} else {
	  throw new Error('Invalid subject');
	}
  }
  

  function isDirector(employee: Director | Teacher): boolean {
	return employee instanceof Director;
  }
  
  function executeWork(employee: Director | Teacher): string {
	if (employee instanceof Director) {
	  return employee.workDirectorTasks();
	} else {
	  return employee.workTeacherTasks();
	}
  }
  