// Crea un archivo JS que contenga las siguientes líneas

// - Una variable que contenga la lista de la compra (mínimo 5 elementos)

const listaCompra = ["Leche", "Sal ", "Chololate", "Azucar", "Harina"];

// - Modifica la lista de la compra y añádele "Aceite de Girasol"

listaCompra.push("Aceite de Girasil");
console.log(listaCompra);

// - Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"
listaCompra.pop(5);
console.log(listaCompra);

// - Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)

const peliculaFavorita = [
  { titulo: "Avengers: EndGame", director: "Joe Russo", fecha: "2019" },
  { titulo: "La Máscara", director: "Chuck Russell", fecha: "1994" },
  { titulo: "Operación Cacería", director: "John Woo", fecha: "1993" },
];

// - Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)
const nuevaLista = peliculaFavorita.filter((obj) => obj.fecha > "2010");
console.log(nuevaLista);

// - Una nueva lista que contenga los directores de la lista de películas original (utilizando map)
const directores = peliculaFavorita.map(
  (obj, indice) => `${indice + 1}- ${obj.director}`
);
console.log(directores);

// - Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)
const titulos = peliculaFavorita.map(
  (obj, indice) => `${indice + 1}- ${obj.titulo}`
);
console.log(titulos);

// - Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)
const listaConcat = directores.concat(titulos);
console.log(listaConcat);

// - Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)

const listaFactorProgapación = [...directores, ...titulos];
console.log(listaFactorProgapación);


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