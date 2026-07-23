import { useState } from "react";
import { useEffect } from "react";
import { Footer } from "../components/Footer";

export const Cart = () => {


    const [count, setCount] = useState(0); 
    
    useEffect(() => {
    console.log("Sepetteki ürün sayısı arttırıldı. : ", count )}, [count]);


    return (
    <>   
<h1>Sepetim</h1>
<h3>{count}</h3>
       <button onClick={() => setCount(count+1)}  >
        Sepetteki ürün sayısını arttır.
        </button>
        <Footer />
    </>
    );



};