'use strict';

// console.log('Without Promise:')
// setTimeout(function(){
//     console.log('This line comes after.')
// }, 3000);

// console.log('This line comes first even it is placed at the end.');

console.log('What Promise can fix?')

const slowAndSteady = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('The first line.');
        resolve();
    }, 3000);
});
slowAndSteady
    .then(function(){
        console.log('The second line.');
    })
    .catch(function(err){
        console.log('error: ', err);
    });

