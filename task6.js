// Refer to Task 6 in your Instructions to complete this task

// Refer to Task 5 in your Instructions to complete this task
import PromptSync from "prompt-sync";
const prompt = PromptSync();



while(true){
  console.log(`
     ------------------------------------------------------------------
    |              Ingrese una de las sigueintes opciones              |
    |1 Mostrar una lista de datos                                      |
    |2 Mostrar una matriz de datos                                     |
    |3 salir                                                           |
     ------------------------------------------------------------------
    '''
  `)
  let operacion=prompt()
  if(operacion === "1"){
    let lista = []
    console.clear()
    let numero = Number(prompt("Ingrese el numero de datos que desea generar: "))
    for(let i =1; i<= numero;i++){
      lista.push(i)
    }
    console.log('La lista de datos generados es ', lista)
  }else if (operacion === "2"){
    let matriz = []
    console.clear()
    let filas = Number(prompt("Ingrese las filas de la matriz: "))
    let columnas = Number(prompt("Ingrese las columans de la matriz: "))
    let contadorInterno = 1
    for(let i = 0; i< filas;i++){
      let columna = []
      for(let j = 0; j< columnas;j++){
        columna.push(contadorInterno)
        contadorInterno++
      }
      matriz.push(columna)
    }
    console.log('La matriz de datos generados es')
    for(let i = 0; i< matriz.length;i++){
      console.log(matriz[i])
    }
    
  }
  else if(operacion === "3"){
    console.log("Hasta una proxima ocacion")
    break
  }
  else{
    console.log("Ha seleccionado una opción incorrecta vuelva a intentarlo")
  }
}
