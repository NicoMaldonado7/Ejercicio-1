var cant = parseInt(prompt("Ingrese cantidad de gatos"));
for (let i = 1; i <= cant; i++) {
    if (i % 3 == 0) {
        console.log("gato # " + i + "😺");
    }
        if (i % 3 == 1){
            console.log("gato # " + i + "😸");
        }
        if (i % 3 == 2){
            console.log("gato # " + i + "😹");
        }
    
} 