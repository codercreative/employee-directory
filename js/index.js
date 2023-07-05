// javascript

import { employees } from "./employees.js";

const employeeContainer = document.getElementById("employee-container");
const selectMenu = document.getElementById("select-menu");
const select = document.getElementById("select");

// Render all the employees on the page
function getEmployeesHtml() {
  const employeeList = employees
    .map(function (emp) {
      return `<div class="card" >
        <img class="employee-img" src="images/photos/${emp.image}" alt="${emp.name}"/>
        <h2>${emp.name}</h2>
        <h3>${emp.title}</h3>
        <p>${emp.bio}</p>     
      </div>`;
    })
    .join("");
  employeeContainer.innerHTML = employeeList;
}
getEmployeesHtml();

// Filtering the employees by team

function filteredEmployeesByTeam() {
  const filteredTeams = employees.filter(function (item) {
    if (select.value.toLowerCase().includes(item.team)) {
      return item;
    }
  });
}

// const selectedTeam = document.querySelector("option:checked").value;
// if (selectedTeam === "everyone") {
//   getEmployeesHtml();

selectMenu.addEventListener("change", filteredEmployeesByTeam);
