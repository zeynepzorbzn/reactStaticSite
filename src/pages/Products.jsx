import { useState } from "react";
import { useEffect } from "react";
import  axios  from "axios";

export const Products = () => {
const [products, setProducts] = useState([]);
const [loading, setLoading] = useState (true);
const [error, setError] = useState(false); 

    useEffect(() => {

        console.log("Ürünler Listelendi.");
        axios
             .get("https://fakestoreapi.com/products")
             
             .then((res) => {setProducts(res.data);})
                            
             .catch(() => {setError(true);})

             .finally( () =>{ setLoading(false) ; } )
            
            }, []);                                                   
    
  return (
    <>
       { error ? (<h2>BİR HATA OLUŞTU. LÜTFEN TEKRAR DENEYİN!</h2>) : (loading ? ( <h2>Loading...</h2> ) : (products.map((product) => (
            <h3 key={product.id}>{product.title}</h3> )) )) } 
    </>
    ); 
};