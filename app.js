"use strict";

const harry = {
    firstName: "Harry",
    lastName: "Potter"
}

const hermione = {
    firstName: "Hermione",
    lastName: "Granger"
}

const ron = {
    firstName: "Ronald",
    lastName: "Weasley"
}

console.log(harry);
console.log(hermione);
console.log(ron);

console.log(hermione.lastName);
harry.firstName = "Potty"
console.log(harry);

const chosenOne = harry;
chosenOne.firstName = "(The Chosen One)";
console.log(harry);

const student = {
    firstName: "Barrack",
    lastName: "Obama"
}


function showStudent (student) {
    let fornavn = document.querySelector("#firstName").textContent = student.firstName;
    let mellemnavn = document.querySelector("#middleName").textContent =  student.middleName;
    let efternavn = document.querySelector("#lastName").textContent = student.lastName;

    console.log(fornavn, mellemnavn, efternavn);
}
showStudent(ron);
harry.middleName = "James";
ron.middleName = "Bilius";
hermione.middleName = "Jean";

function addStudent(student) {
    const myHtml = /*html*/ `
<li>${student.firstName} - ${student.middleName} - ${student.lastName}</li>`;
document.querySelector("#students").insertAdjacentHTML("beforeend", myHtml);

}

addStudent(ron);
addStudent(harry);
addStudent(hermione);

