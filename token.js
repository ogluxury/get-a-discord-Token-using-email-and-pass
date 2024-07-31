const axios = require('axios');

async function gettoken() {
let email = 'discord email'
let pass = 'discord pass'

let payload = {
  login: email,
  password: pass
}

let response = await axios.post('https://discord.com/api/v9/auth/login', payload)
console.log(response.data.token)
console.log('made by ogluxury')
};

gettoken()
