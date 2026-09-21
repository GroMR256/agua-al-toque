import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import ContactSection from '../components/ContactSection';

describe('ContactSection Component', () => {
  beforeEach(() => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: async () => ({
        success: true,
        message: '¡Solicitud registrada con éxito!',
        whatsappUrl: 'https://wa.me/51999999999?text=Test'
      })
    });
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('renders contact form inputs correctly', () => {
    render(<ContactSection />);

    expect(screen.getByPlaceholderText(/Tu nombre/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Ej. 987 654 321/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Nombre de tu empresa o particular/i)).toBeInTheDocument();
  });

  it('submits lead data to /api/quote on submit', async () => {
    render(<ContactSection />);

    const nameInput = screen.getByPlaceholderText(/Tu nombre/i);
    const phoneInput = screen.getByPlaceholderText(/Ej. 987 654 321/i);
    const submitBtn = screen.getByRole('button', { name: /Enviar Cotización/i });

    fireEvent.change(nameInput, { target: { value: 'Carlos Ramos' } });
    fireEvent.change(phoneInput, { target: { value: '987654321' } });

    fireEvent.click(submitBtn);

    await waitFor(() => {
      expect(global.fetch).toHaveBeenCalledWith(
        '/api/quote',
        expect.objectContaining({
          method: 'POST',
          headers: { 'Content-Type': 'application/json' }
        })
      );
    });
  });
});
