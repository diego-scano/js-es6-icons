// MILESTONE 1 -------------------------------------------------------------------------------------------------------------------------------
// Definire un array di oggetti; ogni oggetto rappresenta un'icona, che è caratterizzata da: nome, prefisso, tipo e famiglia.
// Utilizzando la funzione forEach e il template literal, visualizzare in pagina tutte le icone con il proprio nome.

const iconsContainer = document.getElementById('icons-container');

const icons = [
  {'name': 'cat', 'prefix': 'fa-', 'type': 'animal', 'family': 'fas'},
  {'name': 'crow', 'prefix': 'fa-', 'type': 'animal', 'family': 'fas'},
  {'name': 'dog', 'prefix': 'fa-', 'type': 'animal', 'family': 'fas'},
  {'name': 'dove', 'prefix': 'fa-', 'type': 'animal', 'family': 'fas'},
  {'name': 'dragon', 'prefix': 'fa-', 'type': 'animal', 'family': 'fas'},
  {'name': 'horse', 'prefix': 'fa-', 'type': 'animal', 'family': 'fas'},
  {'name': 'hippo', 'prefix': 'fa-', 'type': 'animal', 'family': 'fas'},
  {'name': 'fish', 'prefix': 'fa-', 'type': 'animal', 'family': 'fas'},
  {'name': 'carrot', 'prefix': 'fa-', 'type': 'vegetables', 'family': 'fas'},
  {'name': 'apple-alt', 'prefix': 'fa-', 'type': 'vegetables', 'family': 'fas'},
  {'name': 'lemon', 'prefix': 'fa-', 'type': 'vegetables', 'family': 'fas'},
  {'name': 'pepper-hot', 'prefix': 'fa-', 'type': 'vegetables', 'family': 'fas'},
  {'name': 'user-astronaut', 'prefix': 'fa-', 'type': 'user', 'family': 'fas'},
  {'name': 'user-graduate', 'prefix': 'fa-', 'type': 'user', 'family': 'fas'},
  {'name': 'user-ninja', 'prefix': 'fa-', 'type': 'user', 'family': 'fas'},
  {'name': 'user-secret', 'prefix': 'fa-', 'type': 'user', 'family': 'fas'},
];

/*
icons.forEach((element) => {
  const {name, prefix, family} = element;
  iconsContainer.innerHTML += `
    <div>
      <i class="${family} ${prefix}${name}"></i>
      ${name}
    </div>
  `
})
*/


// MILESTONE 2 -------------------------------------------------------------------------------------------------------------------------------
// Definire un array di colori e associare ad ogni tipo di icona un colore.
// Visualizzare le icone di colore diverso in base al tipo.

const colors = ['red', 'green', 'blue'];

const iconsWithColors = icons.filter((element) => {
  switch(element.type) {
    case 'animal':
      return element.color = colors[0];
      break;
    case 'vegetables':
      return element.color = colors[1];
      break;
    case 'user':
      return element.color = colors[2];
      break;
  }
});

/*
iconsWithColors.forEach((element) => {
  const {name, prefix, type, family, color} = element;

  iconsContainer.innerHTML += `
    <div>
      <i class="${family} ${prefix}${name}" style="color: ${color}"></i>
      ${name}
    </div>
  `
});
*/



// MILESTONE 3 -------------------------------------------------------------------------------------------------------------------------------
// Aggiungere una select per filtrare le icone in base al tipo.
// Popolare le options della select dinamicamente e, ogni volta che cambia il valore selezionato, visualizzare le icone corrispondenti.

const typeSelect = document.getElementsByClassName('type-select')[0];

const selector = $('.type-select');

const types = [];

iconsWithColors.forEach((element) => {
  if(!types.includes(element.type)) {
    types.push(element.type);
  }
})

types.forEach((element) => {
  typeSelect.innerHTML += `
    <option value="${element}">${element}</option>
  `
})

selector.change(function() {
  let value = $(this).val();
  
})
