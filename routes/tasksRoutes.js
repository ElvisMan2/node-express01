tasksController=require('../controllers/tasksController.js');

function tasksRoutes(app){
// obtiene todas las tareas
app.get('/tasks', tasksController.getTasks);

// obtiene una tarea por su id
app.get('/tasks/:id', tasksController.getTaskById);

// Crea una nueva tarea
app.post('/tasks', tasksController.createTask);

//obtener tareas por usuario
app.get('/tasks/user/:id', tasksController.getTasksByUser)

//actualiza una tarea
app.put('/tasks/:id',tasksController.updateTask);

//elimina una tarea
app.delete('/tasks/:id',tasksController.deleteTask);
}

module.exports = tasksRoutes;