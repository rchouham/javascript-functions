/* Opdracht 1 */
// Schrijf een functie die drie parameters verwacht en deze drie getallen bij elkaar optelt en teruggeeft.
// ---- Verwachte uitkomsten:
// 3, 4, 5 geeft 12
// 11, 3, 9 geeft 23

function geefTotaal (eersteNummer, tweedeNummer, derdeNummer){
    return eersteNummer+tweedeNummer+derdeNummer


}
const snoep = geefTotaal(3,5,4)
const lollies= geefTotaal(11,3,9)
console.log(snoep,lollies)

/* Opdracht 2 */
// Schrijf een functie die twee strings verwacht en deze aan elkaar geplakt teruggeeft.
// Je mag hier geen String Object methoden voor gebruiken.
// ---- Verwachte uitkomsten:
// "abra", "cadabra" geeft "abracadabra"


// function add (tekst)
// {
//     console.log(tekst,tekst)
//
//
// }
//
// add ('abra','cadabra');


function plakTekst (tekst1,tekst2) //parameter(input voor de function)
{
    return tekst1+tekst2

}

let tekst1  = "abra"; //argument
let tekst2 = "cadabra"; //argumment

console.log(plakTekst( tekst1,tekst2))

//geeft abracadabra


// function add (tekst1,tekst2)
// {
//     return tekst1+tekst2
//
// }
//
// let tekst1  = "abra";
// let tekst2 = "cadabra";
//
// console.log(tekst1+tekst2)
// //geeft abracadabra


/* Opdracht 3 */
// Schrijf een functie die twee parameters verwacht: een woord en een karakter
// De functie omwikkelt het woord met het karakter en geeft dit terug
// ---- Verwachte uitkomsten:
// "bril", "*" geeft "*bril*"
// "beep", "_" geeft "_beep_"
// "kaas", "Q" geeft "QkaasQ"

function wikkel (woord,karakter){

  return karakter+woord+karakter

}
let woord ='bril';
let kararakter  = '*';

   const beep ='beep';
   const gar  = '_';

   woord ='kaas';
   kararakter  = 'Q';

  woord ='beep';
  kararakter  = '_';

console.log(kararakter,woord,kararakter);


function wikkel (woord,karakter){

    console.log(karakter+woord+karakter)

}

wikkel ('bril', '*');
wikkel ('beep', '_');
wikkel ('kaas', 'Q');



/* Opdracht 4 */
// Schrijf een functie die een array van strings verwacht. De functie geeft
// alle strings aan elkaar geplakt terug. Je mag hier geen array- of string methoden
// voor gebruiken.
// ---- Verwachte uitkomsten:
// ["abra", "cadabra"] geeft "abracadabra"
// ["a", "b", "c"] geeft "abc"


// function daba (lijmen) {
//
//
//         for (let i = 0; i < lijmen.length; i++) {
//             if (i === lijmen.length - 1) {
//                 return lijmen+lijmen
//             }
//             if (lijmen.length > 2) {
//                 return lijmen+lijmen
//             }
//         }
// }
//
// console.log(daba["abra","cadabra"]);
// console.log(daba["a","b","c"]);
// console.log(lijmen.length)

// const tekst = ["abra", "cadabra"];
//
//
// let stringConversion= tekst.join("")
// console.log(stringConversion)


/* Opdracht 5 */
// Schrijf een functie die een array van strings verwacht en een gezamelijke groet teruggeeft
// ---- Verwachte uitkomsten:
// ["Nick", "Nova", "Mitchel", "Arjen"] geeft "Hoi Nick, Nova, Mitchel en Arjen!"
// ["Piet", "Henk"] geeft "Hoi Piet en Henk!"
// ["A", "B", "C", "D", "E", "F"] geeft "Hoi A, B, C, D, E en F!"

// function hello (addWithGreeting) {
//
//     let greetings = "Hoi ";
//
//     for (let i = 0; i < addWithGreeting.length; i++) {
//         if(i === addWithGreeting.length -1) {
//             return greetings = greetings + "en " + addWithGreeting[i] + "!";
//         }
//         if(addWithGreeting.length > 2) {
//             greetings = greetings + addWithGreeting[i] + ", ";
//         }
//         if(addWithGreeting.length === 2) {
//             greetings = greetings + "";
//         }
//     }
//     return greetings;
// }
// console.log(hello(["Nick", "Nova", "Mitchel" ,'+', "Arjen"]));
// console.log(hello(["A", "B", "C", "D", "E", "F"]));
// console.log(hello(["Piet", "Henk"]));



// const dateOfBirth = new Date(1992, 11, 26);
// // Hier hebben we niet zoveel aan:
// const englishDate = dateOfBirth.toDateString(); // geeft Sat Dec 26 1992
// // Nederlandse versie volluit
// const longOptions = {
//     weekday: 'long',
//     year: 'numeric',
//     month: 'long',
//     day: 'numeric',
// };
// const dutchDate = dateOfBirth.toLocaleDateString('nl-NL', longOptions); // geeft zaterdag 26 december 1992
//
// // Nederlandse versie kort
// const shortOptions = {
//     weekday: 'short',
//     month: 'long',
//     day: 'numeric',
// };
// const dutchShortDate = dateOfBirth.toLocaleDateString('nl-NL', shortOptions); // geeft za 26 december
// console.log(dutchShortDate)
