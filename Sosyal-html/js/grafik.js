const express = require('express');
const admin = require('firebase-admin');
const Chart = require('chart.js');

const app = express();
const PORT = 3000;

// Firebase Admin SDK ayarları
const serviceAccount = require('./serviceAccountKey.json');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://sosyalmedyabagimliligi-62b40-default-rtdb.firebaseio.com'
});

// Firestore veritabanı referansı
const db = admin.firestore();

// Ana sayfa
app.get('/', async (req, res) => {
  try {
    
    // Firestore'dan verileri çek
const verilerSnapshot = await db.collection('https://console.firebase.google.com/project/sosyalmedyabagimliligi-62b40/database/sosyalmedyabagimliligi-62b40-default-rtdb/data/~2F').get();

const ref = db.ref('11_10_2023 10:56:02 PM');
ref.once('value', (snapshot) => {
  const data = snapshot.val();
  if (data) {
    // Veriyi parçalara ayır
    Object.keys(data).forEach((key) => {
      const parca = data[key];
      console.log('Parça:', parca);

    });
  } else {
    console.log('Veri bulunamadı.');
  }
}).catch((error) => {
  console.error('Veri çekme hatası:', error);
});

   
    const grafikVerileri = {
      labels: veriler.map(veri => veri.x),
      datasets: [{
        label: 'Veri Grafiği',
        data: veriler.map(veri => veri.y),
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1
      }]
    };

    // Grafik çizimi veya başka işlemler
    res.json(grafikVerileri);
  } catch (error) {
    console.error('Veri çekme hatası:', error);
    res.status(500).send('Veri çekme hatası');
  }
});

// Sunucuyu başlat
app.listen(PORT, () => {
  console.log(`Sunucu ${PORT} portunda çalışıyor`);
});
