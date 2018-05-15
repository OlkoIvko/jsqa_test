
/*

    JavaScript Lesson 01

    JS Language and its Types.


    How to execute this lesson:

    # like: cd ~/dev/jsqa/src/app/lessons/01

    cd [project root]~/dev/jsqa/src/app/lessons/01

    node l-01.js

*/


// JavaScript consists of executable code and comments:


// 1. Executable Code:

var a = 0;

// 2. This is a single-line comment


// This way, we tell interpreter to use strict mode (use it please)

'use strict';


var helloWorld = 'Hello World';

helloWorld = 2016;


// variable = var

// Simple Data Types

var myNumber = 2016; // Number

var myString = 'Hello Again'; // String

var myBoolean = true; // Boolean - Logical type

var myNull = null; // Null

var myUndefined; // 'undefined', Type: Undefined

// var mySymbol = new Symbol();


// Complex Data Types:

// Object

var myObject = {

    myProperty: 'Only Mine',

    myOtherProp: 19,

    myObjProp: {

        myParent: {

            myParent: null

        }

    }

};


// Array

var myArray = [1,2,3,4,5, 'a string', true, { name: 'My Name'}];


// Function

function myFunction (parameter) {

    var myLocalVar = parameter;

    return myLocalVar * 2;

}


var fiveTimesTwo = myFunction(5); // returns 10 = 5 * 2;


// Date

var today = new Date(); //


// RegExp

// 1. Validation: Name.Email@domain.com

// 2. Find and Replace


// TODO ROST: Tell maximum size of Object and

// max children count for object.


function myFunction (parameter) {

    var myLocalVar = parameter;

    return myLocalVar * 2;

}


// TypeScript is "Typed Javascript"


// Jeff Atwood Law (http://stackoverflow.com/):

// "any application that can be written in JavaScript,

// will eventually be written in JavaScript."


//

// Why JS?

//


// JS Pluses:

// 1. Low entrance barrier: only need only browser (or NodeJS, or Minecraft)

// 2. Free! Editors: Sublime Text, Notepad++, Aptana (Eclipse), JSFiddle

// 3. Easy to Debug.

// 4. Community and Rapid Dev: http://stackoverflow.com/ , https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference

// 5. Libraries and Frameworks: (jQuery) (AngularJS, Backbone etc)

// 6. Desktop (NodeJS) Web Server

// 7. Build (NPM, Bower, Gulp)

// 8. Mobile (PhoneGap, Appcelerator Titanium)

// 9. Bridge to other languages. JS is a C-like lang.


//

// There are two types of comments:

//


/* - Block comment */

// - Line comment


//

// Right way to learn JavaScript:

//


// 1. Answer the question: why, or for what reason I do it?

// 2. Learn it every day. E-ve-ry.

// 3. Consistent and systematic learning:

//  3.1 Move from Simple to Complex

//  3.2 Language first (JS Core). Environment then (DOM).

// 4. Left nothing unclear.

// 5. Produce clean & well-structured code.

// 6. Track what's happening in modern programming today (JS especially)

// 7. Analyze web, read twitter (JS Daily), blogs, stackoverflow, books etc.

// 8. Practice, practice, and practice again.

// 9. Interpret (compile) code in your head.

// 10. English. One more English, please!


// Let's start with it each time:

'use strict';


// So:


// Let's recall JS data types:

/* Six primitive ones:

    - String

    - Number

    - Boolean

    - Null

    - Undefined

    - Symbol (new in ECMAScript 6)

*/


// Complex ones: Object (Array, Date, Function, RegExp)


//

// Dynamic typing in JavaScript:

//

var foo = 42; // foo has type 'Number'

var foo = 'bar'; // foo has type 'String'

var foo = false; // foo has type 'Boolean'


//

// String - ðÿäîê

//


// Òåðì³íîëîã³÷íå: "ðÿäîê ÷è ñòð³÷êà"?

// http://linux.org.ua/cgi-bin/yabb/YaBB.pl?num=1353672326/21

