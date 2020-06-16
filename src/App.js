import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState(null);

  const getProfile = async () => {
    await fetch(`https://api.github.com/users/devervan`).then(res => res.json())
      .then(data => {
        // console.log('data', data)
        setData(data);
      })
  }

  useEffect(() => {
    getProfile();
  }, [])
  return (
    <div className="home">
      <div class="fb-login-button" data-size="large" data-button-type="continue_with" data-layout="default" data-auto-logout-link="false" data-use-continue-as="false" data-width=""></div>
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
          <hr />
          {data && (
            <div style={{ padding: '1rem', background: '#ffffff', borderRadius: '12' }}>
              <p>Berikut adalah data dinamis yang diambil dari github profile saya:</p>
              <p>Username: {data.login}</p>
              <p><img src={data.avatar_url} alt={data.login} width="60" /></p>
              <p>Jumlah repo: {data.public_repos}</p>
              <p>URL Github: <a href={data.html_url}>{data.html_url}</a></p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}

export default App;
