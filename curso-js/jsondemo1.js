//Se requieren tenga las claves:
//2 cadenas
//2 numérico (entero, decimal)
//1 null
//1 lógica (false / true)
//1 array (cadenas)
//1 array (objetos)
//1 objeto (arrays)

//10 MINUTOS

const pelicula = {
  titulo: "Avengers I",
  sinopsis: "Los vengadores se unen para derrotar a Loki",
  presupuesto: 220000000,
  recaudacion: 1520000000,
  paisBetado: null,
  reEstreno: false,
  idiomas: ["Español", "Inglés", "Portuguez", "Chino", "Italiano"],
  elenco: [
    { actor: "Robert Downey Jr", personaje: "Iron Man", rol: "Protagonista" },
    { actor: "Chris Evans", personaje: "Capitán América", rol: "Protagonista" },
    { actor: "Tom Hiddleston", personaje: "Loki", rol: "Antagonista" }
  ],
  mcu: {
    peliculas: ["Capitán América", "Avengers I", "Iron Man3"],
    series: ["Wanda Vision", "Moon Knight", "Secret Invasion"]
  }
}

//¿Cuál es el último elemento de IDIOMAS?
console.log(pelicula.idiomas[pelicula.idiomas.length - 1]) //Italiano

//¿Cuál es el personaje del primer actor?
console.log(pelicula.elenco[0].personaje) //Iron Man

//¿Cuál es el rol del último actor de la lista?
console.log(pelicula.elenco[pelicula.elenco.length - 1].rol) //Antagonista

//Mostrar todas las serie del MCU
const series = pelicula.mcu.series
series.forEach(serie => {
  console.log(serie)
});