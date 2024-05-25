const db = require("./db")

function add(newKoder) {

    //validaciones del koder, con esto no se va a crear un koder
    //solo se va a van a validar los elementos que tienen que ir
    // a la hora de escribir un koder
if(!newKoder.name) throw new Error("Name is required")

if(!newKoder.generation) throw new Error("generation is required")

    newKoder.generation - parseInt(newKoder.generation)
if (isNaN(newKoder.generation)) throw new Error("generetaion must be a number")

    if (newKoder.generation <= 0) throw new Error("generation must be greater than 0")

if(!newKoder.gender)  throw new Error("gender is required")

if (!['f', 'm', 'nb'].includes(newKoder.gender.toLowerCase())) {
    throw new Error("only m, f and nd values are allowed")
  }

  if(!newKoder.age)  throw new Error("age is required")
newKoder.age = parseInt(newKoder.age)
  if (isNaN(newKoder.age)) throw new Error("age must be a numbebr")
    if (newKoder.age < 0) throw new Error("age must be greater than 0")

if(typeof newKoder.isActive != "boolean") {
    throw new Error("IsActive must be a boolean")
}

//logica para que pueda agregar un koder
const dbData= db.read()
dbData.koders.push(newKoder)
db.write(dbData)

return dbData.koders
    }

function deleteAll() {
    const dbData = db.read()
    dbData.koders = []

    db.write(dbData)
    return dbData.koders
}


function deleteByName(name) {
    if (!name) throw new Error("name is required");

    const dbData = db.read();

    // Actualizamos dbData.koders con los koders que no tienen el nombre dado
    dbData.koders = dbData.koders.filter((koder) => koder.name !== name);

    // Escribimos los datos actualizados en la base de datos
    db.write(dbData);

    return dbData.koders;
}





function getAll (){

    return db.read().koders
}



module.exports = {
    add,
    deleteAll,
    deleteByName,
    getAll
}