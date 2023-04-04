const person = {
    firstName: "Erlang",
    lastName: "Andriyanputra"
};

for(const property in person) {
    document.writeln(`<p>${property} : ${person[property]}</p>`);
}

const names = ["Erlang", "Andriyanputra"];
for(const index in names) {
    document.writeln(`<p>${index} : ${names[index]}</p>`);
}