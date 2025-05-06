function agregarTarea() {
    var tarea = document.getElementById("task-input").value;
    if (tarea === "") {
        alert("Por favor, ingrese una tarea.");
        return;
    }

    var lista = document.getElementById("task-list");
    var nuevaTarea = document.createElement("li");
    nuevaTarea.textContent = tarea;

    // Agregar evento para tachar la tarea
    nuevaTarea.onclick = function () {
        if (this.style.textDecoration === "line-through") {
            lista.removeChild(this);
        } else {
            this.style.textDecoration = "line-through";
        }
        actualizarContador();
    };

    lista.appendChild(nuevaTarea);
    document.getElementById("task-input").value = "";

    actualizarContador();
}

function borrarTareas() {
    document.getElementById("task-list").innerHTML = "";
    document.getElementById("taskCounter").innerHTML = "";
}

function actualizarContador() {
    var lista = document.getElementById("task-list");
    var tareasActivas = Array.from(lista.children).filter(tarea => tarea.style.textDecoration !== "line-through").length;
    document.getElementById("taskCounter").innerHTML = "Tareas activas: " + tareasActivas;
}