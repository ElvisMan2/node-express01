const userControllers = require('../controllers/usersController');

function userRoutes(app) {
    // Esta función agrega la ruta de los usuarios a la app
    app.post('/login', userControllers.login);
    
    // Obtiene todos los usuarios
    app.get('/users', userControllers.getUsers);

    // Obtiene un usuario por su id
    app.get('/users/:id', userControllers.getUserById);

    // Crea un nuevo usuario
    app.post('/users', userControllers.createUser);

    // Actualiza un usuario
    app.put('/users/:id', userControllers.updateUser);

    // Elimina un usuario
    app.delete('/users/:id', userControllers.deleteUser);
}

module.exports = userRoutes;
