import { useState } from "react"


export const User = () => {
    
    const [user, setUser] = useState({
     name : "Zeynep",
     age : 22 , 
     city : "Ankara"
    });
 
    return ( 
    <>
    <p>Kullanıcı : {user.name} {user.age} {user.city}</p>
     
     <button onClick= {() => setUser({name:"Nur", age:25, city:"Elazığ"})}>
      Kullanıcı Değiştir
     </button> 
     </>
   
 );
 
 };