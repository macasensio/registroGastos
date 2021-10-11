//que solo en MONTO se puedan ingresar números
const validarNumeros = (evento) => {
    if (!(evento.keyCode >= 48 && evento.keyCode <= 57) && !(evento.keyCode == 46)) {
        evento.preventDefault();
    }
}

//evento change para que, cuando en el monto esté el msj de error, al rellenarlo con un valor válido, quitar el msj de error; y viceversa
const validarMonto = $('#monto').change(function() {
    
    monto = parseFloat($('#monto').val());
    monto = monto.toFixed(2);
    let montoOk = monto >= 0.01;
    
    //valido los datos ingresados
    if (montoOk) {
        $('#monto').css('border', 'none');        
        $('#inputMonto p').css('visibility', 'hidden');
    } else {
        $('#inputMonto p').css('visibility', 'visible');
        $('#monto').css('border', '#c44569 1px solid');
    }
})

//resetear campos modal gasto
const resetearValoresGasto = () => {
    $('#monto').val(undefined);//para resetear el campo
    $('#notas').val(undefined);//para resetear el campo
    $('#metodoDePago').val('efectivo');//para resetear el campo
}

//cerrar modal con ESC
window.onkeydown = function (evento){
    let tecla = evento.keyCode;
    if (tecla == 27) {
        if (modal) {            
            $(modal).hide();
            resetearValoresGasto();
        }
    }
}

//abrir - cerrar buscador
const mostrarBuscador = () => {
    $('#myInput').toggle('slow');
}

//filtrar búsqueda
const filtrarBusqueda = () => {    
    $('#myInput').on('keyup', function() {
        let value = $(this).val().toLowerCase();
        $('#cajaCates div li').filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
        });
    })
} 
