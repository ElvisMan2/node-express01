const express=require('express');



const PORT=process.env.PORT || 3000;
const userRoutes=require('./routes/usersRoutes');//importa una función que define las rutas de la app
const taskRoutes=require('./routes/tasksRoutes');//importa una función que define las rutas de la app

const app=express();
// Middleware para analizar datos JSON
app.use(express.json());

app.get('/',(req,res)=>{
    res.send('Servidor corriendo en el puerto 3000');
});

//agregando las ruta de usuarios
userRoutes(app);
//agrega las rutas de las tareas
taskRoutes(app);

app.listen(3000,()=>{
    console.log('Servidor corriendo en el puerto 3000');
});