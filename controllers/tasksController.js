const connection=require('../db/db');

function getTasks(req, res){
    connection.query('SELECT * FROM tasks', (error, results) => {
        if (error) {
            console.error('Error retrieving tasks:', error);
            res.status(500).send('Error retrieving tasks');
        } else {
            res.json(results);
        }
    });
}

function getTaskById(req,res){
    const {id}=req.params;//extrayendo el id
    connection.query('SELECT * FROM tasks WHERE id = ?', [id], (error, results) => {
        if (error) {
            console.error('Error retrieving task:', error);
            res.status(500).send('Error retrieving task');
        } else {
            res.json(results);
        }
    });
}

function createTask(req, res){
    const { user_id, description } = req.body;
    const newTask = { user_id, description };

    connection.query('INSERT INTO tasks SET ?', newTask, (error, results) => {
        if (error) {
            console.error('Error creating task:', error);
            res.status(500).send('Error creating task');
        } else {
            // Obtén el id de la tarea recién creada
            const taskId = results.insertId;
            
            // Envía la respuesta con el id y la descripción de la tarea
            res.status(201).json({
                message: 'Task created successfully',
                task: {
                    id: taskId,
                    description: description
                }
            });
        }
    });
}

function getTasksByUser(req, res) {
    const { id } = req.params;
    connection.query('SELECT * FROM tasks WHERE user_id = ?', [id], (error, results) => {
        if (error) {
            console.error('Error retrieving tasks:', error);
            res.status(500).send('Error retrieving tasks');
        } else {
            res.json(results);
        }
    });
}

function updateTask(req,res){
    const {id}=req.params;
    const {user_id,description}=req.body;
    const updatedTask={user_id,description};
    connection.query('UPDATE tasks SET ? WHERE id = ?', [updatedTask, id], (error, results) => {
        if (error) {
            console.error('Error updating task:', error);
            res.status(500).send('Error updating task');
        } else {
            res.status(200).json({ message: 'Task updated successfully' });
        }
    });
}

function deleteTask(req,res){
    const {id}=req.params;
    connection.query('DELETE FROM tasks WHERE id = ?', [id], (error, results) => {
        if (error) {
            console.error('Error deleting task:', error);
            res.status(500).send('Error deleting task');
        } else {
            res.status(200).json({ message: 'Task deleted successfully' });
        }
    });
}

module.exports={
    getTasks,
    getTaskById,
    createTask,
    getTasksByUser,
    updateTask,
    deleteTask
}