interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "Jeremy",
  lastName: "Smith",
  age: 19,
  location: "Marakesh",
};

const student2: Student = {
  firstName: "Allison",
  lastName: "Brown",
  age: 22,
  location: "Paris",
};

const studentsList: Array<Student> = [student1, student2];

const table = document.createElement("table");
for (let count = 0; count < studentsList.length; count++) {
  if (count === 0) {
    const head = document.createElement("thead");
    const row = document.createElement("tr");
    const headers = ["First Name", "Location"];
    headers.forEach((header) => {
      const th = document.createElement("th");
      th.textContent = header;
      row.appendChild(th);
    });
    head.appendChild(row);
    table.appendChild(head);
  }
}

const tbody = document.createElement("tbody");
for (let count = 0; count < studentsList.length; count++) {
  const row = document.createElement("tr");

  const firstNameCell = document.createElement("td");
  firstNameCell.textContent = studentsList[count].firstName;
  row.appendChild(firstNameCell);

  const locationCell = document.createElement("td");
  locationCell.textContent = studentsList[count].location;
  row.appendChild(locationCell);

  tbody.appendChild(row);
}
table.appendChild(tbody);

document.body.appendChild(table);
