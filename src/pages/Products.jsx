import { useEffect, useState } from "react";
import { getProducts } from "../service/productService";
import { useDispatch } from "react-redux";
import { addToCart } from "/src/app/cartSlice";

export const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const dispatch = useDispatch();
  const handleAdd = (product) => {
    dispatch(addToCart(product));
}

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <h2 className="text-2xl font-bold">Loading...</h2>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <h2 className="text-red-500 text-2xl font-bold">
          Bir hata oluştu. Lütfen tekrar deneyin!
        </h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-center mb-10">
        🛒 Fake Store
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl shadow p-4 hover:shadow-xl hover:scale-105 transition duration-300"
          >
            <img 
              src={product.image}
              alt={product.title}
              className="w-full h-52 object-contain"/>

            <h2 className="text-lg font-bold mt-4 line-clamp-2">
              {product.title}
            </h2>

            <p className="text-gray-500 mt-2 capitalize">
              {product.category}
            </p>

            <p className="text-2xl font-bold text-blue-600 mt-4">
              {product.price}TL
            </p>

            <button className="w-full mt-4 bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-lg transition"  onClick={() => handleAdd(product)}>
              Sepete Ekle
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
