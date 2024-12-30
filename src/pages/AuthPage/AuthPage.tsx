import React, { FC, useState } from 'react';
import { Form } from '../../components/Form/Form';

export const AuthPage: FC = () => {
  const [registration, setRegistration] = useState<boolean>(false);

  return (
    <main className="auth-page__wrapper">
      <Form registration={registration} setRegistration={setRegistration} />
    </main>
  );
};
