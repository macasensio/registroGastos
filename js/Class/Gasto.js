class Gasto {
    constructor(categoria,monto,metodoDePago,notas) {
        this.categoria = categoria,
        this.monto = parseFloat(monto),
        this.metodoDePago = metodoDePago,
        this.notas = notas,
        this.isAlive = true; //le indico que ya hay gasto
    }
    guardarGasto(cat){
        pushearArray(cat, nuevoGasto);
        cerrarModal();
    }

    imprimirGasto(){
        imprimirDatos(this.categoria, this.monto, this.metodoDePago, this.notas);
    }

}