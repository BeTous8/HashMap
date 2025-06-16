import HashMap from './hashMap.js';

const map = new HashMap();

console.log("Hash of 'apple':", map.hash('apple'));
console.log("Hash of 'banana':", map.hash('banana')); 
console.log("Hash of 'apple' again:", map.hash('apple')); // Should be same as first

map.set('apple', 'red');

console.log("Array includs:", map.buckets);

map.set('apple', 'yellow');
console.log("Array includs:", map.buckets);

map.set('apple', 'green');
console.log("Array includs:", map.buckets);
