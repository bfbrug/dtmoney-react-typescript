import { createServer } from 'miragejs';
import React from 'react';
import ReactDOM from 'react-dom/client';

import { App } from './App';

createServer({
  routes() {
    this.namespace = 'api';

    this.get('transactions', () => {
      return [
        {
          id: 1,
          title: 'Transaction 1',
          amount: 400,
          type: 'deposit',
          category: '|Food',
          createdAt: new Date(),
        },
      ];
    });
  },
});

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
