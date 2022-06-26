const express = require('express');
const path = require('path');
const app = express();



app.use(express.static('public'))

/*
app.get("/", (req, res) => {
    res.send("./public/index.html");
});
*/

const PORT = process.env.PORT || 5002;

app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`);
});
