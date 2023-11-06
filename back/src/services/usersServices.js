    const EMAIL ="carlosjlicho@gmail.com"
    const PASSWORD = "1234qwer"

    const checkUser = async (email,  password)=>{
        if (email == EMAIL && password ==PASSWORD)return true;
        else throw Error("Login Invalido")
    }

    module.exports = {checkUser}