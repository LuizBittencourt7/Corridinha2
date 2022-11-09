
let yCarros = [40, 96, 150, 210, 270, 318];
let vCarros = [2, 2.5, 3,2, 5, 3.7, 6]
let xCarros = [600, 600, 600, 600, 600, 600]
let comprimentoCarros = 50;
let alturaCarros = 40;

function mostraCarro(){
    for(let i = 0; i < imagensCarros.length; i++){
  image(imagensCarros[i], xCarros[i], yCarros[i], comprimentoCarros, alturaCarros)
}
}

function movimentaCarro(){
  for (let i = 0; i < imagensCarros.length; i++){
    xCarros[i] -= vCarros[i]
  }
}
function voltaPosiçãoInicialDoCarro (){
  for (let i = 0; i < imagensCarros.length; i++){
    if (passouTodaATela(xCarros[i])){
      xCarros[i] = 600
    }
  }
}

function passouTodaATela(xCarros){
  return xCarros < -50;
}
 