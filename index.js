// import useful pakages or modules
import express from 'express';
import path from 'path';
import ejsLayouts from 'express-ejs-layouts';
import appController from './src/controller/app.controller.js';
const AppController = new appController();
import required from './middlewares/habit.required.js';

// define server
const app = express();
const filePath = path.join(path.resolve(),'src','views');

// use ejs layouts
app.set('view engine','ejs');
app.set('views',filePath);
app.use(express.urlencoded())
app.use(express.static(filePath));
app.use(ejsLayouts);

// define static paths
app.use(express.static(filePath));
app.use(express.static('./config'))

// define routs
app.get('/',AppController.start);
app.get('/app',AppController.getAll)
app.post('/add_habit',required,AppController.add);
app.get('/required',AppController.required)
app.post('/delete_habit/:id',AppController.delete)
app.post('/update_habit',AppController.update)


// listen to server
app.listen(3200,(err)=>{
    if(!err)
    {console.log('server is live on port 3200')}
})