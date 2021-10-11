//array padre
var gastos = [];

//array categorías
var superArray = [];
var verduArray = [];
var gastosFArray = [];
var socialArray = [];
var ahorrosArray = [];
var transporteArray = [];
gastos.push(superArray,verduArray,gastosFArray,socialArray, ahorrosArray, transporteArray);


//crear categorías imprimiendolas desde mi json
var catValue;
//recorro mi JSON y lo imprimo
const cargarCategorias = () => {
    $.getJSON('js/custom/categorias.json', function(data) {
        let html = "";
        $.each(data, function(key, element) {
            html += `<div id='box${element.categoria}' class='categoria'>
                <h2>${element.nombre}</h2>
                <a href="#" onclick="abrirModal('${element.categoria}', ${imprimirAcumuladorCategoria(element.categoria)})">
                    <img src='${element.icono}' width='80' alt='Icon categoría ${element.nombre}' />
                </a>
                <p class="categoriaTotal">$${imprimirAcumuladorCategoria(element.categoria)}</p>
                </div>`;
        });
        $('#cajaCategorias').append(html);
    })
}

//funcion para pushear lo del localStorage a mi array 'gastos'
const pushearArray = (categoria, gasto) => {
    switch(categoria) {
        case 'supermercado':
            superArray.push(gasto);
            break;
        case 'verduleria':
            verduArray.push(gasto);
            break;
        case 'gastosF':
            gastosFArray.push(gasto);
            break;
        case 'social':
            socialArray.push(gasto);
            break;
        case 'ahorros':
            ahorrosArray.push(gasto);
            break;
        case 'transporte':
            transporteArray.push(gasto);
            break;
    }
}