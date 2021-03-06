import express from "express";
import cors from "cors";
import { ParkRoute, ParkItemRoute } from "./routes";


const PORT = 3000;
const server = express();

server.use("*", cors({
    origin: `*`
}));

server.use("/parks", ParkRoute);
server.use("/parkItems", ParkItemRoute);

server.get("/", (req, res) => {
    res.send("Greensland");
});

server.listen(PORT, () => console.log(
    `server is now running on http://localhost:${PORT}`
));
