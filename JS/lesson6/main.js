// // Parse bu js ichida yozgan array yoki objctlarimiz
// // stringify parameter propertysi yani qiymati key valuedan tashkil topib stringdan yozilsa bu stringify hisoblanadi
// let girls = [
//  {
//   name:"Laylo", 
//   weigth:45,
//   height:1.65,
//   color:"purple",
//   eyesColor:"white, green",
//   face:"Emotional",
//   fashion:"korean"
//  },
//  {
//   name: "Malika",
//   weigth: 50,
//   height: 1.70,
//   color: "blue",
//   eyesColor: "brown",
//   face: "Cheerful",
//   fashion: "classic"
//  },
//  {
//   name: "Dilnoza",
//   weigth: 48,
//   height: 1.60,
//   color: "red",
//   eyesColor: "hazel",
//   face: "Serious",
//   fashion: "sporty"
//  },
//  {
//   name: "Shahnoza",
//   weigth: 52,
//   height: 1.68,
//   color: "green",
//   eyesColor: "blue",
//   face: "Smiling",
//   fashion: "casual"
//  },
//  {
//   name: "Gulnoza",
//   weigth: 47,
//   height: 1.62,
//   color: "yellow",
//   eyesColor: "green",
//   face: "Calm",
//   fashion: "vintage"
//  },
//  {
//   name: "Zilola",
//   weigth: 49,
//   height: 1.66,
//   color: "pink",
//   eyesColor: "gray",
//   face: "Friendly",
//   fashion: "modern"
//  },
//  {
//   name: "Nodira",
//   weigth: 53,
//   height: 1.72,
//   color: "orange",
//   eyesColor: "black",
//   face: "Confident",
//   fashion: "elegant"
//  },
//  {
//   name: "Dilrabo",
//   weigth: 46,
//   height: 1.58,
//   color: "white",
//   eyesColor: "blue, green",
//   face: "Joyful",
//   fashion: "boho"
//  },
//  {
//   name: "Rayhona",
//   weigth: 51,
//   height: 1.69,
//   color: "violet",
//   eyesColor: "brown, green",
//   face: "Thoughtful",
//   fashion: "minimalist"
//  },
//  {
//   name: "Madina",
//   weigth: 50,
//   height: 1.64,
//   color: "turquoise",
//   eyesColor: "amber",
//   face: "Gentle",
//   fashion: "street"
//  }
// ]

// let userInfo = {
//  username:"admin",
//  password:"P@ssw0rd"
// }

// fetch("https://api.kodx.uz/api/login",{
//  method:"POST",
//  headers:{
//   "Content-Type":"application/json",
//   // "Authorization":null,
//   // "Cookies-Data":null,
//  },
//  body:JSON.stringify(userInfo),
// })
// .then((res)=>res.json())
// .then((data)=>{
//  console.log(data);
// })


// x2-2y2=1

// function getResult(limit){
//  let solution = []
 
//  for(let x = -limit; x<=limit;x++){
//   for(let y = -limit; y<=limit;y++){
//    if(x*x-2*y*y===1){
//     solution.push({x,y})
//    }
//   }
//  }
//  return solution
// }

// console.log(getResult(10000));
