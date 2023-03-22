// let str1 = 'My name is:'  
// let name = 'Dylan';

// let str2 = `${str1}  ${name}`;
// console.log(str2);


// // Part #2: Destructuring objects


// let information = { firstName: 'Dylan', lastName: 'Israel'};

// let { firstName, lastName } = information;

// console.log(firstName);

// Part #3: Destructuring objects

// let [firstName] = ['Dylan', 'Israel'];
// console.log(firstName)

// // Part #4: Object Literal

// let firstName = 'Dylan';  
// let information = { firstName };
// console.log(typeof(information));

//Part #5: Vòng lặp for… of

// let str = 'hello';
// for(let c of str){
//     console.log(c);
// }

// for(let c = 0; c < str.length; c++){
//     console.log(str[c]);
// }

// // Part #6: Spread syntax
// // Spread syntax dùng để gộp 2 mảng hoặc có thể dùng để làm tham số của function.
// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// let arr3 = [...arr1, ...arr2];
// console.log(arr3);

// // Part #7: Arrow function
// // Đây là cách viết function một cách ngắn gọn.
// const square = num => num * num;
// console.log(square(2)); // 4

// Part #7: includes()
// Đây là cách để kiếm tra xem 1 chuỗi có thuộc chuỗi còn lại hay không.
// let str = 'Hello World';

// console.log(str.includes('Hello'));

//Part #8: Class

// class Car {
//     constructor(wheels, doors) {
//        this.wheels = wheels;
//        this.doors = doors;
//     }
//     describeMe() {
//         console.log(this);
//         console.log(`Doors: ${this.doors} and Wheels: ${this.wheels}`);
//     }}
  
//     const car1 = new Car(4, 2);  
//     console.log( car1.describeMe()); // Doors: 2 and Wheels: 4

//Part #9: Promise, async và await
// Đây là cách xử lý bất đồng bộ trong ES6.

function takeLongTimeAsync() {
    return new Promise(resolve => {
        setTimeout(() => resolve("long_time_value"), 1000);
    });
}

async function test() {
    const v = await takeLongTimeAsync();
    console.log(v);
}

test();