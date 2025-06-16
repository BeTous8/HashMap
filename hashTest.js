import HashMap from './hashMap.js';

const map = new HashMap();

map.set('apple', 'red');
map.set('banana', 'yellow');
console.log(map.length());    // Should be 2

map.clear();
console.log(map.length());    // Should be 0
console.log(map.get('apple')); // Should be null


