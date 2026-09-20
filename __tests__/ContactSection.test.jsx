import { render, screen, fireEvent } from '@testing-library/react';
import ContactSection from '../components/ContactSection';

describe('ContactSection Component (Simplified Form)', () => {
  it('renders simplified non-intrusive contact form inputs', () => {
    render(<ContactSection />);

    expect(screen.getByPlaceholderText(/Tu nombre/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/\[NÚMERO DE TELÉFONO\]/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Nombre de tu empresa o particular/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Ej. Requiero una cisterna de 10 m³/i)).toBeInTheDocument();
  });

  it('updates form inputs and triggers submission window.open for WhatsApp', () => {
    window.open = jest.fn();

    render(<ContactSection />);

    const nameInput = screen.getByPlaceholderText(/Tu nombre/i);
    const phoneInput = screen.getByPlaceholderText(/\[NÚMERO DE TELÉFONO\]/i);
    const submitBtn = screen.getByRole('button', { name: /Enviar Cotización/i });

    fireEvent.change(nameInput, { target: { value: 'Carlos Ramos' } });
    fireEvent.change(phoneInput, { target: { value: '987654321' } });

    fireEvent.click(submitBtn);

    expect(window.open).toHaveBeenCalledTimes(1);
    expect(window.open).toHaveBeenCalledWith(expect.stringContaining('https://wa.me/51999999999'), '_blank');
  });
});
