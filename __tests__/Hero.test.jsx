import { render, screen, fireEvent } from '@testing-library/react';
import Hero from '../components/Hero';

describe('Hero Component', () => {
  it('renders title and subtitle correctly', () => {
    render(<Hero onOpenQuoteModal={() => {}} />);
    
    expect(screen.getByRole('heading', { level: 1, name: /^Agua ?al toque$/i })).toBeInTheDocument();
    expect(screen.getByText(/Agua cuando la necesitas, donde la necesitas./i)).toBeInTheDocument();
    expect(screen.getByText(/Camiones cisterna de 10, 15 y 30/i)).toBeInTheDocument();
  });

  it('renders primary CTA buttons and triggers modal on click', () => {
    const handleOpenModal = jest.fn();
    render(<Hero onOpenQuoteModal={handleOpenModal} />);

    const buttons = screen.getAllByRole('button');
    const quoteBtn = buttons.find(b => /Solicitar cotización/i.test(b.textContent));
    expect(quoteBtn).toBeDefined();

    fireEvent.click(quoteBtn);
    expect(handleOpenModal).toHaveBeenCalledTimes(1);
  });
});
