const conexion = require('../database/db');


exports.save = (req, res) => {
    const user = req.body.user;
    const rol = req.body.rol;
    conexion.query('INSERT INTO user SET ?', {user:user, rol:rol}, (error, results)=>{
        if (error){
            console.log(error);
        }else{
            res.redirect('/')
        }
    })
}


exports.update = (req, res)=> {
    const id = req.body.id;
    const user = req.body.user;
    const rol = req.body.rol;
    conexion.query('UPDATE user SET ? WHERE id = ?', [{user:user, rol:rol},id], (error, results)=>{
        if (error) {
            console.log(error);
        }else{
            res.redirect('/')
        }
    })
}