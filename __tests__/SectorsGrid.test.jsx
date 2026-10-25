import { render, screen } from '@testing-library/react';
import SectorsGrid from '../components/SectorsGrid';

describe('SectorsGrid Component', () => {
  it('renders all 8 target sectors with their usual tanker size and a photograph', () => {
    render(<SectorsGrid onOpenQuoteModal={() => {}} />);

    const sectors = [
      'Hoteles y restaurantes',
      'Agricultura',
      'Minería',
      'Construcción',
      'Industria',
      'Comercio y empresas',
      'Instituciones',
      'Hogares y condominios'
    ];

    sectors.forEach((sec) => {
      expect(screen.getByText(sec)).toBeInTheDocument();
    });

    expect(screen.getAllByText(/Cisterna habitual:/i)).toHaveLength(8);
    expect(screen.getAllByRole('img').length).toBeGreaterThanOrEqual(1);
  });
});
