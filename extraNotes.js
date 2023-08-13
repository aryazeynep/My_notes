const now = new Date();
now;
console.log(now); //bu kod 3 saat batıda olan bir yerin saatini veriyor
console.log("ur prrful")

//js dosyalarında fazladan bir gün oluşabiliyor, bu sorun neden olur

console.log(now.valueOf()) //1 ocak 1979ten beri geçen zamanı milisaniye olarak verir
//fonksiyondan sonra () koymazsak onu direkt Function: olarak alır


/*
JavaScript dilinin standart kütüphanelerinde, özel bir isEqual adlı yerleşik bir fonksiyon yoktur. 
lodash adlı popüler bir JavaScript kütüphanesi, isEqual adlı bir fonksiyon sunar. 
Bu fonksiyon, iki değeri (nesne, dizi veya diğer veri tipleri) karşılaştırır ve içeriklerinin derinlemesine eşit olup olmadığını kontrol eder.
*/

//lodash kütüphanesini yüklemek için npm komutu
//npm install lodash


// lodash kütüphanesini projeye dahil etmek için
const _ = require('lodash');

const obj1 = { name: "John", age: 30 };
const obj2 = { name: "John", age: 30 };
const obj3 = { name: "Alice", age: 25 };

console.log(_.isEqual(obj1, obj2)); // true (obj1 ve obj2 içerikleri eşit)
console.log(_.isEqual(obj1, obj3)); // false (obj1 ve obj3 içerikleri farklı)


/////Constructor Functions//////////////////////////////////////////////////

/*
Yapıcı fonksiyonlar, JavaScript'te yeni nesne örnekleri oluşturmak için kullanılan özel fonksiyonlardır. 
Yapıcı fonksiyonlar, nesne tabanlı programlama yaklaşımında, bir nesnenin özelliklerini ve davranışlarını tanımlayan bir şablon veya kalıp gibi çalışır.
JavaScript'de yapıcı fonksiyonlar şu şekilde tanımlanır:
*/

function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  
  // Yapıcı fonksiyonu kullanarak yeni nesne örnekleri oluşturma
  const person1 = new Person("John", 30);
  const person2 = new Person("Alice", 25);

/*
Yukarıdaki örnekte, Person adlı bir yapıcı fonksiyon tanımlıyoruz. Bu fonksiyon, name ve age adlı iki özellik alır ve bu özellikleri yeni oluşturulan nesneye bağlar 
(this anahtar kelimesini kullanarak). 
Yapıcı fonksiyonu new anahtar kelimesiyle çağırdığımızda, yeni bir nesne oluşturulur ve bu nesne üzerinde yapıcı fonksiyonun özellikleri uygulanır.

Yapıcı fonksiyonlar, özellikle sınıf tabanlı nesne yönelimli programlama (OOP) yaklaşımını taklit etmek için kullanılır. 
Ancak, JavaScript, sınıfları ES6 (ECMAScript 2015) ile tanıtılmadan önce yapıcı fonksiyonları kullanarak OOP mantığına uygun bir yapı oluşturulabilmekteydi.

Günümüzde, ES6 sınıf tanımlamaları, nesne oluşturmak ve nesnelerin davranışlarını yönetmek için daha kolay ve okunabilir bir yol sağlar. 
Ancak, yapıcı fonksiyonlar hala birçok projede kullanılmaya devam ediyor ve özellikle eski kod tabanlarında sıkça rastlanabilir.
*/

/*
ES6, JavaScript dilinin 6. sürümü olan "ECMAScript 2015" olarak da bilinen bir JavaScript standartıdır. 
"ECMAScript" adı, JavaScript'in resmi adıdır ve dilin standartları, "ECMAScript" adı altında belirlenir. 
Sürümler, dilin sürekli gelişimiyle birlikte yeni özelliklerin ve dil yapısındaki değişikliklerin eklenmesi veya revize edilmesiyle ortaya çıkar.

ES6, 2015 yılında yayınlanmış olup, JavaScript dilinin en kapsamlı ve en önemli güncellemelerinden biridir. 
Bu sürüm, JavaScript dilinin modern ve güçlü programlama özellikleri kazanmasını sağlamıştır. 
ES6, dilin daha temiz, daha okunabilir ve daha kolay anlaşılır kod yazımına olanak tanıyan pek çok yenilik getirmiştir.

ES6'nın bazı önemli özellikleri şunlardır:

Arrow fonksiyonlar: Kısa ve daha okunaklı fonksiyon tanımları sağlar.
Sınıflar (class): Nesne yönelimli programlama (OOP) için sınıf tanımlama ve kalıtımı kolaylaştırır.
Sabitler (const) ve değişken blok kapsamı (let): Blok içinde sınırlı değişken tanımlama ve sabit değişkenler oluşturma.
Spread operatörü: Dizileri veya nesneleri farklı dizi veya nesnelerle birleştirme veya kopyalama.
Rest parametreleri: Fonksiyonların değişken sayıda argümanı tek bir dizi olarak almasını sağlar.
Destructuring: Nesneleri veya dizileri parçalara ayırarak değişkenlere atama yapma.
Promise: Asenkron işlemleri kolaylaştıran bir yapıdır.
Modüller (import ve export): Kodun farklı dosyalarda modüller olarak düzenlenmesini sağlar.
Temel matematiksel işlevler: Math nesnesine eklenen yeni matematiksel işlevler.
*/



const obj4 = {prop1: 20}
const obj5 = {prop2: 30}

console.log(obj4+obj5) //[object Object][object Object]

/*
Bu durum, JavaScript'te objelerin varsayılan davranışından kaynaklanır. 
JavaScript, nesnelerin metinsel biçimini otomatik olarak birleştirmeye çalıştığında, objeleri [object Object] olarak ifade eder. 
Dolayısıyla, obj1 ve obj2 gibi iki nesneyi toplamaya çalıştığınızda, bu iki nesnenin metinsel temsili birleştirilir ve sonuç [object Object][object Object] olur.
*/


const str = "Hello, world!";
const arr = [];

for (let i = 0; i < str.length; i++) {
  arr.push(str[i]);
}

console.log(arr); // ["H", "e", "l", "l", "o", ", ", "w", "o", "r", "l", "d!"]