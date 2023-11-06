//Este modulo es el que se encarga de las funciones prooveedoras de datos

//el servicio siempre debe ser asincrono, porque sus funciones son asyncronas


const axios = require("axios")

const findCharacterById = async (id) => {
    const fetchData = await axios.get(
        `http://rickandmortyapi.com/api/character/${id}`   // uno de los principales problema fue que no le puse la / luego de characters
        );    


const character = fetchData.data;

return character;

};

module.exports = {
    findCharacterById,
};