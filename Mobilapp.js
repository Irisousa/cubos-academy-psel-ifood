function solucao(tempo, distancia) {
	//seu codigo aqui
if (tempo < 5) {
    console.log(600);
  } 

else if (tempo >= 5 && tempo <= 60) {
    console.log(100*tempo + 50*distancia)
  }


 else if (tempo > 60 && distancia < 100) {
    console.log(200*distancia)
  }

 else if (distancia >= 100) { 
    console.log(150*distancia)
}
}