


// Posibles proyectos, marcha blanca
var projects = [
  {
    id: 1,
    title: 'Landing BIOMEC',
    description: 'Proyecto realizado para empresa amiga con la idea de generar un landing de presentacion para dicha empresa.',
    technologies: ['Para este proyecto se utilizo la plataforma WIX'],
    image: 'assets/img/Biomec.png',
    link: 'https://www.biomec.cl'  // Agrega el link del proyecto
  },
  {
    id: 2,
    title: 'Mantencion Web AJG Ingenieria',
    description: 'A cargo de la mantencion de la pagina web de esta empresa.',
    technologies: ['Bootstrap', 'jQuery', 'PHP', 'HTML', 'JS'],
    image: 'assets/img/AJG.png',
    link: 'https://www.ajgingenieria.cl'  // Agrega el link del proyecto
  },
  {
    id: 3,
    title: 'Proyecto X',
    description: 'En construccion...',
    technologies: ['Por determinar'],
    image: 'https://e0.pxfuel.com/wallpapers/219/48/desktop-wallpaper-ultra-question-mark-b9d5in.jpg',
    link: 'https://www.linkedin.com/in/cristobal-araya/'  // Agrega el link del proyecto
  },
  // Agrego mas proyectos segun lo necesite, es copy paste nomas
];

$(document).ready(function() {
  // Función para mostrar la lista de proyectos
  function showProjects() {
    var list = $('#project-list');
    list.empty();
    projects.forEach(function(project) {
      var listItem = $('<li class="list-group-item list-group-item-action"></li>');
      listItem.text(project.title);
      listItem.click(function() {
        showProjectDetails(project);
      });
      list.append(listItem);
    });
  }

  // Función para mostrar los detalles de un proyecto
  function showProjectDetails(project) {
    var details = $('#project-details #project-content');
    details.empty();
    var html = `
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <p><strong>Tecnologías utilizadas:</strong> ${project.technologies.join(', ')}</p>
      <img src="${project.image}" class="img-fluid">
      <p><a href="${project.link}" target="_blank" class="project-link">Ver Proyecto</a></p>  <!-- Agrega el link aquí -->
    `;
    details.html(html);
  }

  // Mostrar la lista de proyectos al cargar la página
  showProjects();
});


  // Función que muestra una alerta personalizada
  function showAlert() {
      // Obtiene el valor del campo de correo electrónico
      const email = document.getElementById('exampleFormControlInput1').value;
      // Obtiene el valor del campo de comentarios
      const comments = document.getElementById('exampleFormControlTextarea1').value;
      // Muestra la alerta con un mensaje personalizado
      alert(`¡Estaremos en Contacto!\nMail: ${email}\nComentarios: ${comments}`);
  }

  // Añade el evento click al botón para ejecutar la función showAlert
  document.getElementById('alertButton').addEventListener('click', showAlert);

