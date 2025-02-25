// js/main.ts

interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
  }
  
  const student1: Student = {
    firstName: 'John',
    lastName: 'Doe',
    age: 20,
    location: 'New York',
  };
  
  const student2: Student = {
    firstName: 'Jane',
    lastName: 'Smith',
    age: 25,
    location: 'San Francisco',
  };
  
  const studentsList: Student[] = [student1, student2];
  
  const table: HTMLTableElement = document.createElement('table');
  
  studentsList.forEach((student: Student) => {
    const row: HTMLTableRowElement = document.createElement('tr');
    const firstNameCell: HTMLTableCellElement = document.createElement('td');
    const locationCell: HTMLTableCellElement = document.createElement('td');
  
    firstNameCell.textContent = student.firstName;
    locationCell.textContent = student.location;
  
    row.appendChild(firstNameCell);
    row.appendChild(locationCell);
    table.appendChild(row);
  });
  
  document.body.appendChild(table);
