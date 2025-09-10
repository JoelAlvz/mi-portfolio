import mailjet from "node-mailjet";
import path from "path";
import { promises as fs } from "fs";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método no permitido" });
  }
  console.log("LONGITUD PUBLIC KEY:", process.env.MJ_APIKEY_PUBLIC?.length);
  console.log("LONGITUD PRIVATE KEY:", process.env.MJ_APIKEY_PRIVATE?.length);
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ error: "Falta el email" });
    }

  
    const client = mailjet.apiConnect(
      process.env.MJ_APIKEY_PUBLIC,
      process.env.MJ_APIKEY_PRIVATE
    );

   
    const filePath = path.join(process.cwd(), "public", "Curriculum.pdf");
    const fileBuffer = await fs.readFile(filePath);
    const base64PDF = fileBuffer.toString("base64");

   
    const request = await client.post("send", { version: "v3.1" }).request({
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
          TextPart: "Adjunto encontrarás mi CV en PDF.",
          Attachments: [
            {
              ContentType: "application/pdf",
              Filename: "Curriculum.pdf",
              Base64Content: base64PDF,
            },
          ],
        },
      ],
    });

    res.status(200).json({ success: true, data: request.body });
  } catch (err) {
    console.error("Error enviando email:", err);
    res.status(500).json({ error: "Error interno al enviar el email" });
  }
}
