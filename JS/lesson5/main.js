// let girls = ["laylo", "oygul","gulbahor","shaxnoza", "Mavjuda","Dilnoza","Mubina","Munira", "Munisa"]

// for(let laylo = 0; laylo<girls.length; laylo++){
//  laylo%2==1?console.log(girls[laylo]):""
// }




       //address
fetch("https://jsonplaceholder.typicode.com/users")
.then((response)=>response.json())
.then((data)=>{
 console.log(data);
})
.catch((err)=>{
 console.error(err);
})

// let son = 2

// console.log(String(son));


let sonnitop="sfsadhjk34k123bkj4l1".split("")

let result = [].sort((a,b)=> a-b)
sonnitop.forEach((item)=>{
 if(!isNaN(item)){
  console.log(item);
  result.push(Number.item)
 }
})

console.log(result);

