import express from "express";
import { engine } from 'express-handlebars';
import  {info} from "./database/info.js";
const app = express();

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');

app.set('views', './views');
app.get('/students', (req, res) => {
    res.render('students', {layout: false,info});
});
app.listen(3000);