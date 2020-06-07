const http = require("http");
const app = require("./app");

http.createServer(app);

app.listen(process.env.PORT, () =>
  console.log("Example app listening on port 3000!")
);
