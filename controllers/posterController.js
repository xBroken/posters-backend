
const { uploadToFirebase } = require('../services/firebaseService');

const uploadPoster = async (req, res) => {
    try {
        if (!req.file) return res.status(400).json({ error: 'Arquivo não enviado' });
        const url = await uploadToFirebase(req.file);
        res.status(201).json({ url });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao fazer upload do pôster' });
    }
};

module.exports = { uploadPoster };
