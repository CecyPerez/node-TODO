const fs = require('fs');


let listadoTODO = [];

const guardarDB = () => {
    let data = JSON.stringify(listadoTODO);
    fs.writeFile('./db/data.json', data, (erro) => {
        if (erro) throw new Error('No se pudeo grabar', erro);
    });
};

const cargarDB = () => {
    try {

        listadoTODO = require('../db/data.json');
    } catch (error) {
        listadoTODO = [];
    }

};

const getListado = () => {
    cargarDB();
    return listadoTODO;
}

const crear = (descripcion) => {
    cargarDB();
    let TODO = {
        descripcion,
        completado: false
    };

    listadoTODO.push(TODO);
    guardarDB();

    return TODO;
}

const actualizar = (descripcion, completado = true) => {
    cargarDB();
    let index = listadoTODO.findIndex(tarea => tarea.descripcion === descripcion);

    if (index >= 0) {
        listadoTODO[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }

}

const borrar = (descripcion) => {
    cargarDB();
    let nuevo = listadoTODO.filter(tarea => tarea.descripcion !== descripcion);

    if (listadoTODO.length == nuevo.length) {
        return false;
    } else {
        listadoTODO = nuevo;
        guardarDB();
        return true;
    }
}



module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}