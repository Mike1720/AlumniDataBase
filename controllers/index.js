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
const numericArray = (numbers) => { return numbers.split(/[^\d.]+/)};


// *CREACION DE CLASE ALUMNO
class Alumno {
    constructor(studentName, studentLastName, studentAge, enrolledSubjects, studentGrades) {
        this.studentName = studentName;
        this.studentLastName = studentLastName;
        this.studentAge = studentAge;
        this.enrolledSubjects = enrolledSubjects;
        this.studentGrades = studentGrades
    };
};


// * EVENTO CLICK
enrolBtn.addEventListener("click", (event) => {
    let student = new Alumno(toUpperCase(studentName.value), toUpperCase(studentLastName.value), parseInt(studentAge.value), stringToArray(toUpperCase(enrolledSubjects.value)), numericArray(studentGrades.value));
    dataBase.push(student)
    studentName.value = ""
    studentLastName.value = ""
    studentAge.value = "";
    enrolledSubjects.value = "";
    studentGrades.value = ""
});