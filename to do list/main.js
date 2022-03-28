document.getElementById("formTask").addEventListener("submit", savetask);

function savetask(e) {
  let title = document.getElementById("title").value;
  let description = document.getElementById("description").value;
  const task = {
    title, // = a title: title
    description,
  };
  if (localStorage.getItem("tasks") === null) {
    let tasks = [];
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
  } else {
    let tasks = JSON.parse(localStorage.getItem("tasks"));
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
  getTasks();
  document.getElementById("formtask").reset()
  e.preventDefault();
}

function getTasks() {
  let tasks = JSON.parse(localStorage.getItem("tasks"));
  let tasksView = document.getElementById("tasks");
  tasksView.innerHTML = "";
  for (let i = 0; i < tasks.length; i++) {
    let title = tasks[i].title;
    let description = tasks[i].description;

    tasksView.innerHTML += `<div class="card mb-3">
          <div class="card-body">
            <p>${title} - ${description}
            <a href="#" onclick="deleteTask('${title}')" class="btn btn-danger ml-5">Delete</a>
            </p>
          </div>
        </div>`;
  }
}

function deleteTask(title) {
  //console.log(title)
  let tasks = JSON.parse(localStorage.getItem("tasks"));
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].title == title) {
      tasks.splice(i, 1);
    }
  }
  localStorage.setItem("tasks", JSON.stringify(tasks));
  getTasks();
}
getTasks();
//https://r69.cooltext.com/rendered/cooltext407551317097173.png
//https://r67.cooltext.com/rendered/cooltext407542568838130.png

$(document).ready(function(){
  // Define un método que pueda activar todas las funciones después de cargar la página
    setInterval(function(){
    // Define el método del ciclo en milisegundos
      var versions = $('.textVersion:visible');
      // define el parámetro para cada elemento visible en la selección textVersion
      if(versions.length<2){
      // Determinar que la longitud de las versiones es mayor que 2
        $('.textVersion').fadeIn(800);
        // El efecto de transición gradual de textVersion es 800
      }
      else{
      // De lo contrario
        versions.eq(0).fadeOut(800);
        // Llama al recorrido y establece el efecto de desvanecimiento en 800
      }
    },1000);
    // El tiempo de cambio del efecto general para una ronda de 1000 milisegundos es 1 segundo
  });