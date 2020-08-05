import app from "./app";
import http from "http";
import { port } from "./config";

http.createServer(app);

app.listen(port, () => console.log("Example app listening on port 3000!"));
