export const Contact = () => {

    return(
      <>
      <div className="bg-white rounded-2xl shadow-lg p-10">
      <h1 className="text-4xl font-bold text-blue-600 mb-6">
        İletişim
      </h1>

      <div className="space-y-4">

        <input
          placeholder="Ad Soyad"
          className="w-full border rounded-lg p-3"
        />

        <input
          placeholder="E-Posta"
          className="w-full border rounded-lg p-3"
        />

        <textarea
          rows="5"
          placeholder="Mesajınız"
          className="w-full border rounded-lg p-3"
        />

        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition">
          Gönder
        </button>

      <p>Telefon: 0531111111</p>
      <p>Mail : asdfsgdfh@gmail.com</p>
      <>Adres: Ankara Türkiye</>

      </div>

    </div>
      </>
    );
};