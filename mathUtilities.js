/*
"Math utilities" veya "mathematical utilities", matematiksel işlemleri kolaylaştırmak veya matematiksel işlemler için yardımcı işlevler sağlamak amacıyla 
oluşturulmuş fonksiyon, sınıf veya kütüphaneleri ifade eder.
*/

const myDate = new Date();

console.log(myDate.getDate);

//const math = new Math();    =>>> Hata verir: TypeError: Math is not a constructor

/*
JavaScript'de Math önceden tanımlı bir nesnedir ve yeni bir nesne olarak oluşturulamaz. Math örneği oluşturamazsınız çünkü Math bir matematiksel işlevler ve sabitler koleksiyonudur ve bunların bir örneği oluşturulabilecek türden bir yapı değildir.

Math nesnesi, matematiksel işlemleri ve matematiksel fonksiyonları, özellikle sabitler (pi, euler, vs.) sağlamak için kullanılan bir statik nesnedir. Yani, onunla doğrudan çalışabilirsiniz.
*/

const eValue = Math.E;
const piValue = Math.PI;
console.log(piValue); // Çıktı: 3.141592653589793

const sqrtValue = Math.sqrt(16);
console.log(sqrtValue); // Çıktı: 4

/*
Ancak Math nesnesinin örneğini oluşturamaz veya bir nesne gibi kullanamazsınız. 
Date nesnesi için oluşturma deneyimlerinizin farklı olması, Date bir tür yapıcı fonksiyondur ve Date nesnesi oluşturmak için new Date() şeklinde kullanılır. 
Ancak bu, Math için geçerli değildir.
*/

//Math.abs(x): Bir sayının mutlak değerini döndürür. Yani, her zaman pozitif bir sayı elde edilir.
console.log(Math.abs(-5)); // Çıktı: 5
console.log(Math.abs(3.14)); // Çıktı: 3.14

//Math.ceil(x): Bir sayıyı yukarı doğru en yakın tam sayıya yuvarlar.
console.log(Math.ceil(3.14)); // Çıktı: 4
console.log(Math.ceil(5.8)); // Çıktı: 6

//Math.floor(x): Bir sayıyı aşağı doğru en yakın tam sayıya yuvarlar.
console.log(Math.floor(3.14)); // Çıktı: 3
console.log(Math.floor(5.8)); // Çıktı: 5

//Math.round(x): Bir sayıyı en yakın tam sayıya yuvarlar. Eğer sayı ondalık kısmı 0.5 veya daha büyükse yukarıya, 0.5'ten küçükse aşağıya yuvarlanır.
console.log(Math.round(3.14)); // Çıktı: 3
console.log(Math.round(5.8)); // Çıktı: 6
console.log(Math.round(4.5)); // Çıktı: 5

//Math.min(...args): Argüman olarak verilen sayıların en küçüğünü döndürür.
console.log(Math.min(3, 7, 2, 9, 5)); // Çıktı: 2

//Math.max(...args): Argüman olarak verilen sayıların en büyüğünü döndürür.
console.log(Math.max(3, 7, 2, 9, 5)); // Çıktı: 9


/*
Math.random() yöntemi, JavaScript'te rastgele sayı üretmek için kullanılan bir Math nesnesi yöntemidir. 
Bu yöntem, 0 (dahil) ile 1 (hariç) arasında rastgele bir ondalıklı sayı üretir.
*/

const randomNumber = Math.random();
console.log(randomNumber); // Örnek çıktılar: 0.123456789, 0.87534521, 0.56789435, vb.

/*
Math.random() yöntemi, genellikle belirli bir aralıkta rastgele bir tam sayı üretmek veya rastgele bir aralıktaki ondalık bir sayı elde etmek için kullanılır. 
Rastgele bir sayıyı belirli bir aralıkta almak için çeşitli matematiksel işlemler kullanılabilir.

Örneğin, 1 ile 10 (dahil) arasında rastgele bir tam sayı üretmek için şu kodu kullanabilirsiniz:
*/

const randomInteger = Math.floor(Math.random() * 10) + 1;
console.log(randomInteger); // Örnek çıktılar: 1, 7, 10, vb.

/*
Yukarıdaki örnek, Math.random() ile üretilen ondalık rastgele sayıyı 10 ile çarpar, ardından Math.floor() ile aşağıya yuvarlar ve son olarak 1 ekler. 
Böylece 1 ile 10 arasında (dahil) rastgele bir tam sayı elde edersiniz.
*/





