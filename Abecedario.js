function solucao(letra, palavras) {
	//seu codigo aqui
    var incorretas = 0;
    
    for (var palavra of palavras){
        if (palavra[0] != letra){
            incorretas++;
        }
    }
      console.log(incorretas)  
}