// "multiline string" = "áàãàòîðÿäêîâèé ðÿäîê" (çâó÷èòü íå äóæå êðàñèâî, àëå)

// https://uk.wikipedia.org/wiki/%D0%A0%D1%8F%D0%B4%D0%BE%D0%BA_(%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D1%83%D0%B2%D0%B0%D0%BD%D0%BD%D1%8F)


//

// Two ways to create string in JS:

//


// Literal syntax:

var foo2 = 'bar2';


// Constructor syntax:

var foo3 = new String('bar3');


// Preferred quotes: single ones vs. double:

var foo = 'bar';

// var foo = "bar"; // try to avoid it


//

// String.length

//


// Öÿ âëàñòèâ³ñòü äàº âçíàòè äîâæèíó ðÿäêà (ê³ëüê³ñòü ñèìâîë³â):


var fooLength = foo.length; // 3

var lastChar = foo.charAt( fooLength - 1);


//

// Ôóíêö³¿ äëÿ ðîáîòè ç ðÿäêàìè:

//


// String.charAt( index );

// String.indexOf( string );

// String.substring( startIndex, endIndex );

// String.substr( startIndex, quantity );


//

// String.charAt( index );

//

// 'char' = 'character';


// Ïîâåðòàº ñèìâîë, ùî ìàº ó ðÿäêîâ³ ³íäåêñ index.

// Íóìåðàö³ÿ ñèìâîë³â ðÿäêà ïî÷èíàºòñÿ ç íóëÿ:


foo.charAt(0); // 'b'

foo.charAt(1); // 'a'

foo.charAt(2); // 'r'


//

// String.indexOf( subString [, startIndex] );

//


// 1. Ïîâåðòàº íîìåð ï³ä-ðÿäêà ó ðÿäêó, ïî÷èíàþ÷è ïîøóê ç startIndex

// 2. Ïîâåðòàº -1, ÿêùî ñèìâîë íå çíàéäåíî.


foo.indexOf( 'a' ); // 1


var foo4 = 'bara';

foo4.indexOf( 'a', 2 ); // 3 - çíàéøëè äðóãå 'à', áî ïî÷àëè ïîøóê ç ³íäåêñó 2


//

// String.substring( [startIndex] [, endIndex] );

//


// - ïîâåðíå ï³ä-ðÿäîê, ïî÷èíàþ÷è ç ïîçèö³¿ startIndex äî ïîçèö³¿ endIndex,

// íå âêëþ÷àþ÷è endIndex, àáî äî ê³íöÿ ðÿäêà, ÿêùî endIndex íå âêàçàíî.


var helloWorld = 'Hello World!';

helloWorld.substring( 6 ); // 'World!'

helloWorld.substring( 6, 7 ); // 'W'

helloWorld.substring( 6, 8 ); // 'Wo'

helloWorld.substring( 6, 9 ); // 'Wor'

helloWorld.substring( 6, 90 ); // 'World!'


//

// String.substr( startIndex [, quantity] );

//

// - ïîâåðíå ï³ä-ðÿäîê, ïî÷èíàþ÷è ç ïîçèö³¿ startIndex ³ ó ê³ëüêîñò³ quantity

// (àáî äî ê³íöÿ ðÿäêà, ÿêùî quantity íå âêàçàíî).


helloWorld.substr( 6 ); // 'World!'

helloWorld.substr( 6, 1 ); // 'W'

helloWorld.substr( 6, 2 ); // 'Wo'

helloWorld.substr( 6, 3 ); // 'Wor'


//

// Ïåðåòâîðåííÿ ÷èñåë ó ðÿäêè ³ íàâïàêè.

//


// ×àñòî âîíî ïðîâîäèòüñÿ àâòîìàòè÷íî, ïî ì³ð³ íåîáõ³äíîñò³.

// Íàïðèêëàä, ÿêùî ÷èñëî âèêîðèñòîâóºòüñÿ â îïåðàö³¿ êîíêàòåíàö³¿ ðÿäê³â,

