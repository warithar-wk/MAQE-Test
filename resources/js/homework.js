const axios = require('axios')

axios.get('https://maqe.github.io/json/authors.json',(data)=>{
    console.log('data: ', data);
})