//данные
const numbers = [1, 2, 3, 4, 5];
const names = ["Dylan", "Daniel", "Maria"];
const products = [
  { name: "Laptop", price: 1000 },
  { name: "Mouse", price: 50 },
  { name: "Keyboard", price: 80 },
];
const employees = [
  { name: "Alice", salary: 50000, experience: 3 },
  { name: "Bob", salary: 60000, experience: 5 },
  { name: "Charlie", salary: 45000, experience: 2 },
];

//работа с данными выше

const newNumbers = numbers.map((number) => number + 10);

const nameInfo = names.map((nameEl) => {
  return {
    name: nameEl,
    length: nameEl.length,
  };
});

const productsWithFinalPrice = products.map((product) => {
  const productName = product.name,
    productPrice = product.price;
  return {
    name: productName,
    price: productPrice,
    finalPrice: productPrice - productPrice * 0.15,
  };
});

const employeesWithTotal = employees.map((employee) => {
  const employeeName = employee.name,
    employeeSalary = employee.salary,
    employeeExp = employee.experience,
    bonus = employeeSalary * 0.05 * employeeExp;
  return {
    name: employeeName,
    salary: employeeSalary,
    experience: employeeExp,
    totalSalary: employeeSalary + bonus,
  };
});

//вывод в консоль (можно в терминале прописать node map-practic.js чтобы вызвать через ноду)

console.log(newNumbers);
console.log(nameInfo);
console.log(productsWithFinalPrice);
console.log(employeesWithTotal);
