const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;
const userRouter = require('./router/useRouter')
app.use(cors());
app.use('/api', userRouter)

app.get("/", (req, res) => {
    res.send("lab server is running");
  });
  app.listen(port, () => {
    console.log("Listening the port:", port);
  });