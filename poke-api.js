var request = require('request')

module.exports = {}

module.exports.getPokemon = function(name, callback) {
  request("http://pokeapi.co/api/v1/pokemon/"+name, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      console.log(body) // Print the google web page.
    }
  })
}