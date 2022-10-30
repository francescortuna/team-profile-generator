const managerCard = (manager) => {
    return `
    <div class="card text-bg-secondary mb-3" style="max-width: 18rem;">
        <div class="card-header">Manager</div>
            <div class="card-body">
                <h5 class="card-title">${manager.name}</h5>
                <p class="card-text">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item list-group-item-secondary">ID: ${manager.id}</li>
                        <li class="list-group-item list-group-item-secondary">Email: <a href="mailto:${manager.email}">${manager.email}</a></li>
                        <li class="list-group-item list-group-item-secondary">Office number: ${manager.officeNum}</li>
                    </ul>
                </p>
            </div>
    </div>
    `
}

const engineerCard = (engineer) => {
    return `
    <div class="card text-bg-secondary mb-3" style="max-width: 18rem;">
        <div class="card-header">Engineer</div>
            <div class="card-body">
                <h5 class="card-title">${engineer.name}</h5>
                <p class="card-text">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item list-group-item-secondary">ID: ${engineer.id}</li>
                        <li class="list-group-item list-group-item-secondary">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></li>
                        <li class="list-group-item list-group-item-secondary">GitHub Profile: <a href="https://github.com/${engineer.github}">${engineer.github}</a></li>
                    </ul>
                </p>
            </div>
    </div>
    `
}

const internCard = (intern) => {
    return `
    <div class="card text-bg-secondary mb-3" style="max-width: 18rem;">
        <div class="card-header">Intern</div>
            <div class="card-body">
                <h5 class="card-title">${intern.name}</h5>
                <p class="card-text">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item list-group-item-secondary">ID: ${intern.id}</li>
                        <li class="list-group-item list-group-item-secondary">Email: <a href="mailto:${intern.email}">${intern.email}</a></li>
                        <li class="list-group-item list-group-item-secondary">School: ${intern.school}</li>
                    </ul>
                </p>
            </div>
    </div>
    `
}

const renderCards = (data) => {
    cardTemplate = '';
    for(const member of data) {
        if(member.constructor.name === "Manager") {
            cardTemplate += managerCard(member);
        }
        if(member.constructor.name === "Engineer") {
            cardTemplate += engineerCard(member);
        }
        if(member.constructor.name === "Intern") {
            cardTemplate += internCard(member);
        }
    }

    return cardTemplate;
}

const htmlTemplate = (data) => {
    renderCards(data);

    return `
    <!DOCTYPE html>
<html lang="en-US">

<head>
	<title>Meet the Team!</title>
    <link rel="stylesheet" href="../src/style.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossorigin="anonymous">
</head>

<body>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <h1 class="mx-auto" style="color:white">My Team</h1>
    </nav>

    <div class = "cards">
    ${cardTemplate}
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-u1OknCvxWvY5kfmNBILK2hRnQC3Pr17a+RTT6rIHI7NnikvbZlHgTPOOmMi466C8" crossorigin="anonymous"></script>
</body>

</html>
    `
}

module.exports = htmlTemplate;