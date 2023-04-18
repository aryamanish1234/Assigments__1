const express = require('express');
const  url = require('../controllers/urlStatus')


const router = express();

router.post('/', url.AddUrlStatus);
router.get('/', url.getAllWeb);




module.exports = router ;