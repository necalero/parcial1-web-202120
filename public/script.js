const enterButton = document.getElementById('enter');
const input = document.getElementById('inputText');
const tableSection = document.getElementById('table-section');
const table = document.getElementById('table');
const tbody = document.getElementById('body-table');
const message = document.getElementById('message');
const players_url = "https://gist.githubusercontent.com/jhonatan89/bc554ec3ded15407609714e8b7b8f1c8/raw/5ab1e3e5b45e99aabcbbdd30f55d2ae5eafb9cbe/nba-players";
var desiredHeight = 0;

enterButton.addEventListener('click', (event) => {
  //Implementar lógica del button submit
  desiredHeight = document.getElementById("inputText").value;
  getresults(123);
  getAllPlayers();
  event.preventDefault();
  
});

/**
 * Llamado al backend con queryParam
 * @param {*} heightRef
 */
async function getresults(heightRef) {
  const resp = await fetch(`api?input=${heightRef}`);
  const data = await resp.json();
  console.log('data from back', data);
  //printValues(data);
}

 async function getAllPlayers() {
  const resp = await fetch(players_url);
  const data = await resp.json();
  console.log('Data from git', data);
  players = data.values;
  console.log(players[0].h_in);
  console.log(desiredHeight);
  console.log(getPairOfPlayers(desiredHeight));
  console.log(players[7].h_in);
  console.log(players[84].h_in);
  //printValues(data);
}


function getPairOfPlayers(height)
{
  playersWithHeight = {};
  for (let i = 0; i < players.length; i++) {
    let player1h = players[i].h_in;
    
    for (let j = i; j < players.length; j++) {

      let player2h = players[j].h_in;
      var sumaEstaturas = +player1h + +player2h; 
      if (sumaEstaturas==height) {
        playersWithHeight[i]=j; 
      }
      sumaEstaturas = 0;
    
    }
    
  }
  return playersWithHeight;
}

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}


