function solucao(produtos) {
	//seu codigo aqui
    let totalTop = 0;
    let total = 0;
    for (let i of produtos) {
        total = total + i.preco
        if (i.preco >= 10000) {
            totalTop = totalTop + i.preco;
        }
    }
    const resposta = {
        totalTop: totalTop,
        percentual: totalTop / total
    };
    console.log(resposta);
}