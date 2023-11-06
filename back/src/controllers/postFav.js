const {Favorite} = require ("../DB_connection");

const postFav = async (req,res) =>{
    try{
        //requerimos la data por body -->
        const {name,origin,status,image,species,gender} = req.body
        // verificamos que la data este llegando 
        if(!name || !origin || status || image ||species ||gender){
            return res.status(401).send("Faltan Datos")
        }
        //GUARDAMOS EN BASE DE DATOS -->
        await Favorite.findOrCreate({ where: {name,origin,status,image,species,gender}})

        //Consulto y retorno mis favoritos -->
        const allFavs = await Favorite.findAll();
        return res.json(allFavs)
    }
    catch(error){
        return res.status(500).send(error.messag)
    }
};

module.exports = postFav;