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

    //boton enviar
    condicionesCheck.onchange = privacidadCheck.onchange = () => {
        submitButton.disabled = !(condicionesCheck.checked && privacidadCheck.checked);
    };

    // manejar combo opciones 
    function updateOpcionesSelect() {
        opcionesSelect.disabled = !preguntaSi.checked;
    }

    // 3 botones inicio
    preguntaSi.onchange = updateOpcionesSelect;
    preguntaNo.onchange = updateOpcionesSelect;
    preguntaNsnc.onchange = updateOpcionesSelect;

    // campos obligatorios
    form.onsubmit = function(e) {
        e.preventDefault(); 

        if (!nameInput.value.trim() || !surnameInput.value.trim()) {
            alert("Por favor, rellena los campos de Nombre y Apellidos.");
            return;
        }

        submitButton.disabled = true;

        form.submit(); 
    };
};
