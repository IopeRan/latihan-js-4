function sayHi(firstName, lastName) {
    const say = `Hi ${firstName} ${lastName}`;
    return say; // mengembalikan
}

const result = sayHi("Erlang", "Andriyanputra");
document.writeln(`<p>${result}</p>`);

// return juga bisa digunakan berkali-kali
function getFinalGrade(grade) {
    if (grade > 90) {
        return "A";
    } else if (grade > 80) {
        return "B";
    } else if (grade > 70) {
        return "C";
    } else if (grade > 60) {
        return "D";
    } else {
        return "E";
    }
}

const finalGrade = getFinalGrade(85);
document.writeln(`<p>${finalGrade}</p>`);