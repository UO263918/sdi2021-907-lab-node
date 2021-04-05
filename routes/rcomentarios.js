module.exports = function (app, swig, gestorBD) {
    app.post("/comentarios/:cancion_id", function (req,res) {
        let id = req.params.cancion_id;
        let comentario = {
            autor: req.session.usuario,
            textoDelComentario: req.body.textoDelComentario,
            cancion_id: gestorBD.mongo.ObjectID(id),
        }

        gestorBD.añadirComentario(comentario, function (id) {
            if (id == null){
                res.send("Error al añadir comentario en la canción");
            }
            else{
                res.send("Añadido el comentario con id:" + id);
            }
        })
    })
}; 