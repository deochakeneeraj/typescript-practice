//Creating global scope variables
var str: string = "Hello world";
console.log(str);

//creating local scope variables
let str1: string = "Hello";
console.log(str1);

//creating constants
const str2: string = "Hello";
console.log(str2);


//Defining data types

//String
var s: string = "String";

//number
var s1: number = 45;

//boolean
var s3: boolean = true;

//void
var s4: void = method();
console.log(s4);
function method():void { }

//null
let s5: null = null;

//Undefined
let s6: undefined ;

//never is used as data type in function throwing exception or function having infinite loop

function method1(): never {
    while (true)
        console.log("Hi");
}


let s8: any = 5;// any value can be assigned to this part
s8 = true;
s8 = "String1";
s8 = null;

let s9: string | number = "hello";
s9 = 5;

//when you do tsc --strictNullCheck  you can't assign null to any other data type
//let s10: string = null;//Type 'null' is not assignable to type 'string'.

// Now we can assign any number of data types to a variable
var s10: string | null | undefined = null;

