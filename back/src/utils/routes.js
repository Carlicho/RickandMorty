const {Router} = require ("express")
const getCharacterById = require("../controllers/getCharacterById");
const loginController = require("../controllers/loginController")
const postUser = require("../controllers/postUser")
const postFav = require("../controllers/postFav");
const { Favorite } = require("../DB_connection");
const deleteFav = require("../controllers/deleteFav");

const router = Router();

router.get("/character/:id", getCharacterById)

router.post("/login", postUser);
router.get("/login", loginController) //antes era un .post // ahora es un .get // por lo q en este controlador solo se verifica si la informacion que llega existe o no existe , del resto se encarga el postUser 
router.post('/fav', postFav);
router.delete('/Fav/:id', deleteFav)
    

module.exports = router


/**
 * En este modulo se definen las rutas, el logincontrontrolle paso de ser post a ser get, porque creamos un
 *  nuevo controller que se encarga de darle control al posteo  de usuario, ya no esta unificado en el login, ahora agregamos 
 * como post el postUser 
 * 
 * 
 */