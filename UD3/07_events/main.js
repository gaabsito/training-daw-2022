let contador = 1;  // Variable que llevará el autoincremento del ID

window.onload = function() {
    console.log('documento cargado');
}

// Función para agregar un nuevo contenido
function agregarContenido() {
    // Obtener la tabla donde se agregarán los contenidos
    const tablaCuerpo = document.getElementById("tabla-contenidos").getElementsByTagName("tbody")[0];

    // Crear un nuevo ID autoincremental
    const nuevoId = contador++;

    // Crear una nueva fila de tabla
    const nuevaFila = document.createElement("tr");

    // Crear una celda para el ID
    const celdaId = document.createElement("td");
    celdaId.textContent = nuevoId;
    nuevaFila.appendChild(celdaId);

    // Crear una celda para el contenido (por ejemplo, contenido simple o generado dinámicamente)
    const celdaContenido = document.createElement("td");
    celdaContenido.textContent = `Contenido del ID ${nuevoId}`;  // Contenido ejemplo
    nuevaFila.appendChild(celdaContenido);

    // Crear una celda para las acciones
    const celdaAcciones = document.createElement("td");

    // Crear el enlace de edición
    const enlaceEditar = document.createElement("a");
    enlaceEditar.href = `http://localhost/edit/${nuevoId}`;  // URL con el ID
    enlaceEditar.textContent = "Editar";
    celdaAcciones.appendChild(enlaceEditar);

    // Añadir la celda de acciones a la fila
    nuevaFila.appendChild(celdaAcciones);

    // Añadir la fila al cuerpo de la tabla
    tablaCuerpo.appendChild(nuevaFila);
}
