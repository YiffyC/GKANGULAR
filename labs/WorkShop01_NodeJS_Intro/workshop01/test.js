// callback functions used with timeout
var g = function (greetedPerson) {
          console.log("Hello "+ greetedPerson + "!");
        }

var r = function ( greetFunction, greetee) {
  greetFunction(greetee);
}  

for (var i=2;i<process.argv.length;i++) {
  //setTimeout( r(g, process.argv[i]), i*1500);
    setTimeout( r, i*1500 ,g, process.argv[i]);
}

console.log('The Main Program Flow is Done!');
