//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//JS ARRAYS AND SOME BUILD-IN FUNCTIONS///////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const arr = [1,2,3,5,6]
//pop fonksiyonu arrey'in son elemanını çıkarır
arr.pop(); //return value olarak 6 değerini verir 
arr.pop();
arr.push(4,5,6)
console.log(arr)

arr.unshift(0); //return value olarak 7 değerini verir
console.log(arr)
//arr in başına sıfır ekler

const copyarr = arr.slice()
console.log(copyarr===arr)
console.log(copyarr==arr) 
//ikisi de false değer verir!
/*
slice() metodu, bir diziyi veya dizi benzeri bir nesneyi kopyalarken, kopyalanan dizinin bellekte farklı bir referansa sahip olduğu anlamına gelir. 
Yani, arr.slice() ile oluşturulan copyarr dizisi, arr dizisinden tamamen bağımsızdır.

JavaScript'de, iki farklı nesne veya dizi, bellekte farklı referanslara sahip olduklarından, doğrudan karşılaştırıldıklarında false olarak değerlendirilirler. 
Bu durumda, copyarr ve arr, bellekte farklı nesnelerdir ve dolayısıyla karşılaştırma operatörleri olan === (aşırı denklik) ve == (denklik) ile false olarak değerlendirilirler.
*/

const copyarr2 = arr.slice(3); //3. indeksten itibaren kopyalama yapar
//slice fonksiyonu orijinal diziyi değiştirmez
console.log(copyarr2);

const arr2 = [1, 2, 3, 4, 5];
// arr.splice(start, deleteCount, item1, item2, ...);
const removedElements = arr2.splice(1, 2, 'x', 'y', 'z'); //değişkene atama yaparken yeni değişkene çıkarılan elemanları veriyor!!!
const prearr = arr.pop();
console.log(prearr) //6, pop işleminde de return değeri çıkarılan elemandır

console.log(arr2); // [1, 'x', 'y', 'z', 4, 5]
console.log(removedElements); // [2, 3]

/*
splice() yöntemi, mevcut dizide değişiklik yapmak için oldukça kullanışlıdır, ancak dikkatli kullanılmalıdır çünkü orijinal diziyi değiştirir. 
Eğer orijinal diziyi korumak istiyorsanız, slice() veya spread operatörünü kullanarak kopyalayabilirsiniz.
*/


//findIndex ve indexOf JavaScript dizilerinin iki farklı işlevine karşılık gelirler.

//indexOf: Bu, bir dizi içinde belirli bir değerin ilk bulunduğu dizin (index) değerini döndüren bir dizi yöntemidir. Eğer değer dizi içinde bulunmuyorsa, -1 döndürür.

const arr3 = [1, 2, 3, 4, 5];

console.log(arr3.indexOf(3)); // Çıktı: 2 (3, dizideki ikinci elemandır, ancak dizinler 0'dan başlar)
console.log(arr3.indexOf(6)); // Çıktı: -1 (6, dizide bulunmamaktadır)


//findIndex: Bu, belirli bir testi geçen dizideki ilk öğenin dizinini döndüren bir dizi yöntemidir. Testi geçen öğe bulunmazsa -1 döndürür.

const index = arr3.findIndex(item => item > 3);
console.log(index); // Çıktı: 3 (4, dizideki dördüncü elemandır, dizin 0'dan başlar)

const moreComplexArr = {firstName:"Bob", lastName:"Smith"};
const moreComplexArr2 = [{firstName:"Bob", lastName:"Smith"}, {firstName:"Alice", lastName:"Smith"},{firstName:"Jon", lastName:"Smith"},{firstName:"Jon", lastName:"Doe"}];

//console.log(moreComplexArr.indexOf("Bob"))  TypeError: moreComplexArr.indexOf is not a function
//console.log(moreComplexArr.indexOf({firstName:"Bob"}))  TypeError: moreComplexArr.indexOf is not a function
console.log(moreComplexArr2.indexOf("Bob")) //-1  (1)
console.log(moreComplexArr2.indexOf({firstName:"Bob", lastName:"Smith"})) //-1   (2)
console.log(moreComplexArr2.indexOf({firstName:"Bob"})) //-1   (3)

