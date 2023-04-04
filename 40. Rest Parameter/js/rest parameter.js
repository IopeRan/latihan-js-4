
    // rest parameter digunakan untuk mengirim data sebanyak-banyaknya pada 1 parameter
    // rest parameter hanya boleh ada 1 di functions

    function sum(name, ...data) {
        let total = 0;
        for (const item of data) {
            total += item;
        }
        document.writeln(`<p>Total ${name} is ${total}</p>`);
    }

    sum('Mustang', 2, 3, 4, 6, 7, 8); // 30
    sum('Hayabusa', 5, 5, 6, 7, 5, 6); //  34
    sum('Stuka', 9,5, 2, 3, 4); // 23

    // spread syntax(untuk mentotalkan nilai yang ada di dalam parameter)
    const values = [30, 34, 23];
    sum("Plane", ...values);