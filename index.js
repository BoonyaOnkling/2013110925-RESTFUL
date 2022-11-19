//const datefns = require('date-fns')
//console.log(datefns.format(new Date(),"MM/dd/yyyy"))
//console.log("Hello World");

/*let firstName = "Boonyanutch"
let age = 21

//console.log(firstName + age)

let info = `
    my name is ${firstName}
    May age is ${age}
    `
console.log(info);*/

const user ={
    name : "Boonya",
    salary : 5000000,
    address:{
        province : "Bangkok",
        postcode : 10240
    }
}
/*
console.log(user);
console.log(user.address.postcode); */

const showData = () => `${user.name}`
//console.log(showData())

const showData2 = () => {
    let info = 'My name is '
    return `${info} ${user.name}`
}
//console.log(showData2())

const sumNumber = (a,b) => a+b;
//console.log(sumNumber(9,1))

const {name, salary,address:{postcode}} = user
//console.log(name)


