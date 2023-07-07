// javascript

import { employees } from "./employees.js";

const employeeContainer = document.getElementById("employee-container");
const selectMenu = document.getElementById("select-menu");
const select = document.getElementById("select");
const linkedinIcon = "./images/icons/linkedin.png";
const twitterIcon = "./images/icons/twitter.png";
const arrowIcon = document.getElementById("arrow-icon");

// Event Listener
selectMenu.addEventListener("change", filteredEmployeesByTeam);

//Function to create html
function generateEmployeeHtml(emp) {
  // create html for social icons
  let socialHtml = "";

  if (emp.social.linkedin && emp.social.twitter) {
    socialHtml = `
      <img src=${linkedinIcon} class="social-icon" alt="LinkedIn icon" >
      <img src=${twitterIcon} class="social-icon" alt="Twitter icon" >`;
  } else if (emp.social.linkedin) {
    socialHtml = `<img src=${linkedinIcon} class="social-icon" alt="LinkedIn icon" >`;
  } else {
    socialHtml = `<img src=${twitterIcon} class="social-icon" alt="Twitter icon" >`;
  }

  // create html for the card
  return `
  <div class="card" >
    <img class="employee-img" src="images/photos/${emp.image}" alt="${emp.name}"/>
    <h2>${emp.name}</h2>
    <h3>${emp.title}</h3>
    <p>${emp.bio}</p> 
    <div class="social-container">${socialHtml}</div>    
  </div>`;
}

// Render function to display all the employees
function renderEmployees() {
  const employeeList = employees.map(generateEmployeeHtml).join("");
  employeeContainer.innerHTML = employeeList;
}
renderEmployees();

//Render function to filter the employees by team
function filteredEmployeesByTeam() {
  // returns an array of employee objects that match the condition
  const filteredTeams = employees.filter(function (emp) {
    if (select.value.toLowerCase().includes(emp.team)) {
      return emp;
    }
  });

  const filteredEmployeeList = filteredTeams.map(generateEmployeeHtml).join("");

  employeeContainer.innerHTML = filteredEmployeeList;

  //Render everyone if "everyone" or "select-team" options are selected
  const checkedValue = document.querySelector("option:checked").value;

  if (checkedValue === "everyone" || checkedValue === "select-team") {
    renderEmployees();
  }
}
