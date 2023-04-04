const person = {
    firstName: "Erlang",
    lastName: "Andriyanputra"
};

console.info(person.firstName);
console.info(person.lastName);

const firstName = "Erlang";
const lastName = "Andriyanputra";

with (person) {
    console.info(firstName);
    console.info(lastName);
}

// with statement tidak di rekomendasikan karna membuat code menjadi ambigu