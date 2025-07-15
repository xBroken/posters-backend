
const admin = require('firebase-admin');
const serviceAccount = require('./firebase-key.json'); // Adicione sua chave aqui

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: process.env.FIREBASE_BUCKET_URL,
});

const bucket = admin.storage().bucket();

const uploadToFirebase = async (file) => {
  const filename = Date.now() + "-" + file.originalname;
  const fileUpload = bucket.file(filename);

  await fileUpload.save(file.buffer, {
    metadata: { contentType: file.mimetype },
  });

  await fileUpload.makePublic();
  return `https://storage.googleapis.com/${bucket.name}/${filename}`;
};

module.exports = { uploadToFirebase };
