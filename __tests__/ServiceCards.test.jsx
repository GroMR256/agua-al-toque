import { render, screen, fireEvent } from '@testing-library/react';
import ServiceCards from '../components/ServiceCards';

describe('ServiceCards Component', () => {
  it('renders main services with descriptions and image elements', () => {
    render(<ServiceCards onOpenQuoteModal={() => {}} />);

    const serviceTitles = [
      'Suministro de agua',
      'Abastecimiento empresarial',
      'Agua para agricultura',
      'Agua para minería y proyectos',
      'Alquiler de cisternas',
      'Abastecimiento de emergencia'
    ];

    serviceTitles.forEach((title) => {
      expect(screen.getByText(title)).toBeInTheDocument();
    });

    const images = screen.getAllByRole('img');
    expect(images.length).toBeGreaterThanOrEqual(6);
  });

  it('triggers quote modal callback when clicking a quote button on a service card', () => {
    const handleOpenModal = jest.fn();
    render(<ServiceCards onOpenQuoteModal={handleOpenModal} />);

    const buttons = screen.getAllByRole('button');
    const quoteButtons = buttons.filter(b => b.textContent.includes('Solicitar cotización'));
    expect(quoteButtons.length).toBe(6);

    fireEvent.click(quoteButtons[0]);
    expect(handleOpenModal).toHaveBeenCalledWith('Suministro de agua');
  });
});
