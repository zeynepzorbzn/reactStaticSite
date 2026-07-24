export const Login = () => {
    return (
      <div className="flex justify-center items-center min-h-[70vh]">
        <div className="bg-white w-96 rounded-2xl shadow-lg p-8">
  
          <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
            Giriş Yap
          </h1>
  
          <input
            type="email"
            placeholder="E-Posta"
            className="w-full border rounded-lg p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
  
          <input
            type="password"
            placeholder="Şifre"
            className="w-full border rounded-lg p-3 mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
  
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition">
            Login
          </button>
  
        </div>
      </div>
    );
  };