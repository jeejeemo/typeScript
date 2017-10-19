import { User } from './User';



/* Declaration de variable

console.log("Hello!");

const a = 3; // constante 
a = 2;

console.log(a + 3);

function test(callback){
    let b = 3; // rester dans le contexte actuel

    callback(function(){
        console.log( b *2);
    });
}

var c = 4; // variable idem js

*/

/*Typage des variables */ 
    //string
    //number
    //bolean
    //function

// var myNumber : number;

// myNumber = 10; // ok
// //myNumber = "hello"; //erreur

// var myString : string;

// //myString= 10; //erreur
// myString = "hello"; //ok

// var callback: Function = function(){
//     console.log("test function !");
// };

// //callback = 10; // Erreur


// var dom : HTMLElement = document.getElementById("#item"); 
// var elemnt: number|string;

// var tab : number[] = [1, 5, 45, 50];

// var tab2 : (number|string)[] = ["test", 45];

// var tab3 : {} = {
//     test : "ok",
// };

// var tab4: { status: boolean, value: string[]} = {
//     status : true,
//     value: []
// };

// var Ston
// /*Typage des functions*/

// function addition( n1: number, n2: number, n3?:number):number{
//     return n1 + n2 + n3; // ? = optionnel
// }
// //var resultat: number = addition("test", 2); // erreur
// var resultat: number = addition(5, 2); // ok


// function debug(arg:string):void{
//     console.log(arg);
// }

/*Test with class*/

var user: User;
var user = new User("test", 1,"wwww");
console.log(user);


