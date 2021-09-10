
function Person(name){
    this.name = name
}


Person.prototype.greet = function greet(){
    return `Hi, ${this.name}!`
}


function Student(name){
    this.__proto__.constructor(name)
}

Student.prototype.study = function study(){
    return `${this.name} is studying.`
}

Object.setPrototypeOf(Student.prototype, Person.prototype) // Student와 Person 사이 연결 

const me = new Student('MeongSeong') // 생성자 역할 
// console.log(me)
console.log(me.greet())
console.log(me.study())

console.log(me instanceof Student)
console.log(me instanceof Person)

const anotherPerson = new Person('Foo')
console.log(anotherPerson instanceof Student) // false
console.log(anotherPerson instanceof Person)