const express = require ('express');
const router = express.Router();
const conexion = require('./database/db')

// router.get('/', (req, res) => {
//     res.render('index', (error, results) => {
//         if (error){
//             throw error;

//         }else{
//             res.send(results);
//         }
//     });
// })

router.get('/', (req, res)=>{
    conexion.query('SELECT * FROM user', (error, results) => {
        if(error){
            throw error;
        }else{
            res.render('index', { results: results })
        }
    })
})

//RUTA PARA CREAR REGISTROS
router.get('/create', (req, res)=> {
    res.render('create');
})

const crud = require('./controllers/crud');
router.post('/save', crud.save);
router.post('/update', crud.update)


//RATA PARA EDITAR

router.get('/edit/:id', (req, res) => {
    const id = req.params.id;
    conexion.query('SELECT * FROM user WHERE id= ?', [id], (error, results) => {
        if(error){
            throw error;
        }else{
            res.render('edit', { user: results[0] })
        }
    });
});

//RUTA PARA ELIMINAR REGISTROS

router.get('/delete/:id', (req, res)=>{
    const id = req.params.id;
    conexion.query('DELETE FROM user WHERE id = ?', [id], (error, results)=>{
        if(error){
            throw error;
        }else{
            res.redirect('/')
        }
    })
})




module.exports = router;
