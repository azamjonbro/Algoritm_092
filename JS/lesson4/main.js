// doimiy kichik hajmga ega hotira -> localstorage
// vaqtinchalik kichik hotira ->  sessionstorage
// bytelarga yani characterlarga asoslangan juda bir kichik hotira bu -> cookie


// Localstorage bu doimiy ammo kam hajmga ega hotira hisoblanib u o'ziga har doim stringda qiymat qabul qiladi. Uning hajmi 5mb hisoblanib u juda ko'p malumotlarni o'ziga saqlay olmaydi. Odatda localstoragega token key, username, user profile img address shunga o'xshash qiymatlar saqlanadi.



localStorage.setItem('myFavouriteGirlName',"Laylo"); // setItem methodi bu hotiraga qiymatni qo'shib beradi. va u obj shaklda o'ziga malumot qabul qiladi. key ni ham stringda yozish kerak.


function getUserInfoWithFavouriteName(){
 let qiymat = localStorage.getItem("myFavouriteGirl") ?? [] // bu esa birinchi uchragan qiymatni oladi huddi findga o'xshab va agar notogri qiymat bersak u bizga (null)

 // ?: agar qiymat true bolsa ? shunday bolsin : aks holda -> bu narsa ternary operatori hisoblanadi.
 console.log(qiymat);
};
getUserInfoWithFavouriteName();

// localStorage.clear()  -> bu eski qiymatlarni ham tozalab tashlaydi.
localStorage.removeItem("myFavouriteGirlName") // bu esa faqat bitta qiymatni o'chiradi

window.location.href="https://github.com/azamjonbro"


// let myFavouriteCar={
//  "name":"Lamborghini Avendater",
//  color:"LightGreen",
//  horsepower: 540,
//  "timeto100km/s":3.2
 
// }
// console.log(myFavouriteCar);
