/*
Il software deve chiedere all’utente il suo nome e il sesso con due prompt diversi.
Sulla pagina html deve apparire “Ciao <nome>”, il colore del nome deve essere azzurro o rosa a seconda del sesso inserito.
*/

//Variabili

var name = prompt("What's your name?")

var gender = prompt("What's your gender? (Male or Female)")

// Verificare se il campo name non è vuoto e gender è valido.
if (!(name === "") && ((gender === "Male") || (gender === "Female"))) {
  // La variabile element contiene l'oggetto element dell'ID specificato
  var element = document.getElementById('name');
  // Usare la proprietà innerHTML per impostare il contenuto di un oggetto(name)
  document.getElementById('name').innerHTML = name
  if (gender === "Male") {
    // Usare la proprietà className per  la classe blue-c
      element.className = "blue-c";
  } else {
    // Usare la proprietà className per  la classe blue-c
      element.className = "pink-c";
  }
}
else {
  alert("Error");
}
