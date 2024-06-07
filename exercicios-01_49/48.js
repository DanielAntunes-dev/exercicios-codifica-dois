function combinarInventarios(inventarioLojaA, inventarioLojaB) {
    const inventarioCombinado = {};

    for (const item in inventarioLojaA) {
        inventarioCombinado[item] = inventarioLojaA[item];
    }

    for (const item in inventarioLojaB) {
        if (inventarioCombinado[item]) {
            inventarioCombinado[item] += inventarioLojaB[item];
        } else {
            inventarioCombinado[item] = inventarioLojaB[item];
        }
    }

    return inventarioCombinado;
}

const inventarioLojaA = {
    maca: 10,
    banana: 20,
    laranja: 15
};

const inventarioLojaB = {
    banana: 30,
    uva: 25,
    laranja: 20
};

const inventarioCombinado = combinarInventarios(inventarioLojaA, inventarioLojaB);
console.log(inventarioCombinado);
