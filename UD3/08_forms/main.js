window.onload = function() {
    const submitButton = document.getElementById('submit');
    const opcionesSelect = document.getElementById('opciones');
    const preguntaSi = document.getElementById('pregunta_si');
    const preguntaNo = document.getElementById('pregunta_no');
    const preguntaNsnc = document.getElementById('pregunta_nsnc');
    const condicionesCheck = document.getElementById('condiciones');
    const privacidadCheck = document.getElementById('privacidad');
    const nameInput = document.getElementById('name');
    const surnameInput = document.getElementById('surname');
    const form = document.getElementById('main_form');

    // Habilita el botón Enviar sólo si ambos checkboxes están marcados
    condicionesCheck.onchange = privacidadCheck.onchange = () => {
        submitButton.disabled = !(condicionesCheck.checked && privacidadCheck.checked);
    };

    // Función para manejar el estado del combo de opciones
    function updateOpcionesSelect() {
        opcionesSelect.disabled = !preguntaSi.checked;
    }

    // Añadir el mismo manejador a los tres radio buttons
    preguntaSi.onchange = updateOpcionesSelect;
    preguntaNo.onchange = updateOpcionesSelect;
    preguntaNsnc.onchange = updateOpcionesSelect;

    // Validación de campos obligatorios al hacer submit
    form.onsubmit = function(e) {
        e.preventDefault(); // Previene el envío del formulario por defecto

        if (!nameInput.value.trim() || !surnameInput.value.trim()) {
            alert("Por favor, rellena los campos de Nombre y Apellidos.");
            return;
        }

        submitButton.disabled = true; // Desactiva el botón para evitar doble submit

        form.submit(); // Enviar el formulario una vez comprobado
    };
};
