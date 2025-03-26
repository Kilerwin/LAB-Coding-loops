// Refer to Task 2 in your Instructions to complete this task

for (let i = 1; i <= 105; i++) {
  let mensaje = (i % 3 === 0 ? "Fizz" : "") 
  console.log(mensaje || i);
};