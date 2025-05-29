

function greetings(name){
  console.log(`hello ${name}`)
}

function callback(callback){
  let name = "Nandkishore";
  callback(name);
}

callback(greetings);