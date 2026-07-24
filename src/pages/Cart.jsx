import { Footer } from "../components/Footer";
import { useSelector } from "react-redux";

export const Cart = () => {

    const cart = useSelector((state) => state.cart);

    return (
        <>
            <h1>Sepetim</h1>

            <h3>Sepette {cart.length} ürün var</h3>

            {cart.map((item) => (
                <div key={item.id}>
                    <h4>{item.title}</h4>
                    <p>{item.price} ₺</p>
                </div>
            ))}

            <Footer />
        </>
    );
};