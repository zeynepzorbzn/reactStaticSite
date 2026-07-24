import { useState } from "react"


export const User = () => {
    
    const [user, setUser] = useState({
     name : "Zeynep",
     age : 22 , 
     city : "Ankara"
    });
 
    return (
        <div className="bg-white rounded-2xl shadow-lg p-8 mt-8">
      
          <h2 className="text-2xl font-bold mb-5">
            👤 Kullanıcı Bilgileri
          </h2>
      
          <p className="mb-2">
            <strong>İsim:</strong> {user.name}
          </p>
      
          <p className="mb-2">
            <strong>Yaş:</strong> {user.age}
          </p>
      
          <p className="mb-6">
            <strong>Şehir:</strong> {user.city}
          </p>
      
          <button
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl transition"
            onClick={() =>
              setUser({
                name: "Nur",
                age: 25,
                city: "Elazığ",
              })
            }
          >
            Kullanıcı Değiştir
          </button>
      
        </div>
      );
 
 };