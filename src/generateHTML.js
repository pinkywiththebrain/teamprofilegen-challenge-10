const generateManager = (manager) => {
    return `
    <div>
        <div>
            <h2>${manager.name}</h2>
            <h3>Team Manager</h3>
        </div>

    <div>
        <p>ID #: ${manager.id}</p>
        <p>Email: <a href="">${manager.email}</a></p>
        <p>Office #: ${manager.officeNum}</p>
    </div>
</div>`
}

const generateEngineer = (engineer) => {
    return `
    <div>
        <div>
            <h2>${engineer.name}</h2>
            <h3>Engineer</h3>
        </div>

    <div>
        <p>ID #: ${engineer.id}</p>
        <p>Email: <a href="">${engineer.email}</a></p>
        <p>Github: <a href=github.com/${engineer.github}>${engineer.github}</a></p>
    </div>
</div>`
}

const generateIntern = (intern) => {
    return `
    <div>
        <div>
            <h2>${intern.name}</h2>
            <h3>Intern</h3>
        </div>

    <div>
        <p>ID #: ${intern.id}</p>
        <p>Email: <a href="">${intern.email}</a></p>
        <p>School: ${intern.school}</p>
    </div>
</div>`
}

const generateHTML = (employees) => {
    
    let HTML = ""
    for (i = 0; i < employees.length; i++){
        if (employees[i].getRole() === "Manager"){
            HTML += generateManager(employees[i])
        }
        if (employees[i].getRole() === "Engineer"){
            HTML += generateEngineer(employees[i])
        }
        if (employees[i].getRole() === "Intern"){
            HTML += generateIntern(employees[i])
        }
    }
    console.log(HTML);
    return `<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Generator</title>
    </head>
    <body>
    ${HTML}
    </body>
</html>`
}

module.exports = generateHTML