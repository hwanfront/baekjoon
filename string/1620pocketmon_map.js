// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const input = [
    '26 5',
    'Bulbasaur',
    'Ivysaur',
    'Venusaur',
    'Charmander',
    'Charmeleon',
    'Charizard',
    'Squirtle',
    'Wartortle',
    'Blastoise',
    'Caterpie',
    'Metapod',
    'Butterfree',
    'Weedle',
    'Kakuna',
    'Beedrill',
    'Pidgey',
    'Pidgeotto',
    'Pidgeot',
    'Rattata',
    'Raticate',
    'Spearow',
    'Fearow',
    'Ekans',
    'Arbok',
    'Pikachu',
    'Raichu',
    '25',
    'Raichu',
    '3',
    'Pidgey',
    'Kakuna',
  ]
  
  const [N, M] = input[0].split(" ").map((e) => Number(e));
  const map = new Map();
  const maps = new Map();
  let res = "";
  
  for(let i = 0; i < N; i++) {
    map.set(input[i + 1], i + 1);
    maps.set(i + 1, input[i + 1]);
  }
  
  for(let i = 0; i < M; i++) {
    const num = i + 1 + N;
    const find = input[num]
   
    isNaN(Number(find)) ? res += map.get(find) + "\n" : res += maps.get(Number(find)) + "\n"
  }
  
  console.log(res.trim());
  