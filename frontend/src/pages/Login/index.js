import React, { useState } from 'react';
import api from '../../services/api';
import Layout from '../../pages/_layouts/General';

import { Description, Form, Button } from './styles';

function Login({ history }) {
  const [email, setEmail] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();

    const response = await api.post('/sessions', {
      email: email,
    });

    const { _id } = response.data;

    localStorage.setItem('user', _id);

    history.push('/dashboard');
  }
  return (
    <Layout>
      <Description>
        Ofereça <strong>spots</strong> para programadores e encontre talentos
        para sua empresa
      </Description>

      <Form onSubmit={handleSubmit}>
        <label htmlFor="email">E-MAIL *</label>
        <input
          id="email"
          type="email"
          placeholder="Seu melhor e-mail"
          value={email}
          onChange={event => setEmail(event.target.value)}
        />
        <Button type="submit">Entrar</Button>
      </Form>
    </Layout>
  );
}

export default Login;
