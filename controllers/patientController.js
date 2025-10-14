const Patient = require("../models/Patient");

//metodo para crear doctor
exports.CrearPaciente = async (req,res) => {

    try{
        let patient;

        //creamos paciente
        patient = new Patient(req.body);

        await patient.save();
        res.send(patient);

    }  catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error en la creacion de paciente');

    }
}

//metodo para obtener paciente
exports.obtenerPacientes = async (req, res) => {

    try{

        const pacientes = await Patient.find();
        res.json(pacientes)

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error en obtener paciente');
    }
}

//metodo para editar un paciente
//agrego todos los campos que agregue en la base de datos
exports.actualizarPaciente = async (req, res) => {
    try{
        const {
            nombrepaciente, 
            edad,
            especialidadpaciente,
            sexo,
            profesion,
            religion,
            escolaridad,
            telefono,
            duenotelefono,
            etnia,
            ambientecasa,
            piso,
            pared,
            techo,
            sanitario,
            agua,
            basura,
            dispocionexcretas,
            estadopaciente
        } = req.body;
        let patient = await Patient.findById(req.params.id);

        if(!patient){
            res.status(404).json({ msg:'No existe paciente'})
        }

        patient.nombrepaciente=nombrepaciente;
        patient.edad=edad;
        patient.especialidadpaciente=especialidadpaciente;
        patient.sexo=sexo;
        patient.profesion=profesion;
        patient.religion=religion;
        patient.escolaridad=escolaridad;
        patient.telefono=telefono;
        patient.duenotelefono=duenotelefono;
        patient.etnia=etnia;
        patient.ambientecasa=ambientecasa;
        patient.piso=piso;
        patient.pared=pared;
        patient.techo=techo;
        patient.sanitario=sanitario;
        patient.agua=agua;
        patient.basura=basura;
        patient.dispocionexcretas=dispocionexcretas;
        patient.estadopaciente=estadopaciente;

        patient = await Patient.findOneAndUpdate({  _id: req.params.id }, patient, { new: true} )
        res.json(patient);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error en editar paciente');
    }
}
    

//Metodo para actualizar el paciente
exports.obtenerPaciente = async (req, res) => {
    try{
        let patient = await Patient.findById(req.params.id);

        if(!patient){
            res.status(404).json({ msg:'No existe paciente'})
        }

        res.json(patient);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error en actualizar paciente');
    }
}

//Para eliminar patiente
exports.eliminarPaciente = async (req, res) => {
    try{
        //busca el patient
        let patient = await Patient.findById(req.params.id);
        //si no lo encuentra envia un mensaje de que no existe el patient
        if(!patient){
            res.status(404).json({ msg:'No existe paciente'})
        }

        await Patient.findOneAndDelete({ _id: req.params.id })
        res.json({ msg: 'Paciente eliminado con éxito'});

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error en eliminar paciente');
    }
}