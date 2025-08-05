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