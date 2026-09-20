import { render, screen, fireEvent } from '@testing-library/react';
import FaqAccordion from '../components/FaqAccordion';

describe('FaqAccordion Component', () => {
  it('renders all required FAQ questions', () => {
    render(<FaqAccordion />);

    const questions = [
      '¿Qué volumen de agua pueden entregar?',
      '¿Realizan entregas programadas?',
      '¿Atienden emergencias?',
      '¿En qué zonas trabajan?',
      '¿Puedo contratar entregas recurrentes?',
      '¿Alquilan cisternas?',
      '¿Cuánto cuesta una entrega?',
      '¿Con cuánto tiempo debo solicitar el servicio?'
    ];

    questions.forEach((q) => {
      expect(screen.getByText(q)).toBeInTheDocument();
    });
  });

  it('toggles accordion answer visibility when clicking question button', () => {
    render(<FaqAccordion />);

    const qBtn = screen.getByText('¿Realizan entregas programadas?');
    fireEvent.click(qBtn);

    expect(screen.getByText(/Sí, coordinamos entregas programadas con frecuencias fijas/i)).toBeInTheDocument();
  });
});
