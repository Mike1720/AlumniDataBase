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

const numericArray = (numbers) => { return numbers.split(/[^.,\w\s]/).map(Number) };
console.log(numericArray(alumnaCalificacionesValor));



// /[^0-9.-]+/g



let nameInput = "Miguel Angel              Miranda"
let nameDB = toUpperCase(nameInput)

let searchName = "Mi"
let searchNameValue = toUpperCase(searchName)

const searchValue = () => {
    if (nameDB.includes(searchNameValue)) {
        console.log(nameDB);
    } else {
        console.log("no encontrado");
    }
}

//todo PARTE 1 DE LA FUNCION
let valorBuscadoInputString1 = "MiGu"; //! lo que escribe el usuario
let valorBuscadoInputString2 = "EDSON"
let valorBuscadoInputString3 = "KARE"
let valorBuscadoInputString4 = "Ana"


// let nombreAlmacenado = almacenamiento[0].studentName; // !Dato almacenado previamente en el registro
// // !funcion
// const buscarValor = (value) => {
//     if (nombreAlmacenado.includes(value)) {
//         return nombreAlmacenado;
//     } else {
//         return `el dato ${value} no se encuentra almacenado`
//     }
// };
// buscarValor(toUpperCase(valorBuscadoInputString1));

// let valor1 = "15asda"
// let valor2 = "15 años"
// let valorStringNumerico = "26gisolo"
// let valor_1 = "miguel";



// const searchedValue = (value) => {

//     let search = processData(value);
//     // for (let i = 0; i < almacenamiento.length; i++) {
//     // if (almacenamiento[i].studentName.includes(search)) {
//     //     return almacenamiento[i].studentName
//     // } if (almacenamiento[i].studentLastName.includes(search)) {
//     //     return almacenamiento[i].studentLastName
//     // } if (almacenamiento[i].enrolledSubjects.includes(search)) {
//     //     return almacenamiento[i].enrolledSubjects
//     // }


// };
// almacenamiento
// searchedValue("miguel");
// searchedValue("mira");
// searchedValue("karen");
// searchedValue("faus");
// searchedValue("jahir")//
// searchedValue("edson")
// searchedValue("arquitectura")
// searchedValue("matematicas")//

searchBtn.addEventListener("click", (event) => {
    let result = null;
    for (let i = 0; i < almacenamiento.length; i++) {
        if (toUpperCase(searchStudent.value) === almacenamiento[i].studentName) {
            result = almacenamiento[i].studentName
        }
        return alert(result);
    }
    searchStudent.value = ""
})





const searchValues = (value) => {

    let processValue = processData(value)
    const searchedValue = dataBase.filter(student => {
        return student.name.includes(processValue)
            || student.lastName.includes(processValue)
            || student.age === processValue
            || student.subjects.includes(processValue)
            || student.grades === processValue
    });
    return searchedValue
}

searchsValue(valorBuscadoInputString)

