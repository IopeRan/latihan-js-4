function register(name, gender = "UNKNOWN") {
    console.log(name); 
    console.log(gender);
}

register("Erlang",
         "Male"
        ); // data nya akan lengkap di console
register("Erlang"); // gender akan bernilai UNKNOWN
register("Erlang, undefined"); // 2 data akan tersambung dan gender akan bernilai UNKNOWN