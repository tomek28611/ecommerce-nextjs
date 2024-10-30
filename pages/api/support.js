import { mongooseConnect } from '@/lib/mongoose';
import SupportRequest from '@/models/SupportRequest';
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  await mongooseConnect();

  if (req.method === 'POST') {
    try {
      // Save message to the database
      const supportRequest = await SupportRequest.create(req.body);

      // Configure Nodemailer transporter
      const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',  
        port: 587, // use 465 for secure
        auth: {
          user: 'autodilyobchod@gmail.com',
          pass: process.env.EMAIL_PASSWORD,   
        },
        secure: false, // true if port is 465
        logger: true,
      });

      // Send email
      await transporter.sendMail({
        from: 'autodilobchod@gmail.com',
        to: 'tomek28611@gmail.com, autodilykr@gmail.com, 728445566@seznam.cz',
        subject: `Nový dotaz od zákazníka na dil: ${req.body.name}`,
        html: `
    <div style="font-family: Arial, sans-serif; background-color: #f7f7f7; padding: 20px; border-radius: 8px;">
      <div style="text-align: center;">
        <img src="https://moto-rental.s3.amazonaws.com/1730277855197.png" alt="Logo Auto-Dily-Express" style="width: 150px; margin-bottom: 20px;">
        <h1 style="color: #333;">Máte nový požadavek na díl Auto-Dily-Express</h1>
      </div>
      <table style="width: 100%; margin-top: 20px; border-collapse: collapse;">
        <tr style="background-color: #fff; border: 1px solid #ddd;">
          <td style="padding: 10px; text-align: center;"><strong>Jméno:</strong> ${req.body.name}</td>
        </tr>
        <tr style="background-color: #fff; border: 1px solid #ddd;">
          <td style="padding: 10px; text-align: center;"><strong>Email:</strong> ${req.body.email}</td>
        </tr>
        <tr style="background-color: #fff; border: 1px solid #ddd;">
          <td style="padding: 10px; text-align: center;"><strong>Telefon:</strong> ${req.body.phone || 'Neuvedeno'}</td>
        </tr>
        <tr style="background-color: #fff; border: 1px solid #ddd;">
          <td style="padding: 10px; text-align: center;"><strong>Název dílu:</strong> ${req.body.title || 'Neuvedeno'}</td>
        </tr>
        <tr style="background-color: #fff; border: 1px solid #ddd;">
          <td style="padding: 10px; text-align: center;"><strong>Číslo dílu:</strong> ${req.body.titleNr || 'Neuvedeno'}</td>
        </tr>
        <tr style="background-color: #fff; border: 1px solid #ddd;">
          <td style="padding: 10px; text-align: center;"><strong>VIN:</strong> ${req.body.vin || 'Neuvedeno'}</td>
        </tr>
        <tr style="background-color: #fff; border: 1px solid #ddd;">
          <td style="padding: 10px; text-align: center;"><strong>Zpráva:</strong></td>
        </tr>
        <tr style="background-color: #fff; border: 1px solid #ddd;">
          <td style="padding: 10px; text-align: center;">${req.body.message || 'Neuvedeno'}</td>
        </tr>
      </table>
    </div>
  `,
      });

      res.status(201).json({ success: true, data: supportRequest });
    } catch (error) {
      console.error('Error creating support request:', error);
      res.status(400).json({ success: false, message: 'Error creating support request', error: error.message });
    }
  } else {
    res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }
}
