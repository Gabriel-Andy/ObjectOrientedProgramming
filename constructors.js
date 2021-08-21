let add = function(n1,n3) {
    return n1 + n3
}

console.log(add(2,3))

let Person = function(name, age){
    this.name = name ;
    this.age = age
}

let Andy = new Person("gabriel", 30)
console.log(Andy)

let Aude = new Person("aude",28)
consol.log(Aude)