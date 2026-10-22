console.log("--- БЛОК 1: ЦИКЛЫ ---");

console.log("Числа от 1 до 20:");
for (let i = 1; i <= 20; i++) {
    console.log(i);
}

console.log("Числа от 20 до 1:");
for (let i = 20; i >= 1; i--) {
    console.log(i);
}

console.log("Чётные числа от 1 до 50:");
for (let i = 2; i <= 50; i += 2) {
    console.log(i);
}

let sum100 = 0;
for (let i = 1; i <= 100; i++) {
    sum100 += i;
}
console.log(`Сумма чисел от 1 до 100: ${sum100}`);

console.log("Квадраты чисел от 1 до 10:");
for (let i = 1; i <= 10; i++) {
    console.log(`Квадрат ${i} - ${i * i}`);
}

console.log("Таблица умножения на 5:");
for (let i = 1; i <= 10; i++) {
    console.log(`5 * ${i} = ${5 * i}`);
}

let sumEven50 = 0;
for (let i = 2; i <= 50; i += 2) {
    sumEven50 += i;
}
console.log(`Сумма чётных чисел от 1 до 50: ${sumEven50}`);

console.log("Числа от 0 до 100 с шагом 5:");
for (let i = 0; i <= 100; i += 5) {
    console.log(i);
}

let countDiv7 = 0;
for (let i = 1; i <= 100; i++) {
    if (i % 7 === 0) {
        countDiv7++;
    }
}
console.log(`Количество чисел от 1 до 100, делящихся на 7: ${countDiv7}`);


console.log("--- БЛОК 2: ОБЪЕКТЫ ---");

let user = {
    name: "Алексей",
    age: 19,
    city: "Бишкек"
};
console.log("Исходный объект user:", user);

user.age = 20;

user.phone = "+996-555-55-55-55";

delete user.city;

let hasEmail = "email" in user;
console.log(`Есть ли свойство email в объекте? ${hasEmail}`);

console.log("Ключи объекта:");
for (let key in user) {
    console.log(key);
}

console.log("Значения объекта:");
for (let key in user) {
    console.log(user[key]);
}

let propertiesCount = 0;
for (let key in user) {
    propertiesCount++;
}
console.log(`Количество свойств объекта: ${propertiesCount}`);


console.log("--- БЛОК 3: МАССИВЫ ---");

let arr = [12, -5, 7, 10, -3]; 
console.log("Элементы массива:");
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

let arraySum = 0;
for (let i = 0; i < arr.length; i++) {
    arraySum += arr[i];
}
console.log(`Сумма всех элементов: ${arraySum}`);

let max = arr;
for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
    }
}
console.log(`Максимальный элемент: ${max}`);

let min = arr;
for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
        min = arr[i];
    }
}
console.log(`Минимальный элемент: ${min}`);

let arrayLength = 0;
for (let i = 0; i < arr.length; i++) {
    arrayLength++;
}
console.log(`Количество элементов массива: ${arrayLength}`);

let evenSum = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        evenSum += arr[i];
    }
}
console.log(`Сумма чётных элементов: ${evenSum}`);

let negativeCount = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
        negativeCount++;
    }
}
console.log(`Количество отрицательных чисел: ${negativeCount}`);

let product = 1;
for (let i = 0; i < arr.length; i++) {
    product *= arr[i];
}
console.log(`Произведение всех элементов: ${product}`);

let maxIndex = 0;
for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[maxIndex]) {
        maxIndex = i;
    }
}
console.log(`Индекс максимального элемента: ${maxIndex}`);

let minIndex = 0;
for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[minIndex]) {
        minIndex = i;
    }
}
console.log(`Индекс минимального элемента: ${minIndex}`);

let hasTen = false;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 10) {
        hasTen = true;
        break; 
    }
}
console.log(`Есть ли в массиве число 10? ${hasTen}`);

let countSeven = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 7) {
        countSeven++;
    }
}
console.log(`Количество семерок в массиве: ${countSeven}`);

let lastPositive = null;
for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] > 0) {
        lastPositive = arr[i];
        break; 
    }
}
console.log(`Последнее положительное число: ${lastPositive}`);

let average = arraySum / arr.length;
console.log(`Среднее арифметическое элементов: ${average}`);