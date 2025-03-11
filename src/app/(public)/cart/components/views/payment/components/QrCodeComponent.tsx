import { useState } from 'react';
import axios from 'axios';

const QrCodeComponent = () => {
  const [qrData, setQrData] = useState(null);
  const [error, setError] = useState(null);

  const createQrCode = async () => {
    try {
      const response = await axios.post('/api/createQrCode');
      setQrData(response.data);
    } catch (err) {
      console.log(err)
      setError('Erro ao criar QR Code')
    }
  };

  return (
    <div>
      <button onClick={createQrCode}>Gerar QR Code</button>
      {qrData && <pre>{JSON.stringify(qrData, null, 2)}</pre>}
      {error && <p>{error}</p>}
    </div>
  );
};

export default QrCodeComponent;
