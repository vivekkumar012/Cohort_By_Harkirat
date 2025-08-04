// let x: number | string = 1;

// x="vivekksksn"

// console.log(x);

// function greet(firstName: String) {
//     console.log("Hello" + firstName);
// }

// greet("vivek");

// function sum(a: number, b: number): number {
//     return a+b;
// }

// let ans = sum(2, 3);

// console.log(ans);

//  A function return another function in typeScript
// function delayedCall(fn: () => void) {
//     setTimeout(fn, 1000);
// }

// delayedCall(function() {
//     console.log("Hello")
// })

// let greet = () => {
//     console.log("Hi there")
// }


// function greet(user: {
//     name: string,
//     age: number
// }) {
//     console.log("hello" + user.name);
// }

// greet({
//     name: "Vivek",
//     age: 21
// })

// let user  = {
//     name: "vivek",
//     age: 21
// };

// greet(user);

interface UserType {
    firstname: string,
    lastname: string,
    age: number
}

type UserType2 =  {
    firstname: string,
    lastname: string
}

function greet(user: UserType) {

}

interface Manager {
    name: string,
    age: number
}

interface Employee {
    name: string,
    department: string
}

type TeamLead = Manager & Employee