const axios = require('axios');


axios.get('https://config.1logic.in/instance/config/MN-STAGING').then((res)=>{console.log(res.data)}).catch(err=>{console.log(err)})