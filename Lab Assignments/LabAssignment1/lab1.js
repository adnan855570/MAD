

function Person(name = "", age = 0, gender = "") {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
  
  
  function Employee(name = "", age = 0, gender = "", department = "", designation = "", salary = 0) {
    Person.call(this, name, age, gender);
    this.department = department;
    this.designation = designation;
    this.salary = salary;
  }
  
  
  function Student(name = "", age = 0, gender = "", studentId = "", major = "") {
    Person.call(this, name, age, gender);
    this.studentId = studentId;
    this.major = major;
  }
  
  
  function Teacher(name = "", age = 0, gender = "", department = "", designation = "", salary = 0, subject = "") {
    Employee.call(this, name, age, gender, department, designation, salary);
    this.subject = subject;
  }
  
  
  function Staff(name = "", age = 0, gender = "", department = "", designation = "", salary = 0, role = "") {
    Employee.call(this, name, age, gender, department, designation, salary);
    this.role = role;
  }
  
  
  function Courses() {
    this.students = [];
    this.teachers = [];
  
    this.addStudent = function(student) {
      this.students.push(student);
    };
  
    this.addTeacher = function(teacher) {
      this.teachers.push(teacher);
    };
  }
  
  
  const student1 = new Student("Adnan", 24, "Male", "123", "Software Enigneering");
  
  const teacher1 = new Teacher("Taimoor", 22, "Male", "Cs Department", "Professor", 60000, "Linear Algebra");
  
  const staff1 = new Staff("Faryab Khan", 25, "Male", "IT Expert", "Clerk", 35000, "Cloud Engineer");
  
  
  const courses = new Courses();
  courses.addStudent(student1);
  courses.addTeacher(teacher1);
  
  
  console.log("Student 1:", student1);
  console.log("Teacher 1:", teacher1);
  console.log("Staff 1:", staff1);
  console.log("Courses:", courses);
  


  

//   Second Task 



// function Employee(name = "", dept = "general") {
//     this.name = name;
//     this.dept = dept;
//   }
  
  
//   function Manager(name = "", dept = "general") {
//     Employee.call(this, name, dept);
//     this.reports = [];
//   }
  
  
//   function WorkerBee(name = "", dept = "general") {
//     Employee.call(this, name, dept);
//     this.projects = [];
//   }
  
  
//   function SalesPerson(name = "") {
//     WorkerBee.call(this, name, "sales");
//     this.quota = 100;
//   }
  

//   function Engineer(name = "") {
//     WorkerBee.call(this, name, "engineering");
//     this.machine = "";
//   }
  

//   const employee1 = new Employee("Faryab");
//   const manager1 = new Manager("Adnan");
//   const worker1 = new WorkerBee("Hammas");
//   const salesPerson1 = new SalesPerson("Mary");
//   const engineer1 = new Engineer("Ali");
  

//   console.log("Employee 1:", employee1);
//   console.log("Manager 1:", manager1);
//   console.log("Worker 1:", worker1);
//   console.log("SalesPerson 1:", salesPerson1);
//   console.log("Engineer 1:", engineer1);
  