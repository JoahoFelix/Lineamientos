//Almacenar un texto en una variable y luego mostrarlo en orden inverso en la consola
//Ejemplo: "senati" -> "itanes"
const textoOriginal = "SENATI"
const longitud = textoOriginal.length //6

for (let i = longitud - 1; i >= 0; i--){
  console.log(textoOriginal.substring(i, i + 1))
}


//Crear una variable donde almacene una dirección de correo electrónico
//verificar si el correo es válido cuando tiene un solo @
//Ejemplo: 
// jhon@gmail.com   [correcto]
// luis@gmail@.com  [incorrecto]
// mariagmail.com   [incorrecto]
const correo = "jhon@gmail.com"
const total = 0

for (let i = 0; i < correo.length; i++){
  //Calcular cuántos @ encuentras...
}