import { mongooseConnect } from '@/lib/mongoose';
import SupportRequest from '@/models/SupportRequest';

export default async function handler(req, res) {
  await mongooseConnect();

  if (req.method === 'POST') {
    try {
      const supportRequest = await SupportRequest.create(req.body);
      res.status(201).json({ success: true, data: supportRequest });
    } catch (error) {
      console.error('Error creating support request:', error);
      res.status(400).json({ success: false, message: 'Error creating support request', error: error.message });
    }
  } else {
    res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }
}
