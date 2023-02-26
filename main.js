let arr = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];
let i;
console.log(`Масив = [${arr.join(', ')}]`);

let sum = 0;
for (i = 0; i < arr.length; i++) {
    if (arr[i] > 0){
        sum += arr[i];
    }
}
let pos = arr.filter(elem =>(elem>0));
console.log(`1. Сума позитивних чисел = ${sum}, їх кількість = ${pos.length}`);

let min = Math.min(...arr)
let std = arr.indexOf(min)
console.log(`2. Мінімальний елемент масиву = ${min}, його порядковий номер = ${std}`)

let max = Math.max(...arr)
let std1 = arr.indexOf(max)
console.log(`3. Максимальний елемент масиву = ${max}, його порядковий номер = ${std1}`);

let negative = arr.filter(elem =>(elem <0));
console.log(`4. Кількість негативних елементів = ${negative.length}`);

let qua_odd = arr.filter(elem =>(elem>0) && (elem % 2 != 0));
console.log(`5. Кількість непарних позитивних елементів = ${qua_odd.length}`);

let qua_even = arr.filter(elem =>(elem>0) && (elem % 2 == 0));
console.log(`6. Кількість парних позитивних елементів = ${qua_even.length}`);

let sum1 = 0;
for (i = 0; i < arr.length; i++) {
    if (arr[i] > 0 && arr[i] % 2 == 0){
        sum1 += arr[i];
    }
}
console.log(`7. Сума парних позитивних елементів = ${sum1}`);

let sum2 = 0;
for (i = 0; i < arr.length; i++) {
    if (arr[i] > 0 && arr[i] % 2 != 0){
        sum2 += arr[i];
    }
}
console.log(`8. Сума непарних позитивних елементів = ${sum2}`);

let prod = 1;
for (i = 0; i < arr.length; i++) {
    if (arr[i] > 0){
        prod *= arr[i];
    }
}
console.log(`9. Добуток позитивних елементів = ${prod}`);

let max1 = 0;
let m = arr[0];
for (i = 0; i < arr.length; i++) {
    if (arr[i] > m) {
        m = arr[i];
        arr[max1] = 0;
        max1 = i;
    } else {
        arr[i] = 0;
    }
}
console.log(`10. Найбільший серед елементів масиву, інші - нулі [${arr.join(', ')}]`);