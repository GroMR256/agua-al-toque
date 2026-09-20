import { render, screen } from '@testing-library/react';
import SectorsGrid from '../components/SectorsGrid';

describe('SectorsGrid Component', () => {
  it('renders all 8 target sectors with photographic images and descriptions', () => {
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

    const sectorImages = screen.getAllByRole('img');
    expect(sectorImages.length).toBeGreaterThanOrEqual(8);
  });
});
