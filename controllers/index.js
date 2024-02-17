/*          COMPLETADO           */
// 1.- Crear un prototipo alumno, el cual debe incluir:
// Nombre
// Apellidos
// Edad
// Materias inscritas
// Calificaciones
// (Este es el prototipo base, si quieren agregarle mas datos son libres de hacerlo tan completo como quieran)

// 2.- Alta de alumnos
// Una vez creado el prototipo desde su sitio, deberán dar de alta alumnos, por defecto lo único que deben pedir como requisito al inicio es nombre, apellidos, edad.

// 3.- Después deberas crear funciones y vistas que les ayuden a hacer lo siguiente:
// Inscribir un alumno a una clase.
// Asignarle sus calificaciones.
// Crear grupos y asignarle alumnos (Usen estructuras de datos).

// 4.- Ya que tengan sus grupos con alumnos, deberán crear e implementar las siguientes funciones:
// Buscar por nombre.
// Buscar por apellido.
// Obtener promedio de un alumno.
// Obtener promedio del grupo.
// Obtener lista de alumnos ordenados ascendente y descendente por calificación.
// Con los datos almacenados en el prototipo agregar otro ordenamiento o búsqueda bajo el parámetro que quieran (Este es el punto extra).

// 5.- Preferentemente todo guarden en LocalStorage para que puedan tener persistencia de datos (Opcional x2)





const studentName = document.getElementById("studentName");
const studentLastName = document.getElementById("studentLastName");
const studentAge = document.getElementById("studentAge");
const enrolledSubjects = null;
const grades = null
const enrolBtn = document.getElementById("enrolBtn")
const dataBase = [];

class Alumno {
    constructor(name, lastName, age, enrolledSubjects, grades) {
        this.name = name;
        this.lastName = lastName;
        this.age = age;
        this.enrolledSubjects = enrolledSubjects;
        this.grades = grades;
    };
};

// let student = new Alumno(studentName, studentLastName, studentAge, null, null)

enrolBtn.addEventListener("click", (event) => {
    let alumno = new Alumno(studentName.value, studentLastName.value, studentAge.value, null, null);
    dataBase.push(alumno)
    studentName.value = ""
    studentLastName.value = ""
    studentAge.value = ""
    console.log(alumno);
});













// const nombreAlumnoInput = document.getElementById("nombreAlumno");
// const apellidoAlumnoInput = document.getElementById("apellidoAlumno");
// const edadAlumnoInput = document.getElementById("edadAlumno");
// const altaBtn = document.getElementById("altaBtn");
// const dataBase = [];



// class Alumno {
//     /* ATRIBUTOS */
//     constructor(nombre, apellidos, edad, materiasInscritas, calificaciones) {
//         this.nombre = nombre;
//         this.apellidos = apellidos;
//         this.edad = edad;
//         this.materiasInscritas = materiasInscritas;
//         this.calificaciones = calificaciones;
//     }
// }

// const crearAlumno = () => {
//     let alumno = new Alumno (nombreAlumnoInput.value, apellidoAlumnoInput.value, edadAlumnoInput.value,null,null);
//     dataBase.push(alumno);
//     nombreAlumnoInput.value = "";
//     apellidoAlumnoInput.value="";
//     edadAlumnoInput.value = "";
// }

// altaBtn.addEventListener("click", (event) => {
//     let alumno = new Alumno(nombreAlumnoInput.value, apellidoAlumnoInput.value, edadAlumnoInput.value, null, null);
//     dataBase.push(alumno);
//     nombreAlumnoInput.value = "";
//     apellidoAlumnoInput.value = "";
//     edadAlumnoInput.value = "";
// })

// let alumno1 = new Alumno("Dilan", "Martinez", 18, 5, 5, [10, 5, 4, 9, 10]);
// let maestro1 = new Maestro("Angel", "Miranda", ["Fisica, Matematicas"])
