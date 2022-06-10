import { createServer, Model } from 'miragejs';
import React from 'react';
import ReactDOM from 'react-dom/client';

import { App } from './App';

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Freelance de site',
          type: 'deposit',
          category: 'Dev',
          amount: 6000,
          createdAt: new Date('2022-06-05 08:00:00'),
        },
        {
          id: 2,
          title: 'IPVA carro',
          type: 'withdraw',
          category: 'carro',
          amount: 2000,
          createdAt: new Date('2022-06-08 11:00:00'),
        },
      ],
    });
  },

  routes() {
    this.namespace = 'api';

    this.get('transactions', () => {
      return this.schema.all('transaction');
    });

    this.post('transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create('transaction', data);
    });
  },
});

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
