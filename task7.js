// Refer to Task 7 in your Instructions to complete this task

let buzzWords = [
    "Fizz",
    "Buzz",
    "Woof",
    "Bark",
    "Awoo",
    "Bang"
  ];

let lista = [[1,2,3],[4,5,6],[7,8,9],[10,11,12],[13,14,15],[16,17,18],[19,20,21]] 
let recorido = 0
  
  for (let i = 0; i < lista.length; i++) {
    for(let j = 0; j < lista[i].length; j++)
    {
      let control = true
      if(lista[i][j] !== 1){
        for(let k = 2; k <= parseInt((lista[i][j]/2)+1); k++){
          if(lista[i][j] % k ==0){
            control = false
            break;
          }
        }
        if(control){
          lista[i][j] = buzzWords[recorido]
          recorido++
          if(recorido>=buzzWords.length){
            recorido = 0
          }
        }
      }
    }
  };

  console.log(lista)