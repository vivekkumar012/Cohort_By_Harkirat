function isEven (num: number) : boolean {
    if(num % 2 == 0) {
        return true
    } else {
        return false
    }
}

// console.log(isEven(5));

//One interface can take reference of other interface
interface Address {
    city: string;
    place: string;
    pincode: number;
}

interface UserType {
    firstname: String;
    age: number;
    address: Address
}

interface Office {
    address: Address
}

let user: UserType = {
    firstname: "Vivek",
    age: 22,
    address: {
        city: "Dbg",
        place: "nehra",
        pincode: 847233
    }
}

function isLegal (user: UserType): boolean {
    if(user.age >= 18) {
        return true
    } else {
        return false;
    }
}

const legal = isLegal(user);

if(legal) {
    console.log("You are legal")
} else {
    console.log("You are illegal")
}

interface People {
    name: string;
    age: number;
    isLegal(): boolean;
}

class Manager implements People {
    // name: string;
    // age: number;

    constructor(public name: string, public age: number) {
        this.name = name;
        this.age = age;
    }
    isLegal() {
        return this.age > 18
    }
}

let m = new Manager("vivek", 23);
// console.log(m.name);
// console.log(m.age);
console.log(isLegal());


//Type vs interface

interface User2 {
    name: string;
    age: number;
}

type User = {
    name: string,
    age: number
}

// Union And Intersection
type Employee = {
    name: string;
    startDate: Date;
}

type Manager2 = {
    name: string;
    department: string;
}

type TeamLead = Employee & Manager2;