/*
moreComplexArr adlı değişken bir dizi değil, bir nesnedir (Object). 
indexOf yöntemi yalnızca diziler üzerinde çalışır, çünkü nesnelerde bu metot tanımlı değildir.

moreComplexArr2 adlı değişken bir dizi (array) olarak tanımlanmıştır, bu yüzden indexOf yöntemi bu değişken üzerinde çalışacaktır. 
Ancak, indexOf metodu, nesnelerin içeriğine dayalı olarak eşleşmeyi sağlayacak şekilde özelleştirilmiş değildir. 
Bu nedenle, aradığınız nesneler tam olarak aynı referansı paylaşmıyorsa, yani bellekte aynı nesneyi göstermiyorsa, indexOf doğru sonuç vermez.
(1) (Dizide metin "Bob" yok)
(2) (Nesneler bellekte aynı referansı paylaşmıyor)
(3) (Nesneler bellekte aynı referansı paylaşmıyor)
*/

//EKSTRA NOT:

/*
JavaScript'de nesnelerin karşılaştırılması bellekte aynı referansa sahip olmadıkları sürece doğru sonuç vermez. 
İki nesne, içerikleri aynı olsa bile, bellekte farklı adreslere sahipse, JavaScript onları farklı nesneler olarak kabul eder. 
indexOf yöntemi, bellekte aynı referansa sahip olan nesneleri bulmak için içerik tabanlı karşılaştırma yapmaz.

Bu durumun nedeni, JavaScript'in nesneleri bellekte saklama şekli ve nesnelerin referans tipleri olmalarıdır. 
Nesneler, diğer değer tipleri gibi doğrudan belleğe kopyalanmazlar, ancak referanslarını saklarlar. 
Eğer aynı nesne oluşturulup, bir değişkene atanırsa, bu değişkenler aynı nesneyi bellekte gösterecek ve eşleşme sağlanacaktır:
*/

const person = { firstName: "Bob", lastName: "Smith" };
const person2 = ["Bob", "Smith" ];
const moreComplexArr3 = ["a", 2,  person, person2, ["Bob", "Smith" ], { firstName: "Alice", lastName: "Smith" }, { firstName: "Jon", lastName: "Smith" }, { firstName: "Jon", lastName: "Doe" }];

console.log(moreComplexArr3.indexOf(person)); // 2 (Aynı nesneyi gösterdiği için indeks 2 olarak bulunur)
console.log(moreComplexArr3.indexOf(person2)); // 3 (Aynı nesneyi gösterdiği için indeks 3 olarak bulunur)
console.log(moreComplexArr3.indexOf("a")); // 0 (Aynı nesneyi gösterdiği için indeks 0 olarak bulunur)
console.log(moreComplexArr3.indexOf(2)); // 1 (Aynı nesneyi gösterdiği için indeks 1 olarak bulunur)

/*
Ancak, indexOf yöntemi ile verilen arama örneği (örneğin {firstName: "Bob", lastName: "Smith"}), daha önce oluşturulan bir nesneyle tam olarak aynı içeriğe sahip olsa bile, 
bellekte farklı bir nesne olduğu için eşleşmeyecektir:
*/

console.log(moreComplexArr3.indexOf({ firstName: "Bob", lastName: "Smith" })); // -1 (Bellekte farklı bir nesne olarak kabul edilir)
console.log(moreComplexArr3.indexOf(["Bob", "Smith" ])); // -1 (Bellekte farklı bir nesne olarak kabul edilir)



/*
Eğer içeriği aynı olan bir nesneyi dizide bulmak istiyorsanız, findIndex yöntemini kullanarak nesnelerin içeriğini karşılaştırabilirsiniz, 
çünkü bu yöntemde kendi özel karşılaştırma fonksiyonunu belirleyebilirsiniz, böylece içerik tabanlı eşleşmeyi sağlayabilirsiniz.
*/

