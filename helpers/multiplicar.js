const rs = require('fs');
const colors = require('colors');
const crearArchivo = async(base = 5, maximo = 10, listar = false) => {


    try {

        let salida = '';
        let consola = '';
        for (let i = 1; i <= maximo; i++) {
            salida += `${base} x ${i} = ${base * i} \n`;
            consola += `${base} ${'x'.brightGreen} ${i} ${'='.brightGreen} ${colors.brightMagenta(base * i)} \n`;
        }

        if (listar) {
            console.log('=================='.brightRed);
            console.log('Tabla del:'.brightCyan, colors.brightYellow(base),
                'hasta el:'.brightCyan, colors.brightYellow(maximo));
            console.log('=================='.brightRed);
            console.log(consola);
        }


        rs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        return `tabla-${base}.txt`.rainbow;
    } catch (err) {
        throw err.brightRed;
    }
};

module.exports = {
    crearArchivo
};