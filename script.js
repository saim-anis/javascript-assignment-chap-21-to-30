
//JavaScript Assignment chap 21 - 30
let str = "Hello World!";
console.log(str.length); 


let stri = "Hello World!";
console.log(stri.slice(6)); 


let sent = "The cat is sleeping";
if (sent.includes("cat")) {
    console.log(true);
} else{
    console.log(false);
}

let catSent = "The cat is sleeping"

console.log(catSent.indexOf("sleeping"))


let text = "Javascript"
 
 console.log(text[3])

 let prog = "Programming"
 console.log(prog[prog.length - 1])


 let num = 7.8
 let flr = Math.round(num)
 console.log(flr)

 let num2 = 5.9
 let Num2 = Math.floor(num2)
 console.log(Num2)


 let num3 = 4.2
 let Num3 = Math.ceil(num3)
 console.log(Num3)

//Generating Random Numbers
 let Randnum = Math.random(1)
 console.log(Randnum)

let randomNum = Math.random() * 10 + 1;
console.log(randomNum);


 //Generating Random Numbers

 let strno = 250
 let Strno = strno.toString()
 console.log(Strno)

// . let strNum = "45.67"; Write a code to convert strNum to a number using 
//Number() and print it. 
let StrtoNo = "45.67"
let Str = Number(StrtoNo)
console.log(Str + 5)


let numR = 5.6789;
let rounded = numR.toFixed(2)
console.log(rounded);

let numLimit = 3.1415926535
let No =  numLimit.toFixed(4) 

console.log(No)