const express = require('express')
const table_controllers = require('../controllers/add_tables');

const router = express();


router.post('/', table_controllers.AddValues);
router.get('/', table_controllers.getAllTables);
router.put('/:id', table_controllers.AddUserInput);



module.exports = router ;