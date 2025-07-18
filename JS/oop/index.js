// class BankAccount {
//     #balance = 0; // private field

//     constructor(owner) {
//         this.owner = owner;
//     }

//     deposit(amount) {
//         if (amount > 0) {
//             this.#balance += amount;
//             console.log(`💰 ${amount} so'm qo'shildi`);
//         }
//     }

//     getBalance() {
//         return this.#balance;
//     }
// }

// const acc = new BankAccount("Azamjon");
// acc.deposit(1000);
// let balance = document.querySelector("#balance");
// balance.textContent = acc.getBalance(); // Display balance in the HTML element
// console.log(acc.owner+" nima gap oka"); // Log the owner to the console
// let btn = document.querySelector(".deposit");

// btn.addEventListener("click", () => {
//     let amount = document.querySelector("#amount").value;
//     acc.deposit(Number(amount));
//     balance.textContent = ""
//     balance.textContent = acc.getBalance(); // Update balance in the HTML element
//     console.log(typeof BigInt(acc.getBalance())); // Check the type of the balance
//    });

// console.log(acc.getBalance()); 
// // console.log(acc.#balance);     



// let obj = {
//  name: "Azamjon",
//  data: function () { console.log(this.name); }
 

// } // yoki .data.call({name: "Azamjon"})

//  // Outputs: Azamjon
// obj.data()



// class Animal {
//     constructor(name) {
//         this.name = name;
//     }
//     speak() {
//         console.log(`${this.name} ovoz chiqaryapti`);
//     }
// }

// class Dog extends Animal {
//     speak() {
//         console.log(`${this.name} vovullayapti 🐶`);
//     }
// }

// class Donkey extends Animal {
//     speak() {
//         console.log(`${this.name} uuhh uuhh qilayapti 🐴`);
//     }
// }

// const dog = new Dog("Rex");
// dog.speak(); // Rex vovullayapti 🐶

// const donkey = new Donkey("Jack");
// donkey.speak(); // Jack uuhh uuhh qilayapti 🐴
// class Cat extends Animal {
//  constructor(name) {
//   super(name); // Call the parent class constructor
//  }
//  speak() {
//   console.log(`${this.name} miyovlayapti 🐱`);
//  }
// }

// const cat = new Cat("Murka");
// cat.speak(); // Murka miyovlayapti 🐱



// class Bird {
//     fly() {
//         console.log("Quyoshga qarab uchmoqda 🕊️");
//     }
// }

// class Airplane {
//     fly() {
//         console.log("Samolyot uchmoqda ✈️");
//     }// -> bbu narsa bizda method hisoblanadi va u  nuqta bilan chaqirilganida yoki class ishga tushganida ishlab ketadi.
// }

// class FLY {
//     fly() {
//         console.log("Uchish uchun tayyorlanmoqda...");
//     }
// }

// function makeItFly(flier) {
//     flier.fly();
// }

// makeItFly(new FLY()); // Uchish uchun tayyorlanmoqda...
// makeItFly(new Bird());
// makeItFly(new Airplane());


// JavaScriptda "abstract" kalit so'zi mavjud emas, bu faqat TypeScript yoki boshqa ba'zi tillarda ishlatiladi.
// JavaScriptda majburiy metodlarni faqat "throw" orqali bildirishingiz mumkin:

class Shape {
 constructor(color) {
  this.color = color;
 }
 area() {
  throw new Error("area() metodi majburiy va subclassda aniqlanishi kerak");
 }
}

class Circle extends Shape {
 constructor(radius, color) {
  super(color);
  this.radius = radius;
 }
 area() {
  return Math.PI * this.radius ** 2;
 }
}

class Square extends Shape {
 constructor(side, color) {
  super(color);
  this.side = side;
 }
 area() {
  return this.side ** 2;
 }
}

const circle = new Circle(5, "qizil");
console.log(`Doira maydoni: ${String(circle.area())?.slice(0,5)} va rangi: ${circle.color}`);
const square = new Square(4, "ko'k");
console.log(`Kvadrat maydoni: ${square.area()} va rangi: ${square.color}`);
// const shape = new Shape("sariq"); // Bu xato beradi, chunki
