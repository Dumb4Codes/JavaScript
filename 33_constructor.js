class Student{
    constructor(name, age, gpa){
        this.name = name;
        this.age = age;
        this.gpa = gpa;
    }
    study(){
        console.log(`${this.name} is studying`);
    }
    tired(){
        console.log(`${this.name} has been studying late till midnight and fall asleep`)
    }
}

const student1 = new Student("Spongebob", 17, 8.9);
const student2 = new Student("Squidward", 18, 9.6);
const student3 = new Student("Patrick", 19, 10);

console.log(student1.name);
console.log(student1.age);
console.log(student1.gpa);

student1.study();
student2.tired();