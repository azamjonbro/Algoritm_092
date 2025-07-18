fetch("https://fakestoreapi.com/products")
.then((res)=> res.json())
.then((data)=>
{

 const productList = document.querySelector(".product-list");
 data.forEach((product) => {
   const productItem = document.createElement("div");
   productItem.classList.add("product-item");
   productItem.innerHTML = `
     <img width="290" height="290" src="${product.image}" alt="${product.title}">
     <h2>${product.title.slice(0,30)}</h2>
     <p>${product.description?.slice(0,50)}</p>
     <span>${product.price} $</span>
   `;
   productList.appendChild(productItem);
 });
}
)