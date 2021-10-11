
//obtengo mis gastos del local
var todosMisGastosAnteriores = JSON.parse(localStorage.getItem('gastos'));// traigo con getItem lo que tengo en 'gastos' y lo paso a JSON
var nuevoGastoJSON;

//verificamos. si mi array está vacío, crearlo
if(!todosMisGastosAnteriores) {
    todosMisGastosAnteriores = [];
}

const guardarGastoRegistrado = (nuevoGasto) => {
    
    //agrego el nuevo
    todosMisGastosAnteriores.push(nuevoGasto);
    //convierto a JSON - formateo para persistir la información
    nuevoGastoJSON = JSON.stringify(todosMisGastosAnteriores);
    //guardo mis gastos en el local
    localStorage.setItem('gastos', nuevoGastoJSON);  
    
}

//imprimir datos
for (gasto of todosMisGastosAnteriores){
    //imprimo mis datos
    imprimirDatos(gasto.categoria, gasto.monto, gasto.metodoDePago, gasto.notas);
    //los guardo en mi array 'gastos'
    pushearArray(gasto.categoria, gasto);
}







