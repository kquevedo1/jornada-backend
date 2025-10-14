const Doctor = require("../models/Doctor");

//metodo para crear doctor
exports.CrearDoctor = async (req,res) => {

    try{
        let doctor;

        //creamos doctor
        doctor = new Doctor(req.body);

        await doctor.save();
        res.send(doctor);

    }  catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');

    }
}

//metodo para obtener doctor
exports.obtenerDoctores = async (req, res) => {

    try{

        const doctores = await Doctor.find();
        res.json(doctores)

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

//metodo para editar un doctor
//agrego todos los campos que agregue en la base de datos
exports.actualizarDoctor = async (req, res) => {
    try{
        const {nombredoctor, especialidad,estado} = req.body;
        let doctor = await Doctor.findById(req.params.id);

        if(!doctor){
            res.status(404).json({ msg:'No existe doctor'})
        }

        doctor.nombredoctor = nombredoctor;
        doctor.especialidad = especialidad;
        doctor.estado = estado;

        doctor = await Doctor.findOneAndUpdate({  _id: req.params.id }, doctor, { new: true} )
        res.json(doctor);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al editar doctor');
    }
}
    

//Metodo para actualizar el doctor
exports.obtenerDoctor = async (req, res) => {
    try{
        let doctor = await Doctor.findById(req.params.id);

        if(!doctor){
            res.status(404).json({ msg:'No existe doctor'})
        }

        res.json(doctor);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al actualizar doctor');
    }
}

//Para eliminar doctor
exports.eliminarDoctor = async (req, res) => {
    try{
        //busca el doctor
        let doctor = await Doctor.findById(req.params.id);
        //si no lo encuentra envia un mensaje de que no existe el doctor
        if(!doctor){
            res.status(404).json({ msg:'No existe doctor'})
        }

        await Doctor.findOneAndDelete({ _id: req.params.id })
        res.json({ msg: 'Doctor eliminado con éxito'});

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al eliminar doctor');
    }
}