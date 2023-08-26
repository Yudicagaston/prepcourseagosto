/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   var arreglo = Object.entries(objeto)
   return arreglo
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   var obj = {};
   for (var i = 0; i < string.length; i++) {
      if (!obj[string[i]]) {
         obj[string[i]] = 0
      }
      obj[string[i]]++
   }
   var ordenarClaves = Object.keys(obj).sort()
   var objOrdenado = {}
   for (var i = 0; i < ordenarClaves.length; i++) {
      objOrdenado[ordenarClaves[i]] = obj[ordenarClaves[i]]
   }
   return objOrdenado
}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   var string1 = ''
   var string2 = ''
   for (var i = 0; i < string.length; i++)
      if (string[i] === string[i].toUpperCase()) {
         string1 = string1 + string[i]
      }
      else {
         string2 = string2 + string[i]

      } return string1 + string2

}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   var NuevoFrase = []
   frase = frase.split(' ')
   for (var i = 0; i < frase.length; i++) {
      var palabraInvertida = ''
      for (var j = frase[i].length - 1; j >= 0; j--) {
         palabraInvertida += frase[i][j]
      }
      NuevoFrase.push(palabraInvertida)
   }
   return NuevoFrase.join(' ')
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   var num = numero.toString()
   var numInvertido = ''
   for (var i = num.length - 1; i >= 0; i--) {
      numInvertido = numInvertido + num[i]
   }
   if (num === numInvertido) return "Es capicua"
   else return "No es capicua"
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   nuevoString = []
   string = string.split('')
   for (var i = 0; i < string.length; i++) {
      if (string[i] !== 'a' && string[i] !== 'b' && string[i] !== 'c')
         nuevoString.push(string[i])
   }
   return nuevoString.join('')
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   var nuevoArrayOfStrings = arrayOfStrings.sort(function (a, b) {
      return a.length - b.length
   })
   return nuevoArrayOfStrings

}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   var nuevoArreglo = []
   for (var i = 0; i < array1.length; i++) {
      for (var j = 0; j < array2.length; i++) {
         if (array1[i] === array2[j]) { nuevoArreglo.push(array1[i]) }
      }
   } return nuevoArreglo
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
