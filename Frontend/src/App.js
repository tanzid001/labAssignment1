import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  useEffect(()=>{
    fetch("http://localhost:5000/api/home-page")
    .then(res=>res.json())
    .then(result=>{
      console.log(result)
      localStorage.setItem("token", `${result.token}`);
    })
  },[])
 function handleSubmit(event){
 event.preventDefault();
   const information = {
    name: name,
    email: email,
    password: password
   }
   fetch("http://localhost:5000/api/user-data",{
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify(information)
   })
   .then(res=>res.json())
   .then(data=>{
    console.log(data);
   })
   
   console.log(information);
 } 
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
      <div>
      <label>Name:</label>
      <input onChange={(event)=>setName(event.target.value)} type="text" name="name" placeholder='Enter Name'/>
      </div>
      <div>
      <label>Email:</label>
      <input onChange={(event)=>setEmail(event.target.value)} type="email" name="email" placeholder='Enter Email'/>
      </div>
      <div>
      <label>Password:</label>
      <input onChange={(event)=>setPassword(event.target.value)} type="password" name="password" placeholder='Enter password'/>
      </div>
      <input type="submit" value="Submit"/>
      
      </form>
     
    </div>
  );
}

export default App;
