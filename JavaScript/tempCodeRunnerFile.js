class Student{
  constructor(name,roll,age){
    this.name = name;
    this.roll= roll;
    this.age= age;
  }
  getStudentDetail(){
    console.log(`Name : ${this.name}, Roll : ${this.roll}, Age : ${this.age}`)
  }
}

const user1 = new Student("Rahul",3400,34)
user1.getStudentDetail()
const user2 = new Student("Ram",5200,25)
user2.getStudentDetail()