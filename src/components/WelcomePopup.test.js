import React from 'react';
import { render, screen } from '@testing-library/react';
import WelcomePopup from './WelcomePopup';

describe('WelcomePopup Component', () => {

  test('renders the correct heading', () => {
    render(<WelcomePopup />);
    const headingElement = screen.getByRole('heading', { name: /WELCOME/i });
    expect(headingElement).toBeInTheDocument();
  });

  test('renders the correct description', () => {
    render(<WelcomePopup />);
    const descriptionElement = screen.getByText(/The DevSecOps Day 2 Hackathon!/i);
    expect(descriptionElement).toBeInTheDocument();
  });
});
