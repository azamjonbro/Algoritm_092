let girls = [
 {
  name: "Laylo",
  age: 18,
  hairColor: "black",
  weight: 40,
  height: 172,
  face: "emotional",
  style: "old style, white black",
  fashion: "uzbek",
  img:"./assets/images/i.webp",
  langueages: [{
   uz: "native",
   en: "Ielts 6.5",
   ru: "Cefr B2",
  }]
 },
  {
  name: "Dilnoza",
  age: 22,
  hairColor: "brown",
  weight: 52,
  height: 165,
  face: "smiling",
  style: "modern, casual",
  fashion: "european",
  img: "./assets/images/girl2.webp",
  langueages: [{
   uz: "native",
   en: "Upper-Intermediate",
   ru: "Intermediate",
  }]
  },
  {
  name: "Gulbahor",
  age: 25,
  hairColor: "blonde",
  weight: 48,
  height: 170,
  face: "cheerful",
  style: "classic, elegant",
  fashion: "turkish",
  img: "./assets/images/girl3.webp",
  langueages: [{
   uz: "native",
   en: "Pre-Intermediate",
   ru: "Elementary",
  }]
  },
  {
  name: "Malika",
  age: 20,
  hairColor: "black",
  weight: 45,
  height: 168,
  face: "serious",
  style: "sporty",
  fashion: "korean",
  img: "./assets/images/girl8.webp",
  langueages: [{
   uz: "native",
   en: "Intermediate",
   ru: "Beginner",
  }]
  },
  {
  name: "Shahnoza",
  age: 23,
  hairColor: "dark brown",
  weight: 50,
  height: 162,
  face: "friendly",
  style: "vintage",
  fashion: "uzbek",
  img: "./assets/images/girl5.webp",
  langueages: [{
   uz: "native",
   en: "Advanced",
   ru: "Upper-Intermediate",
  }]
  },
  {
  name: "Zilola",
  age: 19,
  hairColor: "auburn",
  weight: 43,
  height: 160,
  face: "happy",
  style: "minimalist",
  fashion: "casual",
  img: "./assets/images/gitl6.webp",
  langueages: [{
   uz: "native",
   en: "IELTS 7.0",
   ru: "Intermediate",
  }]
  },
  {
  name: "Rayhona",
  age: 21,
  hairColor: "light brown",
  weight: 47,
  height: 166,
  face: "thoughtful",
  style: "chic",
  fashion: "european",
  img: "./assets/images/girl4.webp",
  langueages: [{
   uz: "native",
   en: "Upper-Intermediate",
   ru: "Pre-Intermediate",
  }]
  }
]


let productList = document.querySelector(".product-list")
girls.forEach((item)=>{
  let product = document.createElement("div")

  product.classList.add("product")

  product.innerHTML=`
    <div className="product-imgbox">
      <img src="${item.img}"/>
    </div>

    <div className="product-content">
      <h2 class="product-title">${item.name}</h2>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Content</th>
          </tr>
        </thead>
        <tbody>
        <tr>
            <td>Age</td>
            <td>${item.age}</td>
          </tr>
          <tr>
            <td>hair color</td>
            <td>${item.hairColor}</td>
          </tr>
          <tr>
            <td>Face</td>
            <td>${item.face}</td>
          </tr>
          <tr>
            <td>Weight</td>
            <td>${item.weight}</td>
          </tr>
          <tr>
            <td>Height</td>
            <td>${item.height}</td>
          </tr>
          <tr>
            <td>fashion</td>
            <td>${item.fashion}</td>
          </tr>
          <tr>
            <td>Style</td>
            <td>${item.style}</td>
          </tr>
        </tbody>
      </table>
    </div>
  `
  productList.appendChild(product)
  
})