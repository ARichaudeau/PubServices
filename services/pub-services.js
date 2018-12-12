var pubs = require('../mocks/pubs.json');

function listePubs() {
    return pubs;
}

function listePubsOuverts(){
  return;
}

module.exports = {
  listePubs :listePubs
}
