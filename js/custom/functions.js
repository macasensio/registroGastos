var categoria;
var monto;
var metodoDePago;
var notas;

//crear nuevo gasto
var nuevoGasto;
const guardarGasto = (cat, montoAcumulado) => {                
        categoria = cat;
        console.log('categoria recibida: ',categoria);
        montoAcumulado = parseFloat(montoAcumulado);
        console.log('montoAcumulado: ',montoAcumulado);
        monto = parseFloat($('#monto').val());
        monto = parseFloat(monto.toFixed(2));
        metodoDePago = $('#metodoDePago option:selected').text();
        notas = $('#notas').val();
        
        let montoOk = monto >= 0.01;
        
        //valido los datos ingresados
        if (montoOk) {
        
            nuevoGasto = new Gasto (categoria, monto, metodoDePago, notas);            
            nuevoGasto.guardarGasto(categoria);
            nuevoGasto.imprimirGasto();

            //guardo mi usuario
            guardarGastoRegistrado(nuevoGasto);
            
            //actualizo acumuladores
            let montoFinalCat = montoAcumulado + monto;            
            actualizarAcumuladores(categoria, montoFinalCat, monto);
            console.log('actualizarAcumuladores: ');
            console.log('actualizarAcumuladores: categoria '+categoria);
            console.log('actualizarAcumuladores: montoFinalCat '+montoFinalCat);
            console.log('actualizarAcumuladores: monto ingresado '+monto);

        } else {
            $('#inputMonto p').css('visibility', 'visible');
            $('#monto').css('border', '#c44569 1px solid');
        }        
}


//funcion para imprimir datos tanto de localStorage como nuevos desde el método de la clase
const imprimirDatos = (categoria, monto, metodoDePago, notas) => {
    //capturar párrafo del div
    let divP = $('#div'+categoria+' p')[0];
    //si hay párrafo, eliminarlo
    if (divP) {
        $(divP).remove();
    }
    $('#div'+categoria+' ul').append(`<li><strong>Monto: </strong>$${monto} <strong>- Método de pago:</strong> ${metodoDePago}  ${notas != '' ? '<strong>Notas:</strong> '+notas : ''}</li>`);

}

//mostrar u ocultar transacciones
const mostrarTransacciones = () => {
    $('#mostrarTransacciones i').toggleClass('fas fa-chevron-down fas fa-chevron-up');
    $('#cajaCates').fadeToggle('slow');
}
