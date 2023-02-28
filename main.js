/*// Ingresan su nombre y apellido, y lo guardo en la variable nombreIngreso
let nombreIngreso = prompt("Ingrese su nombre y apellido para continuar");

// Creo la variable pagoInicial, y le pongo valor 0
let pagoInicial = 0;

// Creo variable tarjeta
let tarjeta = "";

  // Pregunto si el nombre ingresado no es vacio
  while (nombreIngreso == "" || nombreIngreso == null) {
    nombreIngreso = prompt ("Coloque un nombre valido")
  }
  // Ingresan el monto a pagar
  pagoInicial = prompt("Para continuar, debera abonar un minimo de 150 pesos");

  while (pagoInicial < 150) {
    pagoInicial = prompt("El monto es menor a 150, ingrese un nuevo monto");
  }
  //Ingresan el numero de tarjeta
  tarjeta = prompt("Colocar los 16 digitos de su tarjeta de credito o debito");

  while (tarjeta.length != 16){
    tarjeta = prompt ("Lectura incorrecta, coloque los 16 digitos")
  }
  alert("Bienvenido/a! " + nombreIngreso);
// // El nombre ingresado es vacio, mostramos error
// else {
//   alert("Nombre invalido, recargue la pagina e intentalo nuevamente");
// }
*/
function miBotonMultiplicacion() {
  //Creo la variable tabla vacia
  let tabla = "";
  //Creo la variable multipilcarNumero con un parseInt que transforma a numero
  let multiplicarNumero = parseInt(prompt("Por favor ingrese numero"));
  //Creo el ciclo for con sus variables, condicion y operador de incremento
  for (let numero = 1; numero <= 10; numero++) {
    // Creo variable de resultado con la operacion logica
    let resultadoMultiplicar = multiplicarNumero * numero;
    // La variable tabla le asigno un valor, donde este suma todas los ciclos anteriories para mostrar todas las lineas en 1 solo alert con un br
    tabla =
      tabla + `${multiplicarNumero} x ${numero} = ${resultadoMultiplicar} \n`;
  }
  //Creo un alert con la variable tabla que muestra todas las lineas del ciclo
  alert(tabla);
}

//Calculadora
let op;
document.querySelector("#suma").addEventListener("click", () => {
  op = "+";
});
document.querySelector("#resta").addEventListener("click", () => {
  op = "-";
});
document.querySelector("#multiplicacion").addEventListener("click", () => {
  op = "*";
});
document.querySelector("#division").addEventListener("click", () => {
  op = "/";
});

document.querySelector("#calcular").addEventListener("click", () => {
  const n1 = parseInt(document.querySelector("#n1").value);
  const n2 = parseInt(document.querySelector("#n2").value);
  //const op = document.querySelector('#op').value;
  let r;
  if (op == "+") {
    r = n1 + n2;
  } else if (op == "-") {
    r = n1 - n2;
  } else if (op == "*") {
    r = n1 * n2;
  } else if (op == "/") {
    r = n1 / n2;
  }
  document.querySelector("#r").innerHTML = r;
});

//Calcular raiz

document.querySelector("#calcular_raiz").addEventListener("click", () => {
  const nraiz = parseInt(document.querySelector("#nraiz").value);
  let rraiz = Math.sqrt(nraiz);
  document.querySelector("#rraiz").innerHTML = rraiz;
});

