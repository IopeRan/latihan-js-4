// break
let counter = 2;
while(true) {
document.writeln(`<p>Perulangan ke ${counter}</p>`);
counter++;

// Break
if(counter > 10 ) {
    break;
}
}

    // continue
    for (let i = 1; i <= 100; i++) {
        if(i % 2 === 0) {
            continue;
        }
        document.writeln(`<p>Perulangan Ganjil ${i}</p>`);
    }