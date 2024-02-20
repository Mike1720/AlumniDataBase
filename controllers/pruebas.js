//ZONA DE PRUEBAS

//EJEMPLO DE INSTANCIA MANUAL
let almacenamietoDataBase = [
    {
        nombre: "Miguel",
        apellido: "Miranda",
        edad: 21,
        materiasInscritas: "Ingles, Español, Fisica",
        calificaciones: "4 5 7 10"
    },
];

//INSTANCIACION DE VARIABLES
let alumnaNombreValor = "    Ana            Paula  ".toUpperCase().trim()
let alumnaApellidoValor = "      Miranda       Velasco       ".toLocaleUpperCase().trim()
let alumnaEdadValor = parseInt("15 años")
let alumnaMateriasValor = "  Historia. Matematicas. Geografia: Analitica_       Trigonometria. Musica,   comunicacion-cientifica ".trim().toUpperCase().split(/[^a-zA-Z0-9-]+/g);
/* .split(/[^a-zA-Z0-9\s]/g) */
/* .replace(/[^a-zA-Z0-9\s]/g, ' ') */
/* .trim().split("  ") */
// .toUpperCase().replace(/[^a-zA-Z0-9\s]/g,"").trim().split(" ")
// .split(/[^a-zA-Z0-9\s]/g)
let alumnaCalificacionesValor = "10.5,4.8,9.5,10.8,10-8"
/* .replace(/[^0-9.-]+/g, ' ') */
/* .split(" ") */

//INSTANCIACION DE CLASE
let nuevaAlumna = {
    nombre: alumnaNombreValor,
    apellido: alumnaApellidoValor,
    edad: alumnaEdadValor,
    materiasInscritas: alumnaMateriasValor,
    calificaciones: alumnaCalificacionesValor
};
//AGREGADO DE OBJETO A ALMACENAMIENTO

// almacenamietoDataBase.push(nuevaAlumna)
// almacenamietoDataBase
// almacenamietoDataBase[0] //Miguel
// almacenamietoDataBase[1] //Ana

const numericArray = (numbers) => { return numbers.split(/[^.,\w\s]/).map(Number)};
console.log(numericArray(alumnaCalificacionesValor));



// /[^0-9.-]+/g