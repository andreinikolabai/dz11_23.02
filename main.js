let arr = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
let sum = 0;
let i;

for (i = 0; i < arr.length; i++) {
    if (arr[i] > 0){
        sum += arr[i];
    }
}
console.log(`Сума позитивних чисел = ${sum}`);

let min = Math.min(...arr)
let position = arr.indexOf(min) + 1

console.log(`Мінімальний елемент масиву = ${min}, його порядковий номер = ${position}`)

let max = Math.max(...arr)
let position1 = arr.indexOf(max) + 1

console.log(`Максимальний елемент масиву = ${max}, його порядковий номер = ${position1}`);

console.log(`Кількість негативних елементів = `);
