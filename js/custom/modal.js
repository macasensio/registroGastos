var divModal = $('#divGastoModal');
var modal = $('#gastoModal');

//abrir y cerrar modal
const abrirModal = (categoria, montoAcumulado) => {
    let cat = categoria;
    let catH2 = $(`#div${cat} h2`)[0].innerHTML;

    montoAcumulado = montoAcumulado;
    
    //agregar onclick al btn de guardar
    $('#btnGuardar').attr('onclick', `guardarGasto('${cat}', ${montoAcumulado})`);
    //cambiar texto del botón para que aparezca la categoría
    $('#btnGuardar').text(`Guardar gasto en ${catH2}`);

    $(divModal).show();
    $(modal).show('slow');
}

const cerrarModal = () => {          
    $(modal).hide('slow');
    resetearValoresGasto();
}

