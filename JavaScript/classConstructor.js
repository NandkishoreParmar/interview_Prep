class Student{
    constructor (name,age, roll, gender){
        this.name = name;
        this.age = age;
        this.roll = roll;
        this.gender = gender;
    }
    getStudentDetails(){
        console.log(` Name : ${this.name}, age: ${this.age}, roll :${this.roll}, gender : ${this.gender}`);
    }
}

let user1 = new Student("ram",23,1200,"male");
let user2 = new Student("Rahul",24,1122,"Female")
user2.getStudentDetails();
user1.getStudentDetails();
