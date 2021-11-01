const express = require('express')
const router = express()
const path = require('path')

router.get('/',(req,res)=>{  
    console.log('res: ', res);
    console.log('req: ', req);
})

module.exports = router;