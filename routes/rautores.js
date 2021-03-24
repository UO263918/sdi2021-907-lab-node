module.exports = function(app, swig) {
    app.get("/autores", function(req, res) {

        let autores = [ {
            "nombre" : "Maluma",
            "grupo" : "Maluma",
            "rol" : "Cantante"
        }, {
            "nombre" : "Lunay",
            "grupo" : "Lunay",
            "rol" : "Cantante"
        }, {
            "nombre" : "Feid",
            "grupo" : "Feid",
            "rol" : "Cantante"
        }];

        let respuesta = swig.renderFile('views/autores.html', {
            vendedor : 'Tienda de canciones',
            autores : autores
        });

        res.send(respuesta);

    });

    app.get('/autores/agregar', function (req, res) {
        let respuesta = swig.renderFile('views/autores-agregar.html', {

        });
        res.send(respuesta);
    });

    app.post("/autor", function(req,res){
        let respuesta ="";

        if(typeof(req.body.nombre) != "undefined"){
            respuesta += 'Nombre: ' + req.body.nombre + '<br>';
        }
        if(typeof(req.body.nombre) == "undefined"){
            respuesta += 'Nombre no enviado en la petición' + '<br>';
        }
        if(typeof(req.body.grupo) != "undefined"){
            respuesta += 'Grupo: ' + req.body.grupo + '<br>';
        }
        if(typeof(req.body.grupo) == "undefined"){
            respuesta += 'Grupo no enviado en la petición' + '<br>';
        }
        if(typeof(req.body.rol) != "undefined"){
            respuesta += 'Rol: ' + req.body.rol + '<br>';
        }
        if(typeof(req.body.rol) == "undefined"){
            respuesta += 'Rol no enviado en la petición' + '<br>';
        }
        res.send(respuesta);
    });

    app.get('/autores/*', function (req, res) {
        res.redirect('/autores');
    })
};