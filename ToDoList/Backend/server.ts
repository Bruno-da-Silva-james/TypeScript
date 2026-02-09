const express = require("express");
const cors = require("cors");
import { getTask } from "./postGreesDB";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", async (req: any, res: any) => {
    console.log("test");
    res.send("Hello World!");
});

const port = process.env.PORT || 5173;
app.listen(port);
