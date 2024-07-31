const express=require('express');

const PORT=process.env.PORT || 3000;
const userRoutes=require('./routes/usersRoutes');//importa una función que define las rutas de la app
const taskRoutes=require('./routes/tasksRoutes');//importa una función que define las rutas de la app

const app=express();
// Middleware para analizar datos JSON
app.use(express.json());

//agregando las ruta de usuarios
userRoutes(app);
//agrega las rutas de las tareas
taskRoutes(app);


//servir el frontend
const path = require('path');
// Servir archivos estáticos desde la carpeta public
app.use(express.static(path.join(__dirname, 'public')));

// Ruta para servir la página de inicio (login y registro)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/todolist', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'todolist.html'));
});

app.listen(3000,()=>{
    console.log('Servidor corriendo en el puerto 3000');
});