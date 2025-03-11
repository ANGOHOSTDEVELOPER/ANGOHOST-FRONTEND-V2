// pages/api/createQrCode.js
import axios from 'axios';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Método não permitido' });
  }

  const options = {
    method: 'POST',
    url: 'https://gwy-api.appypay.co.ao/v1/qr-codes', // Substitua {version} pela versão adequada, ex: v1
    headers: {
      Accept: 'application/json',
      'Accept-Language': '',
      'Content-Type': 'application/json',
      Assertion: '', // Se necessário, preencha este campo
      Authorization: 'Bearer 73945d71-7397-4682-ac8b-27019ac43208'
    },
    data: {
      amount: 300.23,
      currency: 'AOA',
      merchantTransactionId: 'A12345678912345',
      paymentMethod: 'GPO_53c70da3-1c88-4391-8b60-ab4757fbb044',
      description: 'Payment X',
      qrCodeType: 'SINGLE',
      minAmount: 1000,
      maxTransactions: 5,
      startDate: '2024-11-19',
      endDate: '2024-11-19',
      options: { Option1: 'string', Option2: 'string' }
    }
  };

  try {
    const { data } = await axios.request(options);
    return res.status(200).json(data);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Erro ao processar a requisição' });
  }
}
 