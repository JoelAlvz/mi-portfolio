const express = require("express");
const cors = require("cors");
const Mailjet = require("node-mailjet");
const fs = require("fs");

const app = express();
app.use(cors());
app.use(express.json());

// Configura tu API Key y Secret de Mailjet
const mailjet = Mailjet.apiConnect(
  "55373a3fa81a1a24b5e44317c3c8229e",
  "7330d5a8dfdd280751e7649646e3fdf3"
);

// Ruta para enviar correo
app.post("/send-email", async (req, res) => {
  const { email } = req.body;

  try {
    const request = await mailjet
      .post("send", { version: "v3.1" })
      .request({
        Messages: [
          {
            From: {
              Email: "joelalvareznuevo@gmail.com",
              Name: "Joel",
            },
            To: [
              {
                Email: email,
              },
            ],
            Subject: "Mi Curriculum",
            TextPart: "Adjunto encontrarás mi CV",
            Attachments: [
              {
                ContentType: "application/pdf",
                Filename: "Curriculum.pdf",
                Base64Content: fs.readFileSync("Curriculum.pdf").toString("base64"),
              },
            ],
          },
        ],
      });

    res.json({ success: true, data: request.body });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: err.message });
  }
});

// Arrancar servidor
const PORT = 5000;
app.listen(PORT, () => {
  console.log(` Servidor corriendo en http://localhost:${PORT}`);
});
