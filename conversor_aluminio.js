let resistencia = 0

let resistividade = 0.0282  //0,0282 ohms. mm²/m condutor de aluminio//

let comprimento = 1555

let areaTransversal = 2.5 //O Valor minimo é 1 para não dividir por 0//

resistencia = (resistividade * comprimento) /areaTransversal

console.log =("O valor da resistência = ", resistencia)