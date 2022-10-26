//adds values from the created manager object to the manager card
const generateManager = (manager) => {
    return `
    <div class="col border border-dark m-3 p-2">
        <div class="bg-dark text-white p-2">
            <h2>${manager.name}</h2>
            <h3>Team Manager</h3>
        </div>

        <div class="bg-light p-2">
            <p>ID #: ${manager.id}</p>
            <p>Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
            <p>Office #: ${manager.officeNum}</p>
        </div>
    </div>`
}

//adds values from the created engineer object to the engineer card
const generateEngineer = (engineer) => {
    return `
    <div class="col border border-danger m-3 p-2">
        <div class="bg-danger text-white p-2">
            <h2>${engineer.name}</h2>
            <h3>Engineer</h3>
        </div>

        <div class="bg-light p-2">
            <p>ID #: ${engineer.id}</p>
            <p>Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
            <p>Github: <a href="https://github.com/${engineer.github}" class="_blank">${engineer.github}</a></p>
        </div>
    </div>`
}

//adds values from the created intern object to the intern card
const generateIntern = (intern) => {
    return `
    <div class="col border border-primary m-3 p-2">
        <div class="bg-primary text-white p-2">
            <h2>${intern.name}</h2>
            <h3>Intern</h3>
        </div>

        <div class="bg-light p-2">
            <p>ID #: ${intern.id}</p>
            <p>Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
            <p>School: ${intern.school}</p>
        </div>
    </div>`
}

//loops through the array of added employees and appends them to the corresponding card and then appends them to the base HTML
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
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
    <title>Team Generator</title>
    </head>
    
    <body>

    <div class="bg-light p-3 text-center">
        <h1 class="text-secondary">My Team</h1>
    </div>
    
    <div class="container row position-absolute top-50 start-50 translate-middle">
    ${HTML}
    </div>

    </body>
</html>`
}

module.exports = generateHTML