console.log(moreComplexArr2.findIndex((arrItem) => { //3
    return arrItem.lastName !== "Smith";
}))

console.log(moreComplexArr2.findIndex((arrItem) => arrItem.lastName !== "Smith" )) //3

//MAP FUNCTION

const blogPostsFromDatabase = [ 
    {title: 'How to use the map() function', category: 'uncategorized' }, 
    { title: 'What is JavaScript?', category: 'uncategorized' }, 
    {title: 'Why are you crazy enough to learn to code?', category: 'uncategorized' }, 
]; 

const data = blogPostsFromDatabase.map(arrItem => {
    arrItem.category = "Web Development";
    return arrItem;
});

console.log(data)

//FOR EACH FUNCTION

const array1 = [1,2,3]

for(let i = 0; i < array1.length; i++){
    console.log(array1[i]);
}

array1.forEach(arrItem => {console.log(arrItem)})

array1.forEach((arrItem, index) => {
    console.log(index + ". : " + arrItem)
})

const myColors = ['blue', 'red', 'purple', 'orange', 'green']; 
let orangeExists = false;

myColors.forEach(color => {
    if(color === "orange"){
        orangeExists = true;
    }
})
console.log(orangeExists) //true

//INCLUDES FUNCTION 

let blueExists = myColors.includes("blue")
console.log(blueExists)  //true

//FILTER FUNCTION

/*
Bu yöntem, belirli bir koşulu sağlayan dizi elemanlarını filtrelemek için kullanılır. 
Mevcut dizideki her bir eleman için belirtilen koşulu kontrol eder ve koşulu sağlayan (true değerini veren) elemanları yeni bir dizi olarak döndürür.
Filtreleme işlemlerinde sıklıkla kullanılır.
*/

const allOrders = [ 
    {productName: 'Tea pot', isDigital: false, isCancelled: false, isOpen: false}, 
    {productName: 'Blue Gildan Mens Hoodie', isDigital: false, isCancelled: true, isOpen: false }, 
    {productName: 'Code Complete Kindle Book', isDigital: true, isCancelled: true, isOpen: false}, 
    {productName: 'Atomic Habits Kindle Book', isDigital: true, isCancelled: false, isOpen: false}]

const digitalCancelledOrders = allOrders.filter(arrItem => {
    return arrItem.isDigital && arrItem.isCancelled;
})

console.log(digitalCancelledOrders)
    


//REDUCE FUNCTION

/*
JavaScript'de reduce, bir dizi üzerinde dolaşarak elemanları birleştirme, toplama, bir değer hesaplama gibi işlemleri gerçekleştirmek için kullanılan bir dizi yöntemidir.
reduce yöntemi, tüm dizi elemanları üzerinde dolaşıldığında, son birleştirilmiş veya toplanmış sonucu döndürür.
*/

const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 3);
console.log(sum); // Çıktı: 18 (3 + 1 + 2 + 3 + 4 + 5 = 15)

/*
Burada reduce yöntemi, her elemanı toplar ve sonucu biriktirilen sum değeri olarak döndürür.

Eğer başlangıç değeri (initialValue) belirtilmezse, reduce yöntemi ilk adımda accumulator olarak dizinin ilk elemanını ve currentValue olarak dizinin ikinci elemanını alır. 
Eğer başlangıç değeri belirtilirse, ilk adımda accumulator olarak başlangıç değerini ve currentValue olarak dizinin ilk elemanını alır.
*/

const sum2 = numbers.reduce((accumulator, currentValue) => accumulator + currentValue); // bu kısma /numbers.length yazarak ortalamayı da bulabiliriz
console.log(sum2); // Çıktı: 15 (1 + 2 + 3 + 4 + 5 = 15)

//Farklı bir reduce yazım örneği

function reducerCallBack(sum, arrItem){
    return sum += arrItem;
}

const result = numbers.reduce(reducerCallBack, 0);

console.log(result)



