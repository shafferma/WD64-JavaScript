const instructors = [
    { name: 'Aaron', specialty: 'Entomology', meals: '7'},
    { name: 'Carolyn', specialty: 'Fencing', meals: '5'},
    { name: 'Kenn', specialty: 'Norse Mythology', meals: '8'},
    { name: 'Paul', specialty: 'Tuvan throat singing', meals: '4'},
    { name: 'Quincy', specialty: 'Quantum Mechanics', meals: '2'},
    { name: 'Tom', specialty: 'Chemistry', meals: '3'},
]
let instructor_names = [];

for(let i=0; i < instructors.length; i++) {
    if(instructors[i].meals >=5){
        instructor_names.push(instructors[i].name);
    }
}
const instructorNames = instructors.filter(instructor => instructor.meals >= 5);
console.log(instructor_names);

//if done correctly, in your terminal you should see after consol loggin
// instructorInfo -> { name: 'Aaron', specialty: 'Entomology', meals: 7}

const instructorInfo = instructors.filter(instructors => instructors.name='Aaron');
console.log()