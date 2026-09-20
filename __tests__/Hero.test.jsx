import { render, screen, fireEvent } from '@testing-library/react';
import Hero from '../components/Hero';

describe('Hero Component', () => {
  it('renders title and subtitle correctly', () => {
    render(<Hero onOpenQuoteModal={() => {}} />);
    
    expect(screen.getByText(/Agua cuando la necesitas,/i)).toBeInTheDocument();
    expect(screen.getByText(/donde la necesitas./i)).toBeInTheDocument();
    expect(screen.getByText(/Abastecimiento y transporte de agua mediante camiones cisterna/i)).toBeInTheDocument();
  });

  it('renders primary CTA buttons and triggers modal on click', () => {
    const handleOpenModal = jest.fn();
    render(<Hero onOpenQuoteModal={handleOpenModal} />);

    const buttons = screen.getAllByRole('button');
    const quoteBtn = buttons.find(b => b.textContent.includes('Solicitar Cotización'));
    expect(quoteBtn).toBeDefined();

    fireEvent.click(quoteBtn);
    expect(handleOpenModal).toHaveBeenCalledTimes(1);
  });
});
