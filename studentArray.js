var studentArray = ["Wayne", "Vanessa", "Camila", "Min", "Mike Cheng", "Michael N", "Emilio", "Matt L.", "Kabah", "Jen", "Valerie", "Kate", "Mike Cruz", "Matt S.", "Sam", "Ben", "Anthony", "Jim"];

var studentHobbyArray = ["Music", "Reading", "Kayaking", "Video Games", "Basketball", "Aikido", "Singing", "Guitar", "Indoor Climbing", "Baking", "Acting", "Scuba Diving", "Sports", "Hiking", "Biking", "Dancing", "Running", "Wine Tasting"];

var studentObjectifier = function(students, hobbies){
    var studentObjectArray = [];
    for(var i = 0; i < students.length; i++){
        var studentObject = {};
        studentObject.name = students[i];
        studentObject.hobby = hobbies[i];
        // console.log(studentObject);
        studentObjectArray.push(studentObject);
    }
    for(var i = 0; i < studentObjectArray.length; i++){
        console.log("My name is ", studentObjectArray[i]["name"], " and I enjoy ", studentObjectArray[i]["hobby"]);
    }
    // console.log(studentObjectArray);
};

// you can call the function like so:
studentObjectifier(studentArray, studentHobbyArray);
