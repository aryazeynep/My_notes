/*
JavaScript'te üç çeşit yaygın hata türü bulunmaktadır ve bu hataların hepsi farklı durumları temsil eder. Bu hata türleri şunlardır:

>> SyntaxError: JavaScript kodunun dilbilgisi kurallarına uygun olmadığı durumlarda oluşan hatalardır. 
                Örneğin, yanlış bir sözdizimi veya değişken adının yanlış kullanımı gibi durumlar bu hataya neden olabilir.

>> TypeError: Değişkenlerin veya nesnelerin beklenen türde olmadığı durumlarda oluşan hatalardır. 
              Örneğin, bir fonksiyonun, bir dizi üzerinde çalışmaya çalışması veya undefined olan bir değeri kullanmaya çalışması gibi durumlar bu hataya neden olabilir.

>> ReferenceError: Tanımsız veya tanımlanmamış bir değişken veya fonksiyonun kullanıldığı durumlarda oluşan hatalardır. 
                   Örneğin, bir değişkenin tanımlanmadan kullanılması veya bir fonksiyonun yanlış ismiyle çağrılması gibi durumlar bu hataya neden olabilir.

Bunlar üç yaygın hata türüdür, ancak JavaScript'te daha spesifik hata türleri de vardır. 
Örneğin, EvalError, RangeError, URIError, ReferenceError ve SyntaxError gibi hata türleri mevcuttur. 
EvalError artık standart bir hata türü değildir ve kullanımı önerilmez. 
Ancak, hata nesnelerinin üst sınıfı olan Error nesnesi bulunur ve tüm hata türleri bu nesneden türetilir.

Örneğin, TypeError ve SyntaxError gibi hatalar, Error nesnesinden türetilmiş alt sınıflardır. 
Herhangi bir hata türü, bu nesneden türetilmiş alt sınıfın özelliklerini ve davranışlarını devralır. 
Bu sayede hata nesneleri, daha spesifik hata türlerini belirtirken aynı zamanda temel bir hata yönetimi için kullanılabilirler.
*/

/*
const someVariable = 20;
console.log(someVariable); //20
console.log(anotherVariable); //ReferenceError: anotherVariable is not defined

const myObj = {
    prop1: "some value"; //SyntaxError: Unexpected token ';'
    prop2: "another value";
};

const myNumber = 50;
myNumber.toUpperCase();

const obj1 = {prop1: 20}
const obj2 = {prop2: 30}
obj1.prop1(); //TypeError: obj1.prop1 is not a function

*/

/////////////////////////////////////////////////////////////
/////TRY- CATCH//////////////////////////////////////////////
/////////////////////////////////////////////////////////////

try{
    var num = 50;
    num.toUpperCase();
} catch (ourErrName){
    console.log(ourErrName instanceof TypeError); //true
    console.log(ourErrName.message) //num.toUpperCase is not a function
}

/*
JavaScript'te, NaN, null ve undefined gibi özel değerlere sahip "builtin" (yerleşik) nesneler bulunmaktadır. 
Bu değerler, farklı durumları temsil eder ve farklı amaçlar için kullanılırlar.
*/

// NaN: "Not-a-Number" (Sayı değil) anlamına gelir. 
// Matematiksel bir işlem sonucu geçerli bir sayı olmadığında veya sayıya dönüştürülemeyen bir ifade olduğunda oluşan bir değerdir.

const result = 0 / 0;
console.log(result); // NaN

const myString = "some string";
console.log(Number("30")) //30
console.log(Number(myString)) //NaN
console.log(myString*2) //NaN

// null: "Boş" veya "geçersiz" anlamına gelir.
// Bir nesnenin bilerek atanmamış bir değeri temsil eder. Bir değişkene null atanarak, değeri bilerek boş bırakabilirsiniz.

let person = null; // Boş bir nesne

// undefined: Değeri atanmamış veya olmayan bir değişkeni temsil eder.
// Bir değişken tanımlanmış ancak bir değer atanmamışsa varsayılan olarak undefined olur.

let name;
console.log(name); // undefined

if (name) {
console.log(1)
} else {
    console.log(2)
} //2






