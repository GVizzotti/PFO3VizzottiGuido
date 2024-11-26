/* 1 Caclcular el area de un rectangulo */

function calcularAreaRectangulo(longitud, ancho) {
    return longitud * ancho;
}

// Ejemplos
console.log("Solución 1:");
console.log(calcularAreaRectangulo(5, 3)); // Resultado: 15
console.log(calcularAreaRectangulo(7, 2)); // Resultado: 14
console.log(calcularAreaRectangulo(10, 10)); // Resultado: 100
console.log("______________");

/*
El problema consiste en usar una fórmula simple de geometría para calcular el área. La función toma dos parámetros
(longitud y ancho) y los multiplica. Decidí usar `return` para que la función sea reutilizable, sin imprimir
directamente el resultado.
*/

/* 2 Contar palabras en una cadena*/

function contarPalabras(cadena) {
    return cadena.trim().split(/\s+/).length;
}

// Ejemplos
console.log("Solución 2:");
console.log(contarPalabras("Humahuaca es un lugar copado")); // Resultado: 4
console.log(contarPalabras("Hola mundo")); // Resultado: 2
console.log(contarPalabras("  Esto tiene    demasiados espacios   ")); // Resultado: 5
console.log("______________");

/*

Primero eliminé los espacios en blanco extra con `trim()` y luego dividí el texto en palabras usando `split()`.
Utilicé una expresión regular para asegurarme de que cualquier número de espacios sea tratado como un delimitador.
*/

/* 3 Invertir una cadena */

function invertirCadena(cadena) {
    return cadena.split("").reverse().join("");
}

// Ejemplos
console.log("Solución 3:");
console.log(invertirCadena("hola")); // Resultado: "aloh"
console.log(invertirCadena("javascript")); // Resultado: "tpircsavaj"
console.log(invertirCadena("12345")); // Resultado: "54321"
console.log("______________");

/*
Para invertir una cadena, la dividí en caracteres con `split()`, los invertí con `reverse()` y los volví a unir con `join()`.
*/

/* 4 Encontrar el palindromo */

function esPalindromo(cadena) {
    let cadenaNormalizada = cadena.toLowerCase().replace(/[^a-z0-9]/g, "");
    return cadenaNormalizada === cadenaNormalizada.split("").reverse().join("");
}

// Ejemplos
console.log("Solución 4:");
console.log(esPalindromo("neuquen")); // true
console.log(esPalindromo("reconocer")); // true
console.log(esPalindromo("palabra")); // false
console.log("______________");

/*
Primero normalicé la cadena a minúsculas y eliminé caracteres no alfanuméricos. Luego comparé la cadena original
con su versión invertida.

/* 5 Convertir edad de perros en años humanos */

function edadCanina() {
    // Solicitar la edad humana del perro al usuario
    const edadHumana = prompt("¿Cuál es la edad de tu perro en años humanos?");
    
    // Validar que el usuario haya ingresado un número válido
    if (isNaN(edadHumana) || edadHumana === "" || edadHumana === null) {
        console.log("Por favor, ingresa un número válido.");
    } else {
        // Calcular la edad canina
        const edadCanina = edadHumana * 7;
        
        // Mostrar el resultado en la consola
        console.log(`Tu perro tiene ${edadCanina} años humanos.`);
    }
}

// Llamar a la función
edadCanina();
edadCanina();
edadCanina();
console.log("______________");

/*
Al ejecutar la función, aparecerá una ventana emergente donde el usuario ingresará la edad del perro.Si el usuario deja el campo vacío, presiona "Cancelar" o escribe algo que no sea un número, la función imprimirá:
Por favor, ingresa un número válido.
Si el usuario inserta un numero, la función recibe la edad como entrada, calcula la edad en años humanos multiplicándola por 7, y muestra el
resultado con `console.log()`.
*/
