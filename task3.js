// Refer to Task 3 in your Instructions to complete this task

for (let i = 1; i <= 105; i++) {
  let mensaje = (i % 3 === 0 ? "Fizz" : "") + (i % 5 === 0 ? "Buzz" : "") 
  console.log(mensaje || i);
};