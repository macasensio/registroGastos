
const ingreso = () => {
    
    let nombreIngresado = $('#nombreUsuario').val();

    const validarNombre = (nombreIngresado) => {
        
        if (nombreIngresado.length > 2) {
            $('#nombreUser').html(`¡Hola <span style="font-weight: bold; color: #546de5">${nombreIngresado}</span>!`);            
            $('#bienvenida').hide();
            $('#mainBloque').show();
            $('#btnCerrarSesion').show();
        } else {
            $('#msjErrorUser').css('visibility', 'visible');
        }
    }
    validarNombre(nombreIngresado); 
}

const egreso = () => {
    $('#bienvenida').show();
    $('#mainBloque').hide();
    $('#btnCerrarSesion').show();
    $('#nombreUser').html(`¡Hola!`);
    $('#nombreUsuario').val('');
}