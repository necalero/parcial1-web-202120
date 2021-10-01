const { response, request } = require('express');

const getPairsOfPlayers = async (req = request, resp = response, next) => {
  //Implementar logica aquí
  

  return resp.json({ message: 'To be implemented' });
};





module.exports = { getPairsOfPlayers };
