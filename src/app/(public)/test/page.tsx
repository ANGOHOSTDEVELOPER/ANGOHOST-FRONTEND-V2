'use client';

import { useEffect } from 'react';

export default function Pagamento() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://widget.appypay.co.ao/main.js';
    script.id = 'appyPay-charges-widget-v2';
    script.setAttribute('data-merchant-name', 'Your Legal Name');
    script.setAttribute('data-api-key', 'your-api-key');
    script.setAttribute('data-client-id', 'your-client-id');
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-2xl font-bold mb-4">Pagamento</h1>
      <p className="mb-4">Finalize sua compra com segurança via AppyPay.</p>
      <div id="appyPay-widget-container" className="w-full max-w-md border p-4 rounded-lg shadow-lg"></div>
    </div>
  );
}
