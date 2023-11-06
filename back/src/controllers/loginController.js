const {checkUser} = require ("../services/usersServices")
const {User} = require('../DB_connection')
const  loginController = async (req,res) => {
    try{
            const {email,password} = req.body;

        //Verifiquemos que lleguen los datos.
        if(!email || !password) return res.status(400).send("Faltan datos.");

        const user = await User.findOne ({where: {email:email}});

        if(!user) return res.status(404).send('usuario no encontrado')

        return user.password ===password 
            ? res.json({access:true})
            :res.status(403).send("contraseña incorrecta");
        }

        catch{
            return res.status(500).send(error.message);
        }}


        module.exports = loginController;
    
    
    
    
    // Este modulo sirve para verificar si el usuario con el que intentamos loguearnos se encuentra efectivamente 
    //en nuestra base de datos

    // 1*Capturamos Email y Pass por body
    // const {email,password} = req.body;
    // 2* verificamos si este email y password tiene campos adentro para que no nos envien data vacia
    //if(!email || !password) return res.status(400).send("Faltan datos.");
    // 3*Consultamos a la base de nuestro modelo de User buscando si en mi propiedad de  User tengo el mismo email que me enviaron
    //   const user = await User.findOne ({where: {email:email}});
    // 4* Si la cosulta anterior  consulta llegara a no ser exitosa  respondo que el usuario no se encontro
    //   if(!user) return res.status(404).send('usuario no encontrado')
    //5* si la contraseña que me ingresaron es igual a una password del User le doy access true, caso contrario le doy un mensaje
    //              return user.password ===password 
    //              ? res.json({access:true})
    //              :res.status(403).send("contraseña incorrecta");


    
    
    // // esto era directamente  de nuestro codigoconst login =  await checkUser(email, password);
    // const {email, password} = req.body; 
    // try{
    //     res.status(200).json({login});}
    // catch(error){
    //     res.status(401).json({error:"login invalido"})
    // }
    // }

////////Nueva Modificacion

    /**Ahora este Modulo  se va a encargar si el usuario que nosotros ingresemos coincide 
    con un usuario que existe en la base de datos

    Para esto hacemos  un const en el cual extraermos email y password , y luego hacemos que nos llegue por query
            const {email,password} = query

    Ahora que ya tenemos el email y password podemos hacer los siguientes pasos
        1-verificar que lleguen los datos: para esto  hacemos un if que diga si no hay email y no hay password voy a devolver un status 400 con un send "faltan datos"
            if (!email || !password) return res.status(400).send("faltan datos")
            
        2- una vez que verificamos que se hallan ingresado user y pass  ahora nos queda chequear que coinidan con la base 
            de datos. para esto hago una constante que se encargue de hacer un find en el User que importamos , y a este find
            le ponemos como condicion que me encuentre en la BDD un email que coincida con el email que nos ingresaron
                const user = User.findOne({where: {email:email}})

**/

