// Refer to Task 5 in your Instructions to complete this task
import PromptSync from "prompt-sync";
const prompt = PromptSync();

while(true){
  console.log(`
     ------------------------------------------------------------------
    |              Ingrese una de las sigueintes opciones              |
    |1 Generar un numero de lineas                                     |
    |2 Mostrar una linea en especifico                                 |
    |3 salir                                                           |
     ------------------------------------------------------------------
    '''
  `)
  let operacion=prompt()
  if(operacion === "1"){
    console.clear()
    let numero = Number(prompt("Ingrese el numero de lineas que desea ver: "))
    for(let i =1; i<= numero;i++){
      console.log(i)
    }
  }else if (operacion === "2"){
    console.clear()
    let numero = Number(prompt("Ingrese la linea que desea ver: "))
    for(let i =1; i<= numero;i++){
      if(numero == i){
        console.log(i)
      }
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
