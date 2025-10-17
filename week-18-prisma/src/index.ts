import { PrismaClient } from './generated/prisma/index.d';

const client = new PrismaClient();

async function createUser() {
    const user = await client.user.create({
    data: {
        username: "vivek@gmail.com",
        email: "jjjd",
        password: "12345678"
    }
})
}

async function deleteUser() {
    client.user.delete({
        where: {
            id: 1
        }
    })
}

async function updateUser() {
    const user = await client.user.update({
        where: {
            id: 1
        },
        data: {
            username: "vivek01"
        }
    })

    console.log(user.age);
}

async function getUsers () {
    const user = await client.user.findFirst({
        where: {
            id: 1
        }
    })
}