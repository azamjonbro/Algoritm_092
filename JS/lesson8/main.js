// let arr = ["Sa,lom","a,l,i,k"]
// let newarr = arr.map((item)=>{
//  return item.replaceAll(",",'')
// })
// console.log(newarr);

// let bekzodarr = ["sa,lom", "a,l,i,k"];

// let result = arr
//   .map(word => word.replaceAll(",", ""))
//   .join(", ");

// console.log(result)
"use strict";
let productList = document.querySelector(".product-list");

const getallproducts = () => {
  productList.innerHTML = "Loading...";
  fetch("http://localhost:3500/books")
    .then((response) => response.json())
    .then((data) => {
      productList.innerHTML = "";
      data.length
        ? data.map((item) => {
            let product = document.createElement("div");
            product.classList.add("product");

            product.innerHTML = `
      <img src="${item.image}" loading="lazy" width="300" height="300" alt="  product img">
      <h2 class="product-title">${item.title}</h2>
      <a href="#">Author: <b>${item.author}</b></a>
      <p>Year: <b>${item.year}</b></p>
      <button class="show">See all</button>
     `;

            productList.appendChild(product);
          })
        : (productList.innerHTML = "Product is not defined");
    });
};

getallproducts();

let createProduct = document.querySelector("#create-product");
let sectionProduct = document.querySelector(".product-section");
let createForm = document.querySelector(".product-create");

createProduct.addEventListener("click", () => {
  // sectionProduct.style.display="none"
  //   createForm.style.display="flex"
  createForm.classList.add("active-form");
});
createForm.addEventListener("click", (event) => {
  if (event.target.classList[0] == "product-create") {
    createForm.classList.remove("active-form");
  }
});

let notif = document.querySelector(".notification");
let ProductBtnCreate = document.querySelector(".create-product-btn");
ProductBtnCreate.addEventListener("click", () => {
  let title = document.querySelector("#title").value.trim();
  let author = document.querySelector("#author").value.trim();
  let year = document.querySelector("#year").value.trim();
  let image = document.querySelector("#image").value.trim();
  if (!title || !author || !year || !image) {
    setInterval(() => {
      notif.textContent = "Iltimos parameterlarni to'g'ri kiriting";
      notif.style.display = "flex";
    }, 3000);

  } else {
    let book = {
      title: title,
      author: author,
      year: year,
      image: image,
    };
    fetch("http://localhost:3500/books", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(book),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data) {
          setInterval(() => {
            notif.textContent = "Product successfully created";
            notif.style.display = "flex";
            notif.style.background = "green";
          }, 3000);
            createForm.classList.remove("active-form");
            getallproducts()

         }
      });
   }
   notif.style.display = "none";
});

// let book ={
//  title:"Ikki eshik orasi",
//  author:"O'tkir Hoshimov",
//  year:1995,
//  image:"https://picsum.photos/id/290/290/290"
// }
// document.querySelector(".btn").addEventListener('click',function (){
//  fetch("http://localhost:3500/books",{
//  method:"POST",
//  headers:{"Content-Type":"application/json"},
//  body:JSON.stringify(book)
// })
// })
