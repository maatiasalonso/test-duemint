const content = {
  title: 'Destinatarios',
  buttonText: 'Nuevo destinatario',
  values: [
    {
      name: 'Andres Falcon Fuentes',
      rut: '12345678-6',
      email: 'andresfalcon@gmail.com',
      bankAccounts: [
        {
          favourite: false,
          alias: 'My Checking Account',
          bank: 'Banco de Chile',
          accountType: 'Cuenta Corriente',
          accountNumber: '12345678-6',
        },
        {
          favourite: true,
          alias: 'My Savings Account',
          bank: 'Banco de Chile',
          accountType: 'Cuenta Vista',
          accountNumber: '12345678-6',
        },
      ],
    },
    {
      name: 'Carla Falcon Fuentes',
      rut: '12345677-9',
      email: 'carlafalcon@gmail.com',
      bankAccounts: [
        {
          favourite: false,
          alias: 'Carla Checking Account',
          bank: 'Banco de Chile',
          accountType: 'Cuenta Corriente',
          accountNumber: '12345678-6',
        },
        {
          favourite: false,
          alias: 'Carla Savings Account',
          bank: 'Banco de Chile',
          accountType: 'Cuenta Vista',
          accountNumber: '12345678-6',
        },
      ],
    },
    {
      name: 'Juan Perez',
      rut: '87654321-6',
      email: 'juanperez@gmail.com',
      bankAccounts: [
        {
          favourite: true,
          alias: 'Juan Checking Account',
          bank: 'Banco Santander',
          accountType: 'Cuenta Corriente',
          accountNumber: '87654321-6',
        },
        {
          favourite: false,
          alias: 'Juan Savings Account',
          bank: 'Banco Santander',
          accountType: 'Cuenta Vista',
          accountNumber: '87654321-6',
        },
      ],
    },
    {
      name: 'Maria Rodriguez',
      rut: '98765432-1',
      email: 'mariarodriguez@gmail.com',
      bankAccounts: [
        {
          favourite: true,
          alias: 'Maria Checking Account',
          bank: 'Banco BCI',
          accountType: 'Cuenta Corriente',
          accountNumber: '98765432-1',
        },
        {
          favourite: false,
          alias: 'Maria Savings Account',
          bank: 'Banco BCI',
          accountType: 'Cuenta Vista',
          accountNumber: '98765432-1',
        },
      ],
    },
  ],
};

export const siteContent: any = {
  '/': content,
};
