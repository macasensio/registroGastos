//acumulador TOTAL
var acumuladorTotal = 0;
todosMisGastosAnteriores.forEach(gasto => acumuladorTotal += gasto.monto);
$('#gastoTotal').append(acumuladorTotal);

//acumulador por CATEGORÍA
var superTotal = 0;
var verduTotal = 0;
var fijosTotal = 0;
var socialTotal = 0;
var ahorrosTotal = 0;
var transporteTotal = 0;

const calcularAcumuladores = () => {
    todosMisGastosAnteriores.forEach(gasto => {
        if (gasto.categoria === 'supermercado') {
            superTotal += gasto.monto;        
        } else if (gasto.categoria === 'verduleria') {
            verduTotal += gasto.monto;
        } else if (gasto.categoria === 'gastosF') {
            fijosTotal += gasto.monto;
        } else if (gasto.categoria === 'social') {
            socialTotal += gasto.monto;
        } else if (gasto.categoria === 'ahorros') {
            ahorrosTotal += gasto.monto;
        } else if (gasto.categoria === 'transporte') {
            transporteTotal += gasto.monto;
        }
    })
} 

const imprimirAcumuladorCategoria = (categoria) => {    
    switch(categoria) {
        case 'supermercado':
            return superTotal;
        case 'verduleria':
            return verduTotal;
        case 'gastosF':
            return fijosTotal;
        case 'social':
            return socialTotal; 
        case 'ahorros':
            return ahorrosTotal; 
        case 'transporte':
            return transporteTotal; 
    }
}

const actualizarAcumuladores = (categoria, montoFinalCat, monto) => {
    //categoria
    $(`#box${categoria} p`).html(`$${montoFinalCat}`);
    $(`#box${categoria} a`).attr('onclick', `abrirModal('${categoria}', ${montoFinalCat})`);
    //total transacciones
    acumuladorTotal += monto;
    $('#gastoTotal').html('Total: $'+acumuladorTotal);
}