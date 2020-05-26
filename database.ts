import { MongoClient } from "https://deno.land/x/mongo@v0.7.0/mod.ts";
import { config } from "https://deno.land/x/dotenv/mod.ts";

const client = new MongoClient();
client.connectWithUri(`mongodb+srv://${config().DB_USERNAME}:${config().DB_PASS}@cluster0-y34ha.mongodb.net/test?retryWrites=true&w=majority`);

const db = client.database(config().DB_NAME);
const doctor = db.collection("doctor");

export {db,doctor,client};