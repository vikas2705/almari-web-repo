import app from "./index.js";
import dotenv from "dotenv";
import path from "path";


dotenv.config({
  path: path.resolve("src", "config", "config.env"),
});

app.listen(process.env.PORT, () => {
  console.log(`server is listening at PORT: ${process.env.PORT}`);
});
