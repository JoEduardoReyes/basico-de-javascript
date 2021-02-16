const armas = ["piedra", "papel", "tijeras"];
var partidasGanadas = 0,
  partidasPerdidas = 0,
  partidasEmpatadas = 0;

function jugar(jugador) {
  let cpu = Math.floor(Math.random() * 3);
  console.log(`Tu arma es ${jugador} y el arma de la compu es ${armas[cpu]}`);

  if (jugador === armas[cpu]) {
    console.log(`Es un empate, nadie gana`);
    partidasEmpatadas++;
  } else if (
    (jugador === armas[0] && armas[cpu] === armas[2]) ||
    (jugador === armas[1] && armas[cpu] === armas[0]) ||
    (jugador === armas[2] && armas[cpu] === armas[1])
  ) {
    console.log(`${jugador} le gana a ${armas[cpu]}, ganaste!`);
    partidasGanadas++;
  } else {
    console.log(`${armas[cpu]} le gana a ${jugador}, perdiste`);
    partidasPerdidas++;
  }
}
