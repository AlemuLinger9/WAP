function Student(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.grades=[];
}

Student.prototype.getFullName= function(){
    return this.firstName+" " +this.lastName;
}

Student.prototype.inputNewgrade=function(newGrade){
    this.grades.push(newGrade);
}

Student.prototype.computeAverage= function(){
    const sum = this.grades.reduce((acc,grade)=>acc+grade,0 );
    const avg =sum/this.grades.length ;
    return avg;
}


const john = new Student("John","Smith");
john.inputNewgrade(80);
john.inputNewgrade(80);
john.inputNewgrade(80);
john.inputNewgrade(80);
john.inputNewgrade(80);
john.inputNewgrade(80);
console.log(`Average Grade of ${john.getFullName()}: `,john.computeAverage());

const edward = new Student("Edward","Jackman");
edward.inputNewgrade(90);
edward.inputNewgrade(80);
edward.inputNewgrade(89);
edward.inputNewgrade(95);
console.log(`Average Grade of ${edward.getFullName()}: ${edward.computeAverage()}`);

const martha = new Student("Martha","Rolf"); 
martha.inputNewgrade(90);
martha.inputNewgrade(96);
martha.inputNewgrade(94);
martha.inputNewgrade(85);
console.log(`Average Grade of ${martha.getFullName()}: ${martha.computeAverage()}`);