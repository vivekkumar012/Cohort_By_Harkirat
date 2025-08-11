// interface User {
//     name: string;
//     age: number;
// }

// function sumOfAge(user1: User, user2: User) {
//     return user1.age+user2.age;
// }

// const age = sumOfAge({name: "vivek", age: 21}, {name: "Sumit", age: 21});
// console.log(age);


// Pick in TypeScript
interface User {
    id: number;
    name: string;
    age: number;
    email: string;
    password: string;
}

// interface Update {
//     name: string;
//     age: number;
//     password: string;
// }

type Update = Pick<User, 'name' | 'age' | 'password'>;

type UpdateOptional = Partial<Update>;

function updateUser(updateuser: UpdateOptional) {
    //update codes here hit the database for updates
}

interface Config {
    endPoint: string;
    apiKey: string;
}

const config: Readonly<Config> = {
    endPoint: "https://localhost:300",
    apiKey: "jjdnjjfnjj"
}

interface User {
    name: string;
    age: number;
}

// type users = {
//     [key: string] : User
// }

type users = Record<string, User>

const users: User = {
    "abcd": {name: "vivek", age: 21},
}


const UserObject = new Map<string, User>();

// UserObject.set("abcndjd", {name: "vivek", age: 21});

type EventType = "click" | "scroll" | "mousemove";
type ExcludeEvent = Exclude<EventType, "scroll">;

const handleEvent = (event: ExcludeEvent) => {
    console.log(`Handling event:${event}`)
}

handleEvent("mousemove");
handleEvent("scroll")
