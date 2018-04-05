var g = function (greetedPerson) {
          console.log("Hello "+ greetedPerson + "!");
        }

function getGreeter ( greetee, greetFunction) {
  var toGreet = greetee;  
  console.log('I will greet '+ greetee + ' in a little while');
  return function () {  greetFunction(toGreet)};  // the closure}  

for (var i=2;i<process.argv.length;i++) {
  setTimeout( getGreeter( process.argv[i], g), i*1500);
}

console.log('The Main Program Flow is Done!');
