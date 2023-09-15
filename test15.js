// 1)
//обьясни своими словами, что значит callback функция
// callback функция- это функция которая передать в виде аргумента другой функции оно позваляет вызвоть другую функцию а также запустить функцию после запуска другой функции
// 2)
//выведи в консоли 'Привет я Alex и мне 19 лет' с помощью функций ниже и callback
// function alertInfo(name, age) {
//     console.log(`Привет, я ${name} и мне ${age}`);
// }

// function userInfo() {
//     let name = 'Alex';
//     let age = 19;
//   
// }

// userInfo(alertInfo);

// 3)
//какая из функций является функцией обратного вызова?
//  setTimeout(showMessage, timeout);
//             ----------- 

//  function showMessage() {
//     console.log('Сообшение');
//      startProgram();
//  }

//  function startProgram() {
//      console.log('Запуск');
//  }

// 4)
//передайте функции ниже функцию showMessage  в качестве параметра и вызовите ее
   


//  function startProgram() {
//      console.log('Запуск');
//  }

//  function showMessage() {
//     console.log('Сообшение');
//     
//  }


// startProgram(showMessage)


// 5)
//что такое Promise?
// Promise выполняет функцию но оно выполнит его потом ( тоесть обещание)
// 6)
//создайте Promise функцию?

// let myPromise = new Promise(function(resolve,reject))

// 7)
//обьясни своими словами, что такое res и rej?
// let count2 = new с(function(res, rej) {
//     let a = 4;
//     if (a > 3) {
//         res('Число подходит');
//     } else {
//         rej('Число неподходит');
//     }

//     count2.then (
//         function(value) {console.log(value);},
//         function(error) {console.log(error);}
//     );
// });

// resolve - это функция которая выполняет ответ который мы ему задаем

// reject - откланяет функцию promise


// // 8)
// //обьясни своими словами, что такое .then?
// let count1 = new Promise(function(res, rej) {
//     let a = 4;
//     if (a > 3) {
//         res('Число подходит');
//     } else {
//         rej('Число неподходит');
//     }

//     count1.then (
//         function(value) {console.log(value);},
//         function(error) {console.log(error);}
//     );
// });

// .then - принимает промис тоесть выполняется после промисы и принимает две функции которые принимает и откланяет промис

// // 9)
// //обьясни своими словами, что такое .then?
// let count = new Promise(function(res, rej) {
//     let a = 4;
//     if (a > 3) {
//         res('Число подходит');
//     } else {
//         rej('Число неподходит');
//     }

//     count.then (
//         function(value) {console.log(value);},
//         function(error) {console.log(error);}
//     );
// });

// 10)
//что значит асинхронный?
// это функция которая не выполняется однавременно с другими функциями(тоесть параллельно)
// 11)
//что делает async?
// делает так чтобы функция возвращала обещание
// 12)
//что делает await?
// делает так чтобы функция ждала обещание






