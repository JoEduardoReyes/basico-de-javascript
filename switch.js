const armas = ["piedra", "papel", "tijeras"];

function jugar(jugador) {
  let cpu = Math.floor(Math.random() * 3);
  console.log(cpu);
  console.log(`Tu arma es ${jugador} y el arma de la compu es ${armas[cpu]}`);

  switch (jugador) {
    case armas[cpu]:
      console.log(`Es un empate, nadie gana`);
      break;
    case (jugador === armas[0] && armas[cpu] === armas[2]) ||
      (jugador === armas[1] && armas[cpu] === armas[0]) ||
      (jugador === armas[2] && armas[cpu] === armas[1]):
      console.log(`${jugador} le gana a ${armas[cpu]}, ganaste!`);
      break;
    default:
      console.log(`${armas[cpu]} le gana a ${jugador}, perdiste`);
      break;
  }
}
