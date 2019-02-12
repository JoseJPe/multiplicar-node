//requires
const fs = require('fs');
const colors = require('colors');


let data = '';


let listarTabla = (base, limite) => {

    for (let i = 1; i <= limite; i++) {

        console.log(`${i} * ${base} = ${i * base}\n`.bgBlue);
    }

}



let crearArchivo = (base, limite) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(` "${base}" no es un numero`);
            return;
        }

        for (let i = 1; i <= limite; i++) {

            data += `${i} * ${base} = ${i * base}\n`;
        }

        // fs.writeFile('nombre del archivo.tipo de archivo', 'contenido', (err) =>{
        //     if(err) throw err; //y por ultimo se maneja el error 

        //     console.log(`mensaje`);
        // });

        fs.writeFile(`tablas/tablas-${ base }.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(colors.green(`tabla-${base}.txt`));
        });


    });

}


module.exports = {
    crearArchivo,
    listarTabla
}