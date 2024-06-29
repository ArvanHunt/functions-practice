// function sum(x,y) {
//     console.log(x+y);
// }

// sum(3,2);
// sum(2,6);
// sum(4,8)


// function sum(x, y) {
//     s = x + y;
//     return s;
// }

// let val = sum(2 , 4);
// console.log(val);

// // functions params are the local variables of function .....function's block scope

// Arrow functions

//sum function
// function sum(a, b) {
//     s = a + b;
//     return s;
// }

// const arrowSum = (a , b) => {
//     console.log(a+b);
// };

// //multiplication
// function mul(a , b) {
//     return a * b;
// }

// const arrowMul =  (a , b) => {
//     console.log(a * b);
// }

// // Finding how much vowels in the string
// function countVowels(str) {
//     let count = 0;
//     for(let i=0; i<=str.length; i++) {
//         if (i === "a" || i === "e" || i === "i" || i === "o" || i === "u") {
//             count=i++;
//         }
//     }console.log(count);
// }

//                                                              **** F O R E A C H **** 

                                                //It is a function to execute for each element in the array

    imp: forEach is also called as HIGHER ORDER FUNCTION / HIGHER ORDER METHOD 
            function is using as parameter or return in another function ---- this is why = HIGH ORDER FUNCTION

//     array.forEach(callBackFunction)

//         callBackFunction = a function passed as an argument to another function

//             function abc() {
//                 console.log("hello!");
//             };

//             function myFunction(abc) {          //-------> here abc is the function inside another function as parameter  ---> this is called callBackFunction
//                 return abc;
//             }

let arr = [1 ,2 , 3 , 4 ,5];

arr.forEach(function row(val) {         
    console.log(val);
})

arr.forEach((val) => {          //arrow function
    console.log(val);
})

                imp:    let arr = ["bangaluru" , "pune" , "kerala"];
                
                            arr.forEach((val , idx , arr) => {
                                console.log(val.upperCase() , idx , arr);
                            });

//square number of a array

one type 

let arr = [1 , 2 , 3];
arr.forEach((val) => {
    console.log(val * val);  //console.log(val**2);
})

another type 

let arr = [2 , 3 , 4];

let calcSqur = (num) => {
    console.log(num * num);
}

arr.forEach(calcSqur);

                                    **** M A P ****

    * creates a new array with result of some operation. 
    * The value its callback returns are used to form a new array

let num = [2 , 3 , 4];

num.map((val) => {
    console.log(val); // ----> it gives 2
                                        3
                                        4
})


let newArr = num.map((val) => {
    retuen(val);  
})

console.log(newArr); // ----> it gives [2 , 3 , 4]

                    ***** DIFF b/w .forEach() AND .map() ***** 

                    .forEach is used for normal calculation

                    .map is used for craetes a new array by using values

    ---------------------------------------------------**** F I L T E R   M E T H O D ****

                * creates new array of elements that give TRUE for a condition   
                        ex. all even numbers 
                        
        let newArr = arr.filter((val) => {
            return val % 2 === 0;           //some condition              
        });

        ex:
            let arr = [1 , 2, 3, 4];

           let newArr = arr.filter((val) => {
                    return val % 2 === 0;
                })

                console.log(newArr);

    ---------------------------------------------------**** R E D U C E   M E T H O D ****

                * Performs some operations and REDUCE the array to a SINGLE value.
                * It returns a single value
                
                let arr = [1 , 2 , 3 , 4 , 5];

        ex:        const output = arr.reduce((res , curr) => {
                    return res + curr;
                });

                console.log(output); //10

ex: finding a biggest number 
                    let arr = [4 , 5 , 8 , 1];

                    const bigNum = arr.reduce((prev , curr) => {
                        return prev > curr ? prev : curr;
                    });

                    console.log(bigNum);  //8






















