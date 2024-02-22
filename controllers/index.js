// //1.- Crear un prototipo alumno, el cual debe incluir:
// *Nombre
// *Apellidos
// *Edad
// *Materias inscritas
// *Calificaciones
// *(Este es el prototipo base, si quieren agregarle mas datos son libres de hacerlo tan completo como quieran)

// //2.- Alta de alumnos
// *Una vez creado el prototipo desde su sitio, deberán dar de alta alumnos, por defecto lo único que deben pedir como requisito al inicio es nombre, apellidos, edad.

// *3.- Después deberas crear funciones y vistas que les ayuden a hacer lo siguiente:
// *Inscribir un alumno a una clase.
// *Asignarle sus calificaciones.
// *Crear grupos y asignarle alumnos (Usen estructuras de datos).

// *4.- Ya que tengan sus grupos con alumnos, deberán crear e implementar las siguientes funciones:
// *Buscar por nombre.
// *Buscar por apellido.
// *Obtener promedio de un alumno.
// *Obtener promedio del grupo.
// *Obtener lista de alumnos ordenados ascendente y descendente por calificación.
// *Con los datos almacenados en el prototipo agregar otro ordenamiento o búsqueda bajo el parámetro que quieran (Este es el punto extra).

// *5.- Preferentemente todo guarden en LocalStorage para que puedan tener persistencia de datos (Opcional x2)


// *FORMULARIO
const studentName = document.getElementById("studentName");
const studentLastName = document.getElementById("studentLastName");
const studentAge = document.getElementById("studentAge");
const enrolledSubjects = document.getElementById("enrolledSubjects");
const studentGrades = document.getElementById("grades");
const enrolBtn = document.getElementById("enrolBtn");
// *BUSCADOR
const searchStudent = document.getElementById("searchStudent");
const searchBtn = document.getElementById("searchBtn");
// *ALMACENAMIENTO
const dataBase = [];


// *FUNCIONES
// ? Devuelve un string en mayusculas y sin espacios en extremos 
const toUpperCase = (stringVariable) => { return stringVariable.trim().toUpperCase() };

// ? Convierte un string en array (su delimitador son todas los caracteres especiales excepto "-"), y lo devuelve
const stringToArray = (string) => { return (string.split(/[^a-zA-Z0-9-]+/g)) };

// ? Devuelve una cadena de numeros, esta delimitada por todos los caracteres especiales excepto "."
const numericArray = (numbers) => { return numbers.split(/[^\d.]+/).map(Number) };

// ? convierte un string numerico en numero y lo devuelve, en caso de string sencillo lo devuelve en mayusculas 
const processData = (inputValue) => {
    let numericDatum = parseInt(inputValue);
    if (!isNaN(numericDatum)) {
        return numericDatum
    } else {
        return toUpperCase(inputValue)
    };
};

// *CREACION DE CLASE ALUMNO
class Alumno {
    constructor(name, lastName, age, subjects, grades) {
        this.name = toUpperCase(name);
        this.lastName = toUpperCase(lastName);
        this.age = parseInt(age);
        this.subjects = stringToArray(toUpperCase(subjects));
        this.grades = numericArray(grades);
    };
};

// * EVENTO CLICK "AGREGAR ALUMNO"
enrolBtn.addEventListener("click", (event) => {
    let student = new Alumno(studentName.value, studentLastName.value, studentAge.value, enrolledSubjects.value, studentGrades.value);
    dataBase.push(student);

    let studentTable = document.getElementById("register-table").getElementsByTagName("tbody")[0];
    let newRow = studentTable.insertRow();
    let cell1 = newRow.insertCell(0);
    cell1.innerHTML = student.name;
    let cell2 = newRow.insertCell(1);
    cell2.innerHTML = student.lastName;
    let cell3 = newRow.insertCell(2)
    cell3.innerHTML = student.age;
    let cell4 = newRow.insertCell(3)
    cell4.innerHTML = student.subjects;
    let cell5 = newRow.insertCell(4)
    cell5.innerHTML = student.grades

    studentName.value = ""
    studentLastName.value = ""
    studentAge.value = "";
    enrolledSubjects.value = "";
    studentGrades.value = ""
});


// *EVENTO CLICK "BUSCAR"
searchBtn.addEventListener("click", () => {
    let searchValue = toUpperCase(searchStudent.value)
    let processValue = processData(searchValue)

    const searchedValue = dataBase.filter(student => student.name.includes(processValue)
        || student.lastName.includes(processValue)
        || student.age === processValue
        || student.subjects.includes(processValue)
        || student.grades === processValue
    );
    let tableBody = document.getElementById("search-table").getElementsByTagName("tbody")[0];
    tableBody.innerHTML = "";

    searchedValue.forEach(student => {
        let row = document.createElement("tr");
        let nameCell = document.createElement("td");
        nameCell.textContent = student.name;
        row.appendChild(nameCell);
        let lastNameCell = document.createElement("td");
        lastNameCell.textContent = student.lastName;
        row.appendChild(lastNameCell);
        let ageCell = document.createElement("td");
        ageCell.textContent = student.age;
        row.appendChild(ageCell);
        let subjectsCell = document.createElement("td");
        subjectsCell.textContent = student.subjects.join(",")
        row.appendChild(subjectsCell);
        let gradesCell = document.createElement("td");
        gradesCell.textContent = student.grades;
        row.appendChild(gradesCell)
        tableBody.appendChild(row)
    })


})









// const ordenamientoAlmacenamientoNombres = almacenamiento.sort((a, b) => {
//     let nombreA = a.studentName;
//     let nombreB = b.studentName;
//     if (nombreA < nombreB) {
//         return -1
//     } if (nombreA > nombreB) {
//         return 1
//     };
// });
// ordenamientoAlmacenamientoNombres;