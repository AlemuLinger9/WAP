
// let group = {

//     title: "Our Group",

//     students: ["John", "Pete", "Alice"],

//     showList: function () {

//         this.students.forEach(function (student) {
//             //console.log(this);

//             console.log(this.title + ": " + student);

//         });

//     }

// };

// group.showList();






// 1: my first way:
// let group = {

//     title: "Our Group",

//     students: ["John", "Pete", "Alice"],

//     showList: function () {
//         this.students.forEach((student) => console.log(this.title + ": " + student));
//     }

// };

// group.showList();


let group = {

    title: "Our Group",

    students: ["John", "Pete", "Alice"],

    showList: function () {

        this.students.forEach(function (student) {
            //console.log(this);

            console.log(this.title + ": " + student);

        });

    }

};

group.showList();