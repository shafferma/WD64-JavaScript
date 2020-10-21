const instructors = [
    { name: 'Quincy', specialty: 'Quantum Mechanics'},
    { name: 'Kenn', specialty: 'Norse Mythology'},
    { name: 'Paul', specialty: 'Tuvan throat singing'},
    { name: 'Aaron', specialty: 'Entomology'},
    { name: 'Carolyn', specialty: 'Kung Fu'},
]
let instructor_names = [];
for (let i=0; i < instructors.length; i++) {
    instructor_names.push(instructors[i].name);
}
console.log(instructor_names);

// .map can be used on an array
// .map creates a new array which is why we save to a new variable
// .map takes a function argument
// .map will run that function on each item in that array
// provides an opp to modify the array index value returned
const instructorNames = instructors.map(instructor => instructor);
// const instructorNames = instructors.map(function(instructor) {
//     return instructor.name
// });
console.log(instructorNames);

const instructorInfo = `${instructors.map(instructor => `${instructor.name}: ${instructor.specialty}`).join(", ")}`;
console.log(instructorInfo);
