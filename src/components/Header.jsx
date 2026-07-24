import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">

       
        <h1 className="text-2xl font-bold text-blue-600">
          🛒 ZNZ Store
        </h1>

        
        <nav className="flex gap-8 font-medium">

          <Link className="hover:text-blue-600 transition" to="/">
            Ana Sayfa
          </Link>

          <Link className="hover:text-blue-600 transition" to="/products">
            Ürünler
          </Link>

          <Link className="hover:text-blue-600 transition" to="/about">
            Hakkımızda
          </Link>

          <Link className="hover:text-blue-600 transition" to="/contact">
            İletişim
          </Link>

        </nav>

       
        <div className="flex gap-3">

          <Link
            to="/login"
            className="px-5 py-2 rounded-lg border border-blue-600 text-blue-600 hover:bg-blue-50 transition"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="px-5 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
          >
            Register
          </Link>

          <Link
            to="/cart"
            className="px-5 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
          >
            Sepetim
          </Link>

        </div>

      </div>
    </header>
  );
};