// âîíî áóäå ïåðåòâîðåíî â ðÿäîê:


var num = 100;

var str = num + ' items.'; // '100' + ' items.' = '100 items.'


//

// + - Êîíêàòåíàö³ÿ ðÿäê³â

//


// Ìîæíà ïîºäíóâàòè, òîáòî êîíêàòåíóâàòè ðÿäêè çà äîïîìîãîþ îïåðàòîðà +,

// ÿêèé çàçâè÷àé çàñòîñîâóºòüñÿ äî ÷èñåë, àëå ìîæå é ïîºäíóâàòè ðÿäêè:


var helloWorld = 'Hello, ' + 'world';


//

// Ùîá ïåðåòâîðèòè ÷èñëî â ðÿäîê, ìîæíà ïðîñòî ñêëàñòè éîãî ç ïîðîæí³ì ðÿäêîì:

//

var numAsString = num + '';


//

// Äëÿ ÿâíîãî ïåðåòâîðåííÿ ÷èñëà â ðÿäîê âèêîðèñòîâóºòüñÿ ôóíêö³ÿ String():

//

var numAsString = String(num);


var n2 = numAsString + 1; // !!! '1001'


//

// Number.toString([radix]): ïåðåòâîðåííÿ ç ÷èñëà ó ðÿäîê ç âêàçàííÿì ñèñòåìè ÷èñëåííÿ

//


var numAsStringBinary = num.toString(2); // 1100100


var ten = 10;

var tenInDecimalSysten = ten.toString( 10 );        // ðåçóëüòàò: "10"

var tenInBinarySystem = ten.toString( 2 );          // ðåçóëüòàò: "1010"

var tenInHexadecimalSystem = ten.toString( 16 );    // ðåçóëüòàò: "a"


//

// Çâîðîòíº ïåðåòâîðåííÿ: ç ðÿäêà ó ÷èñëî: parseInt( value, radix )

//


// Ïåðåòâîðèòè ðÿäîê ó ÷èñëî, âêàçàâøè ïðè öüîìó ñèñòåìó ÷èñëåííÿ, ìîæíà çà äîïîìîãîþ parseInt:


parseInt(tenInBinarySystem, 2);         //ðåçóëüòàò: 10

parseInt(tenInHexadecimalSystem, 16);   //ðåçóëüòàò: 10

parseInt(tenInDecimalSysten, 10);       //ðåçóëüòàò: 10


// Êîëè ðÿäîê âèêîðèñòîâóºòüñÿ â ÷èñëîâîìó êîíòåêñò³,

// â³í àâòîìàòè÷íî ïåðåòâîðþºòüñÿ íà ÷èñëî:


var a = '10' * '10'; // 100


// Íà ïðàêòèö³, ÷àñòî ùîá ïåðåòâîðèòè ðÿäîê â ÷èñëî,

// ïîòð³áíî ïðîñòî â³äíÿòè ç ðÿäêà çíà÷åííÿ 0:


var n = helloWorld - 0; // NaN - 'Hello World!' - no number


// NaN = Not a Number


// Êîðèñí³ ïîñèëàííÿ:

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toString

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt

// https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/parseFloat


//

// ×èñëîâèé òèï: Number

//


var num2 = 3.14;


// Ó JavaScript º äåê³ëüêà ñïåö³àëüíèõ ÷èñëîâèõ çíà÷åíü.


Number.POSITIVE_INFINITY; // Infinity;

Number.NEGATIVE_INFINITY; // -Infinity;


// Êîëè ä³éñíå ÷èñëî ïåðåâèùóº íàéá³ëüøå ìîæëèâå çíà÷åííÿ,

// òî ðåçóëüòàòó ïðèñâîþºòüñÿ ñïåö³àëüíå çíà÷åííÿ íåñê³í÷åííîñò³,

// ÿêå â JavaScript ïîçíà÷àºòüñÿ ÿê Infinity.

// À êîëè â³ä'ºìíå ÷èñëî ñòàº ìåíøå íàéìåíøîãî ïðåäñòàâèìî íåãàòèâíîãî ÷èñëà,

