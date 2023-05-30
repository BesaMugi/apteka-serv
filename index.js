const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());
app.use(require("./routes/categories.route"));
app.use(require("./routes/client.route"));
app.use(require("./routes/drug.route"));


(async () => {
    try {
        mongoose.connect("mongodb+srv://besausk:token95@cluster0.lm3pfxi.mongodb.net/besa-apteka")
        console.log('Mongo connected')
    }
    catch(error){
        console.log(error)
    }
})()

app.listen(3000, () => {
    console.log('Сервер запущен успешно')
});