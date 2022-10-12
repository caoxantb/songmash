import * as dotenv from "dotenv";
dotenv.config();

const MONGODB_URI: any = process.env.MONGODB_URI;
const PORT: any = process.env.PORT;

export { MONGODB_URI, PORT };
