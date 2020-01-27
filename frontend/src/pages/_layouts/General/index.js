import React from 'react';
import PropTypes from 'prop-types';

import { Container, Content } from './styles';

import logo from '../../../assets/logo.svg';

export default function GeneralLayout({ children }) {
  return (
    <Container>
      <img src={logo} alt="Logo" />
      <Content>{children}</Content>
    </Container>
  );
}

GeneralLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
