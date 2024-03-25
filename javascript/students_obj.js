//Challenge 1:

let students = [
    {name: 'Remy', cohort: 'Jan'},
    {name: 'Genevieve', cohort: 'March'},
    {name: 'Chuck', cohort: 'Jan'},
    {name: 'Osmund', cohort: 'June'},
    {name: 'Nikki', cohort: 'June'},
    {name: 'Boris', cohort: 'June'}
];

function printStudents(theObject) {
    for (let i = 0; i < theObject.length; i++) {
        console.log("Name: " + theObject[i]['name'] + "," + " " + "Cohort: " + theObject[i]['cohort']);
    }
}

printStudents(students);