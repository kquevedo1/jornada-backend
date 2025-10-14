const User = require("../models/User");

//metodo para crear usuario
exports.CrearUsuario = async (req,res) => {

    try{
        let user;

        //creamos usuario
        user = new User(req.body);

        await user.save();
        res.send(user);

    }  catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');

    }
}

//metodo para obtener usuario
exports.obtenerUsuarios = async (req, res) => {

    try{

        const usuarios = await User.find();
        res.json(usuarios)

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

//metodo para editar un usuario
//agrego todos los campos que agregue en la base de datos
exports.actualizarUsuario = async (req, res) => {
    try{
        const {usuario, tipopermiso,contrasena,estadousuario} = req.body;
        let user = await User.findById(req.params.id);

        if(!usuario){
            res.status(404).json({ msg:'No existe usuario'})
        }

        user.usuario = usuario;
        user.tipopermiso = tipopermiso;
        user.contrasena = contrasena;
        user.estadousuario=estadousuario;

        user = await User.findOneAndUpdate({  _id: req.params.id }, usuario, { new: true} )
        res.json(user);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al editar usuario');
    }
}
    

//Metodo para actualizar el doctor
exports.obtenerUsuario = async (req, res) => {
    try{
        let user = await User.findById(req.params.id);

        if(!user){
            res.status(404).json({ msg:'No existe usuario'})
        }

        res.json(user);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al actualizar usuario');
    }
}

//Para eliminar usuario
exports.eliminarUsuario = async (req, res) => {
    try{
        //busca el usuario
        let user = await User.findById(req.params.id);
        //si no lo encuentra envia un mensaje de que no existe el doctor
        if(!user){
            res.status(404).json({ msg:'No existe usuario'})
        }

        await User.findOneAndDelete({ _id: req.params.id })
        res.json({ msg: 'Usuario eliminado con éxito'});

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al eliminar usuario');
    }
}