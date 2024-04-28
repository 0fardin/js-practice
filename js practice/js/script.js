let dataForm = document.getElementById("data_form");
let student = document.getElementById("student");
let department = document.getElementById("department");
let studentList = document.getElementById("student_list");

dataForm.addEventListener("submit", (e) => {
  let tr = document.createElement("tr");
  let td = document.createElement("td");

  e.preventDefault();
  let studentvalue = student.value;
  td.innerHTML = studentvalue;

  tr.appendChild(td);
  studentList.appendChild(tr);
});

// let dataForm = document.getElementById("data_form");
// let student = document.getElementById("student");
// let department = document.getElementById("department");
// let studentList = document.getElementById("student_list");

// dataForm.addEventListener("submit", (e) => {
//   e.preventDefault();
//   let studentvalue = student.value;
//   let depvalue = department.value;

//   let tr = document.createElement("tr");
//   let td = document.createElement("td");
//   td.innerHTML = studentvalue;
//   tr.appendChild(td);
//   studentList.appendChild(tr);

//   let tdd = document.createElement("td");
//   tdd.innerHTML = depvalue;
//   tr.appendChild(tdd);
//   studentList.appendChild(tr);
// });
