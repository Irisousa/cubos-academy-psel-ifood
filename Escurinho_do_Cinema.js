function solucao(obj) {
	//seu codigo aqui
    if(obj.temIngresso && ( obj.estaComPais || obj.idade >= obj.censura)){

      if(obj.temCarteirinha || obj.idade < 18){ 
        console.log("MEIA")
      }else {
        console.log ("INTEIRA")
      }
}else{
  console.log("ACESSO NEGADO")
}

}