let arr = ["Salom", "alik", "sarvinoz","saida"]

let result = arr.filter((item)=> item.charAt(0).toLocaleLowerCase()=="s")

console.log(result);


let girls = ["Laylo", "Guli", "Gulshoda", "dilnavoz","Muslima","Dilshoda"]

let oldgirl = girls.find((item)=> item.charAt(0).toLocaleUpperCase()=="D")


let allProduct = document.querySelectorAll(".product")

console.log(allProduct);
allProduct.forEach((e)=>{
 e.innerHTML="Salom"
})

// Array qiymatini o'ziga hech qachon (node-list) ichiga hech qachon valueni innerHTML qilib qosha olmaysizlar. Arrayda kelgan nodeListni aylanib chiqib har bir qiymatga bittadan value berishingiz to'g'ri hisoblanadi




