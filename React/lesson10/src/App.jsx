import React, {useState, useRef, useEffect} from 'react'

function App() {
  let  [user, setUser]= useState("laylo")
  let [useEffectniqaytaishlat, setSet] = useState(false)
  useEffectniqaytaishlat = 15
  let data  = useRef("Laylo")
  const addCount=()=>{
    // if(useEffectniqaytaishlat){
    //   setSet(false)

    // }
    // else{
    //   setSet(true)
    // }
    setSet(!useEffectniqaytaishlat)

  }
  useEffect(() => {
  setUser("Muhlisa");
  console.log("Dumbullar hammelar etibor berib otirilar");
}, [useEffectniqaytaishlat]);
  // dependencies array


  return (
    <div>
      {user}
      <button onClick={addCount}></button>
    </div> 
  )
}

export default App 
