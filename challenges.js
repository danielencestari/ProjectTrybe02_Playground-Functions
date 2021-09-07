// Desafio 1
function compareTrue(a, b) {
  return a === true && b === true;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

// Desafio 4
function concatName(array) {
  return array[array.length - 1] + ', ' + array[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3 + ties);
}

// Desafio 6
function highestCount(arrayNumbers) {
  let maiorNumero = Number.NEGATIVE_INFINITY;
  for(let i = 0; i < arrayNumbers.length; i += 1) {
    if (maiorNumero < arrayNumbers[i]) {
      maiorNumero = arrayNumbers[i];
    }
  }
  let contador = 0;
  for(let i = 0; i < arrayNumbers.length; i += 1) {
    if (maiorNumero === arrayNumbers[i]) {
      contador += 1;
    }
  }
  return contador;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distancia1 = Math.abs(cat1 - mouse);
  let distancia2 = Math.abs(cat2 - mouse);
  if (distancia1 > distancia2) {
    return 'cat2';
  }
  else if (distancia1 < distancia2) {
    return 'cat1';
  }
  else {
    return 'os gatos trombam e o rato foge';
  }
}

/* // Desafio 8
function fizzBuzz(numbersArray) {
  let resposta = "'[";
  for (let index = 0; index < numbersArray.length; index += 1) {
    if ((numbersArray[index] % 3) === 0 && (numbersArray[index] % 5) != 0) {
      resposta = resposta + '"fizz", ';
    }
    else if ((numbersArray[index] % 5) === 0 && (numbersArray[index] % 3) != 0) {
      resposta = resposta + '"buzz", ';
    }
    else if ((numbersArray[index] % 5) === 0 && (numbersArray[index] % 3) === 0) {
      resposta = resposta + '"fizzBuzz", ';
    }
    else {
      resposta = resposta + '"bug!", ';
    }
  }
  resposta = resposta + "]'";
  resposta = resposta.replace(", ]'", "]'");
  return resposta;
} */
function fizzBuzz(numbersArray) {
  let resposta = [];
  for (let i = 0; i < numbersArray.length; i += 1) {
    if ((numbersArray[i] % 3) === 0 && (numbersArray[i] % 5) !== 0) {
      resposta.push('fizz');
    }
    else if ((numbersArray[i] % 5) === 0 && (numbersArray[i] % 3) !== 0) {
      resposta.push('buzz');
    }
    else if ((numbersArray[i] % 5) === 0 && (numbersArray[i] % 3) === 0) {
      resposta.push('fizzBuzz');
    }
    else {
      resposta.push('bug!');
    }
  }
  return resposta;
}

// Desafio 9
function encode(text) {
  let encodedText = '';
  for (let i = 0; i < text.length; i += 1) {
    switch (text[i]) {
      case 'a': encodedText += '1';
      break;
      case 'e': encodedText += '2';
      break;
      case 'i': encodedText += '3';
      break;
      case 'o': encodedText += '4';
      break;
      case 'u': encodedText += '5';
      break;
      default: encodedText += text[i];
      break;
    }
  }
  return encodedText;
}
function decode(text) {
  let dencodedText = '';
  for (let i = 0; i < text.length; i += 1) {
    switch(text[i]) {
      case '1': dencodedText += 'a';
      break;
      case '2': dencodedText += 'e';
      break;
      case '3': dencodedText += 'i';
      break;
      case '4': dencodedText += 'o';
      break;
      case '5': dencodedText += 'u';
      break;
      default: dencodedText += text[i];
      break;
    }
  }
  return dencodedText;
}
// Desafio 10
function techList(techDani) {
  let tech = {
    tecnologias:'',
    name: '',
  };
}
console.log(techList())

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate(bebidas) {
  let frase = "1 cachaça, 5 cervejas e 1 copo de vinho";
  let valores = []
  for (index = 0; index < frase.length; index +=1) {
    let valor = parseInt(frase[index])
    console.log(valor)
    if (typeof valor != NaN) 
      valores.push(valor)
  }
  var total = valores.reduce((total, numero) => total + numero, 0);
  console.log(total)
  return total;

}
let agua = hydrate("1 cachaça, 5 cervejas e 1 copo de vinho")
console.log(hydrate('Você deve beber '+ agua  + 'copos de água'))


String recebida:
  "1 cachaça, 5 cervejas e 1 copo de vinho"
String retornada:
  "7 copos de água"
String recebida:
  "1 cachaça, 5 cervejas e 1 copo de vinho"
String retornada:
  "7 copos de água"

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
