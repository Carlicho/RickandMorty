const { findCharacterById } = require("../services/charactersServices"); 

const getCharacterById = async  (req, res) => {
    const {id} = req.params 
    try{
        const character =await findCharacterById(id);
        res.status(200).json(character);
    } catch(error) {
        res.status(404).json({
            error: error.message, 
        })
    }
}

module.exports = getCharacterById;