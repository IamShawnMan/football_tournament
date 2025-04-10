import app from "./app.js";
import { config } from "./config/config.js";
import { connectionDB } from "./db/db.js";

const PORT = config.api.port || 4000;

const start = () => {
  try {
    connectionDB();
    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
