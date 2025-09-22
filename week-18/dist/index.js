"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
// const pgClient = new Client("postgresql://neondb_owner:npg_1FvlXct7niSV@ep-steep-boat-ad3clyih-pooler.c-2.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require")
const pgClient = new pg_1.Client({
    user: "neondb_owner",
    password: "npg_1FvlXct7niSV",
    port: 5432,
    host: "ep-lucky-show-a50i"
});
async function main() {
    await pgClient.connect();
    const response = await pgClient.query("SELECT * FROM users;");
    console.log(response);
}
main();
//# sourceMappingURL=index.js.map