const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 8080; // ou tout autre port de votre choix

const db = mysql.createConnection({
    host: 'localhost',
    user: 'transversal',
    password: 'Aqwxszedc321!!',
    database: 'transversal',
});

app.use(express.json());

app.use((res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

db.connect((err) => {
    if (err) {
        console.error('Erreur de connexion à la base de données :', err);
    } else {
        console.log('Connecté à la base de données MySQL');
    }
});

app.listen(port, () => {
    console.log(`Serveur Express écoutant sur le port ${port}`);
});

app.get('/habitants', (req, res) => {
    const query = 'SELECT * FROM inhabitant';

    db.query(query, (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json(result);
        }
    });
});

app.post('/habitants', (req, res) => {
    const { name, surname, address, email, phone } = req.body;

    if (!name || !surname || !address || !email || !phone) {
        return res.status(400).json({ error: 'Tous les champs doivent être remplis.' });
    }

    const query = 'INSERT INTO inhabitant (name, surname, address, email, phone) VALUES (?, ?, ?, ?, ?)';
    const values = [name, surname, address, email, phone];

    db.query(query, values, (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json({ id: result.insertId, message: 'Habitant ajouté avec succès.' });
        }
    });
});

app.delete('/habitants/:id', (req, res) => {
    const habitantId = req.params.id;
  
    if (!habitantId) {
      return res.status(400).json({ error: 'ID d\'habitant manquant dans la requête.' });
    }
  
    const query = 'DELETE FROM inhabitant WHERE id = ?';
  
    db.query(query, habitantId, (err, result) => {
      if (err) {
        res.status(500).json({ error: err.message });
      } else if (result.affectedRows === 0) {
        res.status(404).json({ error: 'Aucun habitant trouvé avec cet ID.' });
      } else {
        res.json({ message: 'Habitant supprimé avec succès.' });
      }
    });
  });

  // Route GET pour récupérer un habitant par nom
app.get('/habitants/nom/:name', (req, res) => {
    const habitantName = req.params.name;
  
    if (!habitantName) {
      return res.status(400).json({ error: 'Nom d\'habitant manquant dans la requête.' });
    }
  
    const query = 'SELECT * FROM inhabitant WHERE name = ?';
  
    db.query(query, habitantName, (err, result) => {
      if (err) {
        res.status(500).json({ error: err.message });
      } else if (result.length === 0) {
        res.status(404).json({ error: 'Aucun habitant trouvé avec ce nom.' });
      } else {
        res.json(result);
      }
    });
  });
  
  // Route GET pour récupérer un habitant par adresse
  app.get('/habitants/adresse/:address', (req, res) => {
    const habitantAddress = req.params.address;
  
    if (!habitantAddress) {
      return res.status(400).json({ error: 'Adresse d\'habitant manquante dans la requête.' });
    }
  
    const query = 'SELECT * FROM inhabitant WHERE address = ?';
  
    db.query(query, habitantAddress, (err, result) => {
      if (err) {
        res.status(500).json({ error: err.message });
      } else if (result.length === 0) {
        res.status(404).json({ error: 'Aucun habitant trouvé avec cette adresse.' });
      } else {
        res.json(result);
      }
    });
  });