// òî ðåçóëüòàòîì º íåãàòèâíà íåñê³í÷åíí³ñòü,

// ùî ïîçíà÷àºòüñÿ ÿê -Infinity.


var infinity = 100 / 0; // Ðåçóëüòàò: Infinity


//

// Number.NaN; // Not a Number

//


// Ùå îäíå ñïåö³àëüíå ÷èñëîâå çíà÷åííÿ. Âîíî ïîâåðòàºòüñÿ, êîëè îïåðàö³ÿ

// ïðèçâîäèòü äî íåâèçíà÷åíîãî ðåçóëüòàòó.

// Ó öüîìó âèïàäêó ðåçóëüòàòîì º ñïåö³àëüíå çíà÷åííÿ «íå÷èñëî»,

// ùî ïîçíà÷àºòüñÿ ÿê NaN(Not a Number)


// Âîíî ïîâîäèòüñÿ íåçâè÷íî: âîíî íå äîð³âíþº æîäíîìó ³íøîìó ÷èñëó, â òîìó ÷èñë³ é ñàìîìó ñîá³,

// òîìó äëÿ ïåðåâ³ðêè íà öå çíà÷åííÿ º ñïåö³àëüíà ôóíêö³ÿ Number.isNaN()


// - íå ïëóòàòè ç ãëîáàëüíîþ ôóíêö³ºþ isNaN().


// Ôóíêö³ÿ Number.isNaN() ïåðåâ³ðÿº âèêëþ÷íî íà ð³âí³ñòü ç ñïåö³àëüíèì çíà÷åííÿì Number.NaN, òîìó:

var isNaNIsNaN = Number.isNaN( Number.NaN ); // true - Number.NaN º ºäèíèì çíà÷åííÿì, ÿêå äàñòü true

var tenIsNaN = Number.isNaN( 10 ); // false - óñ³ ³íø³ çíà÷åííÿ äàþòü false


// Ãëîáàëüíà ôóíêö³ÿ isNaN() ïåðåâ³ðÿº, ÷è º ¿¿ àðãóìåíò ÷èñëîì:

var globalNumberIsNaN = isNaN(10); // false

var globalStringIsNaN = isNaN('hello'); // true


// Äåòàëüí³øå ïðî öå:

// http://stackoverflow.com/questions/25176459/is-number-isnan-more-broken-than-isnan


// +, -, *, /, %, ++, --


//

// Òèï Null - âèêîðèñòîâóºòüñÿ, êîëè òðåáà íàäàòè ïóñòå, "íóëüîâå çíà÷åííÿ"

//


//

// Undefined - öå çíà÷åííÿ ìàþòü çì³íí³, ÿê³ áóëî îãîëîøåíî, àëå íå áóëî íàäàíî çíà÷åííÿ:

//


var num3; // undefined


//

// Òèï îá'ºêòó - Object

//


//

// Ñòâîðåííÿ îá'ºêò³â:

//


// 1. Object literal

var myObj = {};


// 2. Object Constructor

var myObj = new Object();


var lesson = {

    name: 'Lesson 01 - Data Types (continued)',

    id: 2,

    folder: null,

    checkHomework: function ( students ) {

        // body...

    }

};


console.log('\nLesson 01 - Homework:\n\n!!! Please answer the questions in this file !!!\n');


// Lesson 01 Homework - Start


// Task 01.01 - 1 point

// Question: Can JavaScript file contain non-executable code?

// Answer: No


// Task 01.02 - 2 points

// Question: How we can tell the JS interpreter to use strict mode?

// Answer: "use strict";


// Task 01.03 - 2 points

// Q: What simple data types are used in JS?

// A: string, number, boolean, null, underfined;


// Task 01.04 - 2 points

// Q: What complex data types are used in JS?

// A: Object, Function;


// Task 01.05 - 3 points

// Q: Please write a function which calculates the difference between two numbers

// A: 
function sub (a, b) {
    return a - b; 
}
    

// Lesson 01 Homework - End

