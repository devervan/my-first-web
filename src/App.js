import React from 'react';
import './App.css';

function App() {
  return (
    <div className="home">
      <div className="row">
        <div className="col shrink">
          <div className="image-avatar">

            <img src="https://www.ervandra.com/wp-content/uploads/2020/06/profile-transparent.png" width="200" alt="Ervandra Halim" />
          </div>
        </div>
        <div className="col">
          <h1>Hai, Saya Ervandra Halim</h1>
          <p>Saya membantu banyak anak muda untuk mendapatkan banyak informasi mengenai Web dan Digital Marketing</p>
          <p>Saat ini saya membuat web apps pertama saya menggunakan React.js</p>
          <p>Di dukung oleh GitHub sebagai public repository</p>
          <p>Dan Netlify sebagai server / hosting providernya</p>
          <p>Dengan ini web-apps ini bisa langsung live di internet dan dapat di akses oleh siapapun. Gratis!</p>
        </div>

      </div>
    </div>
  );
}

export default App;
