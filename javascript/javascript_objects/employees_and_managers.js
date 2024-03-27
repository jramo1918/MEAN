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
//console.log("EMPLOYEES")

//console.log("1 - " + users['employees'][0]['last_name'].toUpperCase() + "," + " " + users['employees'][0]['first_name'].toUpperCase() + "- " + full_name_length);

function usernames_length(theObject) {
    console.log("EMPLOYEES");
    for (let i = 0; i < theObject['employees'].length; i++) {
        let last_name_length = theObject['employees'][i]['last_name'].length;
        let first_name_length = theObject['employees'][i]['first_name'].length;
        let full_name_length = last_name_length + first_name_length;
        console.log( i+1  + " - " + theObject['employees'][i]['last_name'].toUpperCase() + "," + " " + theObject['employees'][i]['first_name'].toUpperCase() + " - " + full_name_length);
    }

    console.log("MANAGERS");
    for (let i = 0; i < theObject['managers'].length; i++) {
        let last_name_length = theObject['managers'][i]['last_name'].length;
        let first_name_length = theObject['managers'][i]['first_name'].length;
        let full_name_length = last_name_length + first_name_length;
        console.log( i+1  + " - " + theObject['managers'][i]['last_name'].toUpperCase() + "," + " " + theObject['managers'][i]['first_name'].toUpperCase() + " - " + full_name_length);
    }
}

usernames_length(users);