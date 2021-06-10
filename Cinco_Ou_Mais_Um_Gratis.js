function solucao(precos) {
    //seu codigo aqui
    let total = 0;
    let min = precos[0];
    for (let i of precos) {
        if (i <= min) { min = i; }
        total = total + i;
    }
    if (precos.length >= 5) {
        total = total - min;
    }
    console.log(total);

}