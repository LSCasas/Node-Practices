// todo add "limpiar mi cuarto"
// todo done 10
// todo ls
// todo alv 

//necesitamos 
// - un archivo para guardar los todos (.json)
// - una funcin para cada comando
// - usar process.argv para leer los comando
// - usar fs para leer y escribir los archivos

const fs = require('fs');
const dbFile = 'db.json';

function init() {
    // Crear el archivo de base de datos si no existe
    if (!fs.existsSync(dbFile)) {
        fs.writeFileSync(dbFile, JSON.stringify({ todos: [] }));
    }
}

function getTodos() {
    // Leer el archivo y obtener la lista de todos
    const content = fs.readFileSync(dbFile, 'utf8');
    return JSON.parse(content).todos;
}

function updateTodos(todos) {
    // Escribir la lista de todos en el archivo
    const newTodos = { todos: todos };
    const newTodosAsString = JSON.stringify(newTodos, null, 2);
    fs.writeFileSync(dbFile, newTodosAsString);
}

function add(task) {
    // Agregar una nueva tarea a la lista de todos
    const todos = getTodos();
    todos.push(task);
    updateTodos(todos);
}

function done(taskIndex) {
    // Marcar una tarea como completada (eliminarla de la lista)
    const todos = getTodos();
    if (taskIndex < 0 || taskIndex >= todos.length) {
        console.error('Invalid task index');
        process.exit(1);
    }
    todos.splice(taskIndex, 1);
    updateTodos(todos);
}

function ls() {
    // Listar todas las tareas en la lista de todos
    const todos = getTodos();
    if (!todos.length) {
        console.log("[EMPTY]");
        return;
    }
    todos.forEach((task, idx) => {
        console.log(idx, '-', task);
    });
}

function alv() {
    // Eliminar todas las tareas (limpiar la lista de todos)
    updateTodos([]);
}

function main() {
    // Función principal para manejar los comandos
    const command = process.argv[2];
    const arg = process.argv[3];

    init();

    if (command === 'ls') {
        ls();
    } else if (command === 'add') {
        if (!arg) {
            console.error('Missing task');
            process.exit(1);
        }
        add(arg);
        ls();
        console.log('Task added');
    } else if (command === 'done') {
        if (!arg) {
            console.error('Missing task index');
            process.exit(1);
        }
        const idx = parseInt(arg);
        if (isNaN(idx)) {
            console.error('Invalid index');
            process.exit(1);
        }
        done(idx);
        ls();
        console.log('Task completed!');
    } else if (command === 'alv') {
        alv();
    } else {
        console.error('Invalid command:', command);
        process.exit(1);
    }
}

main();


/* const todos = getTodos()
todos.push('nueva tarea')
updateTodos(todos)


//borrar
updateTodos([])
*/



