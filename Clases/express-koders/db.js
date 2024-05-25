const fs = require('fs');
const fileName = 'db.json';
const defaultData = {
    koders: [],
}


function init () {
    if (!fs.existsSync(fileName)) {
        fs.writeFileSync(fileName, JSON.stringify(defaultData))
    }
}

function read(){
    const dbAssString = fs.readFileSync(fileName, "utf8")
return JSON.parse(dbAssString)
}

function write(dataToWrite){
    fs.writeFileSync(fileName, JSON.stringify(dataToWrite))
}


module.exports = {
    init,
    read,
    write
}