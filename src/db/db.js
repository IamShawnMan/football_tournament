import { connect } from "mongoose";
import { config } from "../config/config.js";

export async function connectionDB() {
  try {
    await connect(config.db.url);
    console.log("MongoDB connected");
  } catch (error) {
    console.log("Db connection failed");
    console.log(error);
    process.exit(1);
  }
}
