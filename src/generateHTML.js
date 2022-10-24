const generateManager = () => {
    return `
    <div>
        <div>
            <h2></h2>
            <h3>Team Manager</h3>
        </div>

    <div>
        <p>ID #:</p>
        <p>Email:</p>
        <p>${manager.officeNum}:</p>
    </div>
</div>`
}

const generateEngineer = () => {
    return `
    <div>
        <div>
            <h2></h2>
            <h3>Engineer</h3>
        </div>

    <div>
        <p>ID #:</p>
        <p>Email:</p>
        <p>${engineer.github}:</p>
    </div>
</div>`
}

const generateIntern = () => {
    return `
    <div>
        <div>
            <h2></h2>
            <h3>Intern</h3>
        </div>

    <div>
        <p>ID #:</p>
        <p>Email:</p>
        <p>${intern.school}:</p>
    </div>
</div>`
}

const generateHTML = () => {
    return `
    <!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Generator</title>
    </head>
    <body>
       
    </body>
</html>`
}