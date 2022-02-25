// manager card
const managerCard = function (manager) {
  return `
  <div class="col-4 mt-4">
      <div class="card h-100">
          <div class="card-header">
              <h3>${manager.name}</h3>
              <h4>Manager</h4>
          </div>
          <div class="card-body">
              <p class="id">ID: ${manager.id}</p>
              <p class="email">Email: <a href="mailto:${manager.email}" target="blank">${manager.email}</a></p>
              <p class="office">Office Number: ${manager.officeNumber}</p>
          </div>
      </div>
  </div>
  `
};

// engineer card
const engineerCard = function (engineer) {
  return `
  <div class="col-4 mt-4">
      <div class="card h-100">
          <div class="card-header">
              <h3>${engineer.name}</h3>
              <h4>Engineer</h4>
          </div>
          <div class="card-body">
              <p class="id">ID: ${engineer.id}</p>
              <p class="email">Email: <a href="mailto:${engineer.email}" target="blank">${engineer.email}</a></p>
              <p class="github">Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
          </div>
      </div>
  </div>
  `
};

// intern card 
const internCard = function (intern) {
  return `
  <div class="col-4 mt-4">
      <div class="card h-100">
          <div class="card-header">
              <h3>${intern.name}</h3>
              <h4>Intern</h4>
          </div>
          <div class="card-body">
              <p class="id">ID: ${intern.id}</p>
              <p class="email">Email: <a href="mailto:${intern.email}" target="blank">${intern.email}</a></p>
              <p class="school">School: ${intern.school}</p>
          </div>
  </div>
</div>
`
};

// push array to page 
buildMarkup = (data) => { 
  pageArray = []; 

  for (let i = 0; i < data.length; i++) {
      const employee = data[i];
      const role = employee.getRole(); 
      if (role === 'Manager') {
          const manager = managerCard(employee);
          pageArray.push(manager);
      }
      if (role === 'Engineer') {
          const engineer = engineerCard(employee);
          pageArray.push(engineer);
      }
      if (role === 'Intern') {
          const intern = internCard(employee);
          pageArray.push(intern);
      }
  }

  // joining strings 
  const teamCards = pageArray.join('')

  // return to generated page
  const generateTeam = buildTeam(teamCards); 
  return generateTeam;
}

// generate html page 
const buildTeam = function (teamCards) {   
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Team Profile Builder</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
      <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css">
      <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap"rel="stylesheet"/>
      <link rel="stylesheet" href="styles.css">
  </head>
  <body>
      <header>
          <nav class="navbar" id="navbar">
              <h1 class="navbar-brand mb-0 h1 w-100 text-center" id="navbar-text">Your Team Profiles</h1>
          </nav>
      </header>
      <main>
          <div class="container">
              <div class="row justify-content-center" id="team-cards">
                  <!--Team Cards-->
                  ${teamCards}
              </div>
          </div>
      </main>
      
  </body>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"</script>
  </html>
`
};

// export to index
module.exports = buildMarkup; 