const connection = require('../db/db.js');

function login(req,res){
    const {email,password}=req.body;
    connection.query('SELECT * FROM users WHERE email = ? AND password = ?', [email,password], (error, results) => {
        if (error) {
            console.error('Error retrieving user:', error);
            res.status(500).send('Error retrieving user');
        } else {
            if(results.length>0){
                res.json(results[0]);
            }else{
                res.status(404).send('User not found');
            }
        }
    });
}


function getUsers(req, res){
    connection.query('SELECT * FROM users', (error, results) => {
        if (error) {
            console.error('Error retrieving users:', error);
            res.status(500).send('Error retrieving users');
        } else {
            res.json(results);
        }
    });
}

function getUserById(req,res){
    const {id}=req.params;//extrayendo el id
    connection.query('SELECT * FROM users WHERE id = ?', [id], (error, results) => {
        if (error) {
            console.error('Error retrieving user:', error);
            res.status(500).send('Error retrieving user');
        } else {
            res.json(results);
        }
    });
}

function createUser(req, res){
    const { username, email, password } = req.body;
    const newUser = { username, email, password };

    connection.query('INSERT INTO users SET ?', newUser, (error, results) => {
        if (error) {
            console.error('Error creating user:', error);
            res.status(500).send('Error creating user');
        } else {
            res.status(201).json({ message: 'User created successfully' });
        }
    });
}

function updateUser(req,res){
    const {id}=req.params;
    const {username,email,password}=req.body;
    const updatedUser={username,email,password};
    connection.query('UPDATE users SET ? WHERE id = ?', [updatedUser, id], (error, results) => {
        if (error) {
            console.error('Error updating user:', error);
            res.status(500).send('Error updating user');
        } else {
            res.status(200).json({ message: 'User updated successfully' });
        }
    });
}

function deleteUser(req,res){
    const {id}=req.params;
    connection.query('DELETE FROM users WHERE id = ?', [id], (error, results) => {
        if (error) {
            console.error('Error deleting user:', error);
            res.status(500).send('Error deleting user');
        } else {
            res.status(200).json({ message: 'User deleted successfully' });
        }
    });
}

module.exports = {
    login,
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
};