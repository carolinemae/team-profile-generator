const fs = require('fs');

const generateHTML = (employeeCards) =>
`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
      integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
      crossorigin="anonymous"
    />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Raleway&display=swap">
    <link rel="stylesheet" href="./assets/style.css" />
    <title>Team Profile Generator</title>
</head>
<body>
    <header>
        <h1>My Team</h1>
    </header>
    <div class="main">
        ${employeeCards}
    </div>
</body>`;

module.exports = function renderHTML(employeeCards) {
    const HTMLcontent = generateHTML(employeeCards);

    fs.writeFile('./public/index.html', HTMLcontent, (err) =>
    err ? console.log(err) : console.log('Successfully generated team profile')
    );
}