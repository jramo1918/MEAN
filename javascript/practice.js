// 30 minutes max

// #1 object decalration:
let students = [
    {name: 'Remy', cohort: 'Jan'},
    {name: 'Genevieve', cohort: 'March'},
    {name: 'Chuck', cohort: 'Jan'},
    {name: 'Osmund', cohort: 'June'},
    {name: 'Nikki', cohort: 'June'},
    {name: 'Boris', cohort: 'June'}
];

for (var student in students){
    console.log(students[student])
}
console.log("------- FIRST LOOP ENDS HERE ------\n")

console.log("------- SECOND LOOP STARTS HERE --------\n")
// #2 objects declaration
let users = {
    employees: [
        {'first_name':  'Miguel', 'last_name' : 'Jones'},
        {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
        {'first_name' : 'Nora', 'last_name' : 'Lu'},
        {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
    ],
    managers: [
       {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
       {'first_name' : 'Gordon', 'last_name' : 'Poe'}
    ]
 };
// creating function
function numOfChars(dict){
    for (var user in dict){
        console.log(user + ":")
        //console.log(dict[user])
        counter = 0;
        for (var name in dict[user]){
            counter = counter + 1;
            //console.log("full_name_obj: ", dict[user][name])
            //console.log("first name: ", dict[user][name]["first_name"])
            //console.log("last name: ", dict[user][name]["last_name"])
            var first_name_str = dict[user][name]["first_name"];
            var last_name_str = dict[user][name]["last_name"];
            var full_name_str = dict[user][name]["first_name"] + dict[user][name]["last_name"];
            //console.log("first_name_str: ", first_name_str)
            //console.log("first_name_str_length", first_name_str.length)
            //console.log("last_name_str: ", last_name_str)
            //console.log("last_name_str_length: ", last_name_str.length)
            //console.log("full_name_str: ", full_name_str);
            //console.log("full_name_str: ", full_name_str.length)
            console.log(counter + "-" + first_name_str, last_name_str + "-" + full_name_str.length)

        }
        console.log()
    }
}

// calling function
numOfChars(users)


/////////////////// - Redo - Practice /////////////////
console.log("----- Practice Students Starts Here: --------");
for (student in students) {
    console.log(students[student]);
}

console.log("----- Practice Students Ends Here: --------");
console.log("\n");
console.log("----- Practice Employees Starts Here: --------");
function employeeCount(users) {
    let count = 1;
    for (user in users) {
        let userToString = String(user);
        console.log(userToString.toUpperCase() + ":");
        for (let name in users[user]) {
            let first_name = '';
            let last_name = '';
            first_name = users[user][name]['first_name'];
            last_name = users[user][name]['last_name'];
            full_name = first_name + last_name;
            full_name_length = full_name.length;
            console.log(count + " - " + last_name.toUpperCase() + ", " + first_name.toUpperCase() + ' - ' + full_name_length);
            count++;
            if (users[user][name]['first_name'] === 'Sally') {
                count = 1;
            }
        }
    }
}

employeeCount(users);
