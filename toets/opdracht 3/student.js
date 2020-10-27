function Student(naam, studentId) {
    let name = naam + 'Hi';
    let id = studentId;
    let cijfers = [];

    let klas = '';

    this.setName = function (naam) {
        let name = naam;
        return name;
    }

    this.getName = function () {
        return name;
    }

    this.setId = function (studentId) {
        let id = studentId;
        return id;
    }

    this.getId = function () {
        return id;
    }

    this.getCijfers = function () {
        return cijfers;
    }

}

let student = new Student('myName', '0001');

// Hier moet je de variabele klas een waarde geven bijvoorbeeld MD2
console.log(
    /* Hier moet de variabele klas getoond worden